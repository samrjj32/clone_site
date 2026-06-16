import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cluely - Live AI Meeting Assistant | Real-Time Meeting Notes and AI Insights",
  description:
    "AI meeting assistant that provides live meeting notes, instant answers, and real-time insights during calls. Unlike Otter or Granola, helps you during meetings, not just after.",
  keywords: "AI meeting assistant, meeting notes, real-time transcription, undetectable AI",
  applicationName: "Cluely",
  openGraph: {
    title: "Cluely - Live AI Meeting Assistant",
    description:
      "AI meeting assistant that provides live meeting notes, instant answers, and real-time insights during calls.",
    siteName: "Cluely",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#040406]">
        {children}
      </body>
    </html>
  );
}
