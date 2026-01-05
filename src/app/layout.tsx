import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Victoria's Seattle Visit - Jan 2026",
  description: 'Trip planner for Mom\'s visit to Seattle',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
