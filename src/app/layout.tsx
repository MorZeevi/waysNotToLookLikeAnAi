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

export const metadata: Metadata = {
  title: "8 דרכים לגרום לAI לא להיות שׁ",
  description: "8 כללים להישאר אנושי בעידן הבינה המלאכותית",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={leon.className}>
      <body>{children}</body>
    </html>
  );
}
