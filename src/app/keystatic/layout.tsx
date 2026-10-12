import KeystaticApp from './keystatic';
import { notFound } from 'next/navigation';

const isDev = process.env.NODE_ENV === 'development';

export default function Layout() {
  if (!isDev) {
    notFound();
  }
  return (
    <div className="fixed inset-0 z-[100] bg-white">
      <KeystaticApp />
    </div>
  );
}