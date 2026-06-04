import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EstimateWidget from '@/components/EstimateWidget';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Artifx — AI Automation & Digital Systems Agency",
  description: "We build intelligent digital systems, AI automations, and scalable web platforms that help businesses scale faster.",
  keywords: ["AI Automation", "Business Systems", "Web Development", "Next.js Agency", "SaaS Development", "Digital Transformation"],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-black flex flex-col min-h-screen`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <EstimateWidget />
      </body>
    </html>
  );
}
