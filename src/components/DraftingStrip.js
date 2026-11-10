// Decorative CAD title-block divider bar with drafting coordinates and registration marks
export default function DraftingStrip({
  dwg = 'DWG NO. M-101',
  scale = 'SCALE: N.T.S.',
  rev = 'REV 01',
  zone = 'GRID: TX-DFW',
  variant = 'light',
}) {
  const isDark = variant === 'dark';

  return (
    <div
      aria-hidden="true"
      className={`w-full border-y font-mono text-[10px] tracking-widest uppercase select-none ${
        isDark
          ? 'bg-slate-950/35 border-white/15 text-blue-200/70'
          : 'bg-slate-100/80 border-slate-200/90 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={isDark ? 'text-orange/80 font-bold' : 'text-corporate-blue/70 font-bold'}>
            +
          </span>
          <span>{dwg}</span>
          <span className="hidden sm:inline opacity-40">|</span>
          <span className="hidden sm:inline">{zone}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline">{scale}</span>
          <span className="hidden md:inline opacity-40">|</span>
          <span>{rev}</span>
          <span className={isDark ? 'text-orange/80 font-bold' : 'text-corporate-blue/70 font-bold'}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

