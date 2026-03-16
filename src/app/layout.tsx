import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickPoll — Stem op alles",
  description: "Maak en deel polls met je vrienden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {
        <nav className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-purple-600">🗳️ Quickpoll</Link>
          <div className="flex items-center gap-5">
          <Link href="/polls">Polls</Link>
          <Link href="/create" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Nieuwe Poll</Link>
          </div>
          </div>
        </nav>

        /*
          STAP 1: Bouw hier een navigatiebalk met:
          - Logo/titel "QuickPoll" (links) die linkt naar /
          - Een link naar / ("Polls")
          - Een link naar /create ("Nieuwe Poll")

          Tip: gebruik <Link> van "next/link", niet <a>
          Tip: gebruik Tailwind classes voor styling
        */}

        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>

        <footer className="text-center text-gray-400 text-sm py-8">
          © 2025 QuickPoll — NOVI Hogeschool Les 5
        </footer>
      </body>
    </html>
  );
}
