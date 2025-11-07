import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import StyledComponentsRegistry from "@/lib/registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anusha Makeovers",
  description: "Bridal, Groom & Party Makeovers – Transform with style.",
  icons: {
    icon: "logo.svg", // Path inside public/
    shortcut: "logo.svg",
    apple: "logo.svg",
  },
  openGraph: {
    title: "Anusha Makeovers",
    description: "Professional bridal and event makeover services.",
    siteName: "Anusha Makeovers",
    images: [
      {
        url: "/logo.svg", // place image in public/
        width: 1200,
        height: 630,
        alt: "Anusha Makeovers - Bridal & Event Styling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <Navbar />
          <main style={{ paddingTop: "var(--navbar-height)" }}>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
