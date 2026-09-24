// src/app/keystatic/layout.tsx
import KeystaticApp from "./keystatic";

import { notFound } from 'next/navigation';

const isDev = process.env.NODE_ENV === 'development';

export default function Layout() {
  if (!isDev) {
    notFound();
  }
  return <KeystaticApp />;
}