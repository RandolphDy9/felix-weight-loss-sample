import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Analytics from "@/components/GoogleAnalytics";

const matter = localFont({
  src: [
    {
      path: "../../public/fonts/Matter/Matter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Matter/Matter-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-matter",
});

export const metadata: Metadata = {
  title: "Weight Loss That Works With Your Biology | Felix Health",
  description: "Find your personalized weight loss treatment with Felix. Proudly Canadian healthcare solutions for effective weight management and wellness.",
  keywords: ["weight loss", "treatment", "Canadian healthcare", "wellness", "Felix"],
  metadataBase: new URL("https://felix.com"),
  alternates: {
    canonical: "/",
  },
  icons: [
    {
      rel: "icon",
      url: "https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/651c60d38926d75d131a7921_Vectors-Wrapper.svg",
      type: "image/svg+xml",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${matter.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
