// src/app/layout.tsx
import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AuthProvider } from "@/contexts/auth-context";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gymbym.com"),
  title: {
    default: "Gymbym — Find Gyms & Libraries Near You",
    template: "%s | Gymbym",
  },
  description:
    "Discover verified gyms and libraries in Delhi NCR. Compare pricing, amenities and ratings, then unlock a pass — no memberships, no lock-ins.",
  keywords: [
    "gymbym",
    "gyms near me",
    "libraries near me",
    "Delhi NCR gyms",
    "study rooms Delhi",
    "fitness pass",
  ],
  openGraph: {
    title: "Gymbym — Find Gyms & Libraries Near You",
    description:
      "Discover verified gyms and libraries in Delhi NCR. Compare pricing, amenities and ratings, then unlock a pass.",
    url: "https://gymbym.com",
    siteName: "Gymbym",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gymbym — Find Gyms & Libraries Near You",
    description: "Discover verified gyms and libraries in Delhi NCR.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "T-dPeFbNfcvj6anctjaY8krYS_KYTNbT-SUld9y2G-4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased font-body">
        <AuthProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
