'use client';

import { useEffect, useRef, useState } from 'react';

// Helper to create a 3D axis-aligned box primitive:
// [cx, cy, cz] = center in model units, [wx, wy, wz] = dimensions (width X, height Y, depth Z)
function createBox(cx, cy, cz, wx, wy, wz, system, color, edgeColor, alpha = 0.92) {
  const hx = wx / 2;
  const hy = wy / 2;
  const hz = wz / 2;

  const vertices = [
    [cx - hx, cy - hy, cz - hz], // 0: left-bottom-back
    [cx + hx, cy - hy, cz - hz], // 1: right-bottom-back
    [cx + hx, cy + hy, cz - hz], // 2: right-top-back
    [cx - hx, cy + hy, cz - hz], // 3: left-top-back
    [cx - hx, cy - hy, cz + hz], // 4: left-bottom-front
    [cx + hx, cy - hy, cz + hz], // 5: right-bottom-front
    [cx + hx, cy + hy, cz + hz], // 6: right-top-front
    [cx - hx, cy + hy, cz + hz], // 7: left-top-front
  ];

  // Faces with outward normals for Revit-style shaded directional lighting
  const faces = [
    { indices: [3, 2, 6, 7], normal: [0, 1, 0], shade: 1.12 },   // Top
    { indices: [0, 4, 5, 1], normal: [0, -1, 0], shade: 0.68 },  // Bottom
    { indices: [4, 7, 6, 5], normal: [0, 0, 1], shade: 0.96 },   // Front (+Z)
    { indices: [0, 1, 2, 3], normal: [0, 0, -1], shade: 0.82 },  // Back (-Z)
    { indices: [1, 5, 6, 2], normal: [1, 0, 0], shade: 0.90 },   // Right (+X)
    { indices: [0, 3, 7, 4], normal: [-1, 0, 0], shade: 0.76 },  // Left (-X)
  ];

  return {
    type: 'box',
    center: [cx, cy, cz],
    vertices,
    faces,
    system,
    color,
    edgeColor,
    alpha,
  };
}

