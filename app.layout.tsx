import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // TODO: replace after domain is set
  title: { default: "John Kaschak", template: "%s | John Kaschak" },
  description: "John Kaschak — real estate deals, entitlements strategy, and writing.",
  openGraph: {
    title: "John Kaschak",
    description: "Real estate deals, entitlements strategy, and writing.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Kaschak",
    description: "Real estate deals, entitlements strategy, and writing.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <Nav />
        <main className="mx-auto w-full max-w-6xl px-5 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
