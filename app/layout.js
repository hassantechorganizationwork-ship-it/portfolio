import { Space_Grotesk, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-hassan-9211.vercel.app"),
  title: "Hassan Shafiq — Full-Stack Developer & Solo Founder",
  description:
    "Portfolio of Hassan Shafiq, a full-stack developer and solo founder of Posify, an offline-first POS system for Pakistani SMBs.",
  openGraph: {
    title: "Hassan Shafiq — Full-Stack Developer & Solo Founder",
    description:
      "Portfolio of Hassan Shafiq, a full-stack developer and solo founder of Posify, an offline-first POS system for Pakistani SMBs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Shafiq — Full-Stack Developer & Solo Founder",
    description:
      "Portfolio of Hassan Shafiq, a full-stack developer and solo founder of Posify, an offline-first POS system for Pakistani SMBs.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