// Build the complete 3D MEP BIM Coordination Model (2-Story + Roof Mechanical Penthouse/RTUs)
function buildBimModel() {
  const elements = [];
  const lines = [];

  // Color palette matching Revit MEP discipline templates
  const HVAC_FILL = [56, 189, 248];     // Cyan / Sky 400
  const HVAC_EDGE = 'rgba(186, 230, 253, 0.85)';
  const HVAC_EQ_FILL = [14, 165, 233];  // RTU Equipment Sky 500

  const ELEC_FILL = [251, 146, 60];     // Engivato Orange 400
  const ELEC_EDGE = 'rgba(254, 215, 170, 0.9)';
  const ELEC_EQ_FILL = [249, 115, 22];  // Switchgear Orange 500

  const PLUMB_FILL = [52, 211, 153];    // Emerald 400
  const PLUMB_EDGE = 'rgba(167, 243, 208, 0.85)';
  const PLUMB_EQ_FILL = [16, 185, 129]; // Pump/Tank Emerald 500

  const STRUCT_FILL = [148, 163, 184];  // Ghosted Architectural/Structural Slate
  const STRUCT_EDGE = 'rgba(148, 163, 184, 0.28)';

  // Floor elevations (Y axis is vertical)
  const Y_L1 = -48;   // Level 1 Slab
  const Y_L2 = 4;     // Level 2 Slab
  const Y_ROOF = 56;  // Roof Deck

  // 1. STRUCTURAL GRID & GHOSTED FLOOR SLABS
  const gridExtent = 92;
  const gridPositions = [-78, -26, 26, 78];

  // Ground structural grid lines (A-D, 1-4)
  for (const pos of gridPositions) {
    lines.push({
      p1: [pos, Y_L1 - 2, -gridExtent],
      p2: [pos, Y_L1 - 2, gridExtent],
      system: 'struct',
      color: 'rgba(148, 163, 184, 0.22)',
      width: 1,
      dashed: true,
    });
    lines.push({
      p1: [-gridExtent, Y_L1 - 2, pos],
      p2: [gridExtent, Y_L1 - 2, pos],
      system: 'struct',
      color: 'rgba(148, 163, 184, 0.22)',
      width: 1,
      dashed: true,
    });
  }

  // Translucent floor slabs (Level 1, Level 2, Roof)
  elements.push(createBox(0, Y_L1, 0, 164, 2.5, 164, 'struct', STRUCT_FILL, STRUCT_EDGE, 0.14));
  elements.push(createBox(0, Y_L2, 0, 164, 2.5, 164, 'struct', STRUCT_FILL, STRUCT_EDGE, 0.12));
  elements.push(createBox(0, Y_ROOF, 0, 164, 2.5, 164, 'struct', STRUCT_FILL, STRUCT_EDGE, 0.10));

  // Corner & perimeter structural steel columns
  for (const gx of [-78, 0, 78]) {
    for (const gz of [-78, 0, 78]) {
      if (gx === 0 && gz === 0) continue;
      lines.push({
        p1: [gx, Y_L1, gz],
        p2: [gx, Y_ROOF, gz],
        system: 'struct',
        color: 'rgba(148, 163, 184, 0.28)',
        width: 1.5,
      });
    }
  }

  // 2. MECHANICAL (HVAC) SYSTEM - RTUs, Vertical Shafts, Main Trunks, Branches & Diffusers
  // Rooftop Package Unit RTU-1 & RTU-2 on structural curbs
  elements.push(createBox(-34, Y_ROOF + 11, -24, 34, 18, 24, 'hvac', HVAC_EQ_FILL, HVAC_EDGE, 0.95));
  elements.push(createBox(-34, Y_ROOF + 20.5, -28, 10, 2, 10, 'hvac', HVAC_FILL, HVAC_EDGE, 0.95)); // Fan shroud 1
  elements.push(createBox(-34, Y_ROOF + 20.5, -18, 10, 2, 10, 'hvac', HVAC_FILL, HVAC_EDGE, 0.95)); // Fan shroud 2

  elements.push(createBox(38, Y_ROOF + 9, 28, 26, 14, 20, 'hvac', HVAC_EQ_FILL, HVAC_EDGE, 0.95));
  elements.push(createBox(38, Y_ROOF + 16.5, 28, 10, 2, 10, 'hvac', HVAC_FILL, HVAC_EDGE, 0.95));

  // Main Vertical Supply & Return Riser Shaft (drops from RTU-1 through L2 to L1 plenum)
  elements.push(createBox(-34, (Y_ROOF + Y_L1 + 36) / 2 + 4, -24, 12, Y_ROOF - (Y_L1 + 36) + 6, 10, 'hvac', HVAC_FILL, HVAC_EDGE, 0.92));

  // Secondary Riser from RTU-2 to L2 plenum
  elements.push(createBox(38, Y_ROOF - 7, 28, 10, 14, 10, 'hvac', HVAC_FILL, HVAC_EDGE, 0.92));

  // Level 2 Ceiling Plenum HVAC (Elevation: Y = 42)
  const Y_DUCT_L2 = 42;
  // Main West-East Supply Trunk on L2
  elements.push(createBox(2, Y_DUCT_L2, -24, 124, 7, 10, 'hvac', HVAC_FILL, HVAC_EDGE, 0.92));
  // Cross Trunk connecting to RTU-2 riser
  elements.push(createBox(38, Y_DUCT_L2, 6, 9, 6.5, 52, 'hvac', HVAC_FILL, HVAC_EDGE, 0.92));

  // L2 Branch Ducts & Ceiling Diffusers
  for (const bx of [-48, -12, 24, 56]) {
    // North & South branch runs
    elements.push(createBox(bx, Y_DUCT_L2, 16, 4.5, 4, 72, 'hvac', HVAC_FILL, HVAC_EDGE, 0.88));
    // VAV terminal box with reheat coil
    elements.push(createBox(bx, Y_DUCT_L2, -2, 8, 6, 9, 'hvac', HVAC_EQ_FILL, HVAC_EDGE, 0.95));
    // Supply diffusers (drops to ceiling plane Y = 33)
    for (const dz of [-52, 14, 48]) {
      elements.push(createBox(bx, Y_DUCT_L2 - 4.5, dz, 3, 6, 3, 'hvac', HVAC_FILL, HVAC_EDGE, 0.85));
      elements.push(createBox(bx, Y_DUCT_L2 - 8, dz, 9, 1.5, 9, 'hvac', HVAC_FILL, HVAC_EDGE, 0.92));
    }
  }

  // Level 1 Ceiling Plenum HVAC (Elevation: Y = -10)
  const Y_DUCT_L1 = -10;
  // Main West-East Supply Trunk on L1
  elements.push(createBox(4, Y_DUCT_L1, -24, 120, 7, 10, 'hvac', HVAC_FILL, HVAC_EDGE, 0.92));
  // L1 Branch Ducts & Ceiling Diffusers
  for (const bx of [-44, -6, 32, 58]) {
    elements.push(createBox(bx, Y_DUCT_L1, 16, 4.5, 4, 72, 'hvac', HVAC_FILL, HVAC_EDGE, 0.88));
    for (const dz of [-50, 18, 50]) {
      elements.push(createBox(bx, Y_DUCT_L1 - 4.5, dz, 3, 6, 3, 'hvac', HVAC_FILL, HVAC_EDGE, 0.85));
      elements.push(createBox(bx, Y_DUCT_L1 - 8, dz, 9, 1.5, 9, 'hvac', HVAC_FILL, HVAC_EDGE, 0.92));
    }
  }

  // 3. ELECTRICAL SYSTEM - Main Switchgear, Transformer, Panelboards, Cable Trays & Lighting
  // Level 1 Main Switchgear (MDP-1) & Dry-Type Transformer
  elements.push(createBox(-64, Y_L1 + 14, -56, 8, 24, 22, 'elec', ELEC_EQ_FILL, ELEC_EDGE, 0.96));
  elements.push(createBox(-64, Y_L1 + 7, -36, 9, 11, 10, 'elec', ELEC_EQ_FILL, ELEC_EDGE, 0.96));

  // Level 2 Distribution Panelboards (LP-2A & LP-2B)
  elements.push(createBox(-64, Y_L2 + 13, -52, 5, 16, 14, 'elec', ELEC_EQ_FILL, ELEC_EDGE, 0.96));

  // Vertical Electrical Feeder Busduct / Riser (L1 Switchgear to L2 Panel & Roof RTU Disconnects)
  elements.push(createBox(-64, (Y_ROOF + Y_L1 + 12) / 2, -52, 3.5, Y_ROOF - Y_L1 - 8, 3.5, 'elec', ELEC_FILL, ELEC_EDGE, 0.94));

  // Rooftop feeder conduit run from electrical riser to RTU-1 & RTU-2
  elements.push(createBox(-49, Y_ROOF + 3, -52, 32, 2.2, 2.5, 'elec', ELEC_FILL, ELEC_EDGE, 0.92));
  elements.push(createBox(-34, Y_ROOF + 3, -38, 2.5, 2.2, 28, 'elec', ELEC_FILL, ELEC_EDGE, 0.92));

  // Overhead Cable Trays on Level 2 (Y = 35, coordinated cleanly beneath HVAC ducts at Y = 42)
  const Y_TRAY_L2 = 35;
  elements.push(createBox(-2, Y_TRAY_L2, -52, 126, 2.2, 5, 'elec', ELEC_FILL, ELEC_EDGE, 0.92));
  elements.push(createBox(58, Y_TRAY_L2, 2, 5, 2.2, 108, 'elec', ELEC_FILL, ELEC_EDGE, 0.92));
  elements.push(createBox(-2, Y_TRAY_L2, 54, 120, 2.2, 4.5, 'elec', ELEC_FILL, ELEC_EDGE, 0.92));

  // Overhead Cable Trays on Level 1 (Y = -17, coordinated beneath L1 HVAC ducts at Y = -10)
  const Y_TRAY_L1 = -17;
  elements.push(createBox(-2, Y_TRAY_L1, -52, 126, 2.2, 5, 'elec', ELEC_FILL, ELEC_EDGE, 0.92));
  elements.push(createBox(58, Y_TRAY_L1, 2, 5, 2.2, 108, 'elec', ELEC_FILL, ELEC_EDGE, 0.92));

  // Recessed 2x4 LED Lighting Fixtures Grid on L2 & L1
  for (const lx of [-30, 6, 42]) {
    for (const lz of [-36, 0, 34]) {
      elements.push(createBox(lx, 31, lz, 11, 1.2, 5, 'elec', ELEC_FILL, ELEC_EDGE, 0.88));
      elements.push(createBox(lx, -21, lz, 11, 1.2, 5, 'elec', ELEC_FILL, ELEC_EDGE, 0.88));
    }
  }

  // 4. PLUMBING & PIPING SYSTEM - Domestic Water Skid, Water Heater, Risers & Sanitary Stacks
  // Level 1 Domestic Water Booster Skid & Commercial Water Heater Tank
  elements.push(createBox(62, Y_L1 + 9, -56, 14, 14, 14, 'plumb', PLUMB_EQ_FILL, PLUMB_EDGE, 0.96));
  elements.push(createBox(42, Y_L1 + 11, -56, 10, 18, 10, 'plumb', PLUMB_EQ_FILL, PLUMB_EDGE, 0.96));

  // Vertical Sanitary Waste & Vent Stack (extends through roof as VTR) + Domestic Water Risers
  elements.push(createBox(62, (Y_ROOF + 12 + Y_L1) / 2, -44, 3.2, Y_ROOF + 12 - Y_L1, 3.2, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.94));
  elements.push(createBox(54, (Y_ROOF + Y_L1) / 2, -44, 2.4, Y_ROOF - Y_L1 - 10, 2.4, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.94));

  // Level 2 Plumbing Distribution Loop & Fixture Batteries (Y = 26)
  const Y_PIPE_L2 = 26;
  elements.push(createBox(8, Y_PIPE_L2, -44, 108, 2.4, 2.4, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.92));
  elements.push(createBox(-44, Y_PIPE_L2, -6, 2.4, 2.4, 78, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.92));
  elements.push(createBox(16, Y_PIPE_L2, -6, 2.4, 2.4, 78, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.92));

  // Restroom / Wet-Wall Fixture Stub-ups on L2
  for (const pz of [-28, -12, 4, 20]) {
    elements.push(createBox(-44, Y_L2 + 9, pz, 2.2, 14, 2.2, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.9));
    elements.push(createBox(16, Y_L2 + 9, pz, 2.2, 14, 2.2, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.9));
  }

  // Level 1 Plumbing Distribution Loop & Fixture Batteries (Y = -26)
  const Y_PIPE_L1 = -26;
  elements.push(createBox(8, Y_PIPE_L1, -44, 108, 2.4, 2.4, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.92));
  elements.push(createBox(-44, Y_PIPE_L1, -6, 2.4, 2.4, 78, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.92));
  elements.push(createBox(16, Y_PIPE_L1, -6, 2.4, 2.4, 78, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.92));

  for (const pz of [-28, -12, 4, 20]) {
    elements.push(createBox(-44, Y_L1 + 9, pz, 2.2, 14, 2.2, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.9));
    elements.push(createBox(16, Y_L1 + 9, pz, 2.2, 14, 2.2, 'plumb', PLUMB_FILL, PLUMB_EDGE, 0.9));
  }

  return { elements, lines };
}

