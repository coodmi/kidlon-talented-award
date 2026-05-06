import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kidlon Talented Award | Celebrating Young Brilliance | Twimbol",
  description:
    "The Kidlon Talented Award by Twimbol recognizes and celebrates extraordinary talent in children and young people aged 5–25 across the globe. Nominate a talent today.",
  keywords: [
    "Kidlon Award",
    "Talented Award",
    "Twimbol",
    "Children Award",
    "Youth Award",
    "Young Talent",
    "Award Program",
    "Kids Award",
  ],
  authors: [{ name: "Twimbol" }],
  openGraph: {
    title: "Kidlon Talented Award | Celebrating Young Brilliance",
    description:
      "Discover, celebrate, and empower the most talented children and young individuals across the globe.",
    type: "website",
    locale: "en_US",
    siteName: "Kidlon Talented Award",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidlon Talented Award | Twimbol",
    description:
      "Celebrating extraordinary talent in children and young people aged 5–25 worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
