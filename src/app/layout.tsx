import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "unsupervised",
  description: "hacking community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} antialiased bg-background`}
      >
        <main className="w-screen min-h-screen flex items-center flex-col gap-4 space-y-16">
          {children}
        </main>
      </body>
    </html>
  );
}