const MODEL_DATA = buildBimModel();

// Rotate 3D point [x, y, z] by yaw (around Y axis) and pitch (around X axis)
function projectPoint([x, y, z], cosY, sinY, cosP, sinP, scale, cx, cy) {
  // Rotate around Y (turntable orbit)
  const rx = x * cosY - z * sinY;
  const rz = x * sinY + z * cosY;

  // Rotate around X (isometric tilt)
  const ry = y * cosP - rz * sinP;
  const depth = y * sinP + rz * cosP;

  // Subtle perspective foreshortening
  const fov = 560;
  const perspective = fov / (fov + depth * 0.45);

  return {
    x: cx + rx * scale * perspective,
    y: cy - ry * scale * perspective,
    depth,
  };
}

export default function RevitBimViewer() {
  const canvasRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'hvac' | 'elec' | 'plumb'
  const filterRef = useRef('all');
  const rotationRef = useRef({
    yaw: 0.62,
    pitch: 0.44,
    isDragging: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    filterRef.current = activeFilter;
  }, [activeFilter]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let lastTimestamp = performance.now();

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = (now) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      // Slow, steady turntable orbit when not manually dragging
      if (!rotationRef.current.isDragging && !prefersReducedMotion) {
        rotationRef.current.yaw += dt * 0.22;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const width = rect.width || 520;
      const height = rect.height || 384;

      if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Dark CAD / Revit coordination viewport background
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.48,
        20,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );
      bgGrad.addColorStop(0, '#0f1d3a');
      bgGrad.addColorStop(1, '#070e20');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const { yaw, pitch } = rotationRef.current;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);

      const scale = Math.min(width, height) / 215;
      const cx = width * 0.5;
      const cy = height * 0.52;
      const currentFilter = filterRef.current;

      // 1. Draw structural grid & column lines in background
      for (const ln of MODEL_DATA.lines) {
        const p1 = projectPoint(ln.p1, cosY, sinY, cosP, sinP, scale, cx, cy);
        const p2 = projectPoint(ln.p2, cosY, sinY, cosP, sinP, scale, cx, cy);

        ctx.beginPath();
        if (ln.dashed) {
          ctx.setLineDash([3, 4]);
        } else {
          ctx.setLineDash([]);
        }
        ctx.strokeStyle = ln.color;
        ctx.lineWidth = ln.width || 1;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // 2. Project & depth-sort all 3D faces (Painter's Algorithm)
      const renderFaces = [];

      for (const el of MODEL_DATA.elements) {
        const isStruct = el.system === 'struct';
        const isHighlighted = currentFilter === 'all' || el.system === currentFilter;

        // Ghost out non-selected MEP systems when a specific discipline filter is active
        const elementAlpha = isStruct
          ? el.alpha
          : isHighlighted
          ? el.alpha
          : 0.11;

        const projectedVerts = el.vertices.map((v) =>
          projectPoint(v, cosY, sinY, cosP, sinP, scale, cx, cy)
        );

        for (const face of el.faces) {
          // Rotate face normal to check backface culling (keep translucent struct faces visible)
          const [nx, ny, nz] = face.normal;
          const rnx = nx * cosY - nz * sinY;
          const rnz = nx * sinY + nz * cosY;
          const viewZ = ny * sinP + rnz * cosP;

          if (!isStruct && viewZ > 0.15) continue;

          const pts = face.indices.map((idx) => projectedVerts[idx]);
          const avgDepth =
            (pts[0].depth + pts[1].depth + pts[2].depth + pts[3].depth) * 0.25 +
            (isStruct ? 18 : 0);

          renderFaces.push({
            pts,
            avgDepth,
            color: el.color,
            shade: face.shade,
            edgeColor: isHighlighted || isStruct ? el.edgeColor : 'rgba(148, 163, 184, 0.12)',
            alpha: elementAlpha,
            isStruct,
          });
        }
      }

      // Sort back-to-front (largest depth first)
      renderFaces.sort((a, b) => b.avgDepth - a.avgDepth);

      // 3. Draw sorted 3D faces with Revit-style shaded edges
      for (const rf of renderFaces) {
        const [r, g, b] = rf.color;
        const sr = Math.min(255, Math.round(r * rf.shade));
        const sg = Math.min(255, Math.round(g * rf.shade));
        const sb = Math.min(255, Math.round(b * rf.shade));

        ctx.beginPath();
        ctx.moveTo(rf.pts[0].x, rf.pts[0].y);
        ctx.lineTo(rf.pts[1].x, rf.pts[1].y);
        ctx.lineTo(rf.pts[2].x, rf.pts[2].y);
        ctx.lineTo(rf.pts[3].x, rf.pts[3].y);
        ctx.closePath();

        ctx.fillStyle = `rgba(${sr}, ${sg}, ${sb}, ${rf.alpha})`;
        ctx.fill();

        ctx.strokeStyle = rf.edgeColor;
        ctx.lineWidth = rf.isStruct ? 0.6 : 0.75;
        ctx.stroke();
      }

      // 4. Draw synchronized Revit-style 3D Orientation Triad in top-right corner
      const triadCx = width - 42;
      const triadCy = 52;
      const axisLen = 18;
      const axes = [
        { vec: [1, 0, 0], label: 'E', color: '#f97316' },
        { vec: [0, 1, 0], label: 'Z', color: '#38bdf8' },
        { vec: [0, 0, 1], label: 'N', color: '#34d399' },
      ];

      ctx.beginPath();
      ctx.arc(triadCx, triadCy, 24, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.65)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      for (const ax of axes) {
        const p = projectPoint(
          [ax.vec[0] * axisLen, ax.vec[1] * axisLen, ax.vec[2] * axisLen],
          cosY,
          sinY,
          cosP,
          sinP,
          1,
          triadCx,
          triadCy
        );
        ctx.beginPath();
        ctx.strokeStyle = ax.color;
        ctx.lineWidth = 1.6;
        ctx.moveTo(triadCx, triadCy);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        ctx.fillStyle = ax.color;
        ctx.font = '600 8px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
          ax.label,
          triadCx + (p.x - triadCx) * 1.28,
          triadCy + (p.y - triadCy) * 1.28
        );
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Pointer drag handlers so users can also manually orbit the 3D BIM model
  const handlePointerDown = (e) => {
    rotationRef.current.isDragging = true;
    rotationRef.current.lastX = e.clientX;
    rotationRef.current.lastY = e.clientY;
  };

  const handlePointerMove = (e) => {
    if (!rotationRef.current.isDragging) return;
    const dx = e.clientX - rotationRef.current.lastX;
    const dy = e.clientY - rotationRef.current.lastY;
    rotationRef.current.lastX = e.clientX;
    rotationRef.current.lastY = e.clientY;

    rotationRef.current.yaw += dx * 0.008;
    rotationRef.current.pitch = Math.max(
      0.18,
      Math.min(0.85, rotationRef.current.pitch + dy * 0.006)
    );
  };

  const handlePointerUp = () => {
    rotationRef.current.isDragging = false;
  };

  return (
    <div
      className="relative h-80 sm:h-96 rounded-2xl bg-slate-950 border border-blue-800/70 overflow-hidden shadow-xl select-none group"
      role="img"
      aria-label="Interactive 3D Revit BIM coordination model showing clash-free Mechanical HVAC ductwork, Electrical power distribution, and Plumbing piping"
    >
      {/* Interactive 3D BIM Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="w-full h-full block cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Top-Left Revit Viewport Status Header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-3 left-3.5 flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-xs border border-white/10 font-mono text-[10px] tracking-wider uppercase text-slate-300"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>3D BIM COORDINATION // REV 01</span>
      </div>

      {/* Bottom Discipline Filter & Legend Bar */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', label: 'ALL MEP', dot: null },
            { id: 'hvac', label: 'HVAC', dot: 'bg-sky-400' },
            { id: 'elec', label: 'ELEC', dot: 'bg-orange' },
            { id: 'plumb', label: 'PLUMB', dot: 'bg-emerald-400' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[10px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-corporate-blue text-white border border-blue-400/50 shadow-xs'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-transparent'
                }`}
              >
                {tab.dot && <span className={`w-2 h-2 rounded-full ${tab.dot}`} />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <span
          aria-hidden="true"
          className="font-mono text-[9px] text-slate-400 tracking-widest uppercase hidden sm:inline"
        >
          DRAG TO ORBIT
        </span>
      </div>
    </div>
  );
}
