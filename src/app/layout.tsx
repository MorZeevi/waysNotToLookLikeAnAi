import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const leon = localFont({
  src: [
    { path: "./fonts/Leon-Regular.woff2", weight: "400" },
    { path: "./fonts/Leon-Heavy.woff2", weight: "700" },
  ],
  display: "swap",
});

const BASE_URL = 'https://ways-not-to-look-like-an-ai-git-main-mors-projects-59686dd6.vercel.app';

export const metadata: Metadata = {
  title: "8 דרכים לגרום לAI לא להיות כמו AI",
  openGraph: {
    title: "8 דרכים לגרום לAI לא להיות כמו AI",
    description: "",
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={leon.className}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
