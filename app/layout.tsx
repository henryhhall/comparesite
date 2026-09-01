import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CT Senate District 24 Candidate Guide | Julie Kushner vs. Melissa Lindsey",
  description: "An in-depth, honest comparison of candidates for Connecticut State Senate District 24 (Danbury, New Fairfield, Ridgefield): Senator Julie Kushner vs. Melissa Lindsey.",
  keywords: [
    "Connecticut State Senate District 24",
    "Julie Kushner",
    "Melissa Lindsey",
    "Danbury CT",
    "New Fairfield CT",
    "CT Senate Election 2026",
    "Danbury Career Academy"
  ],
  authors: [{ name: "CT District 24 Voter Guide" }],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
