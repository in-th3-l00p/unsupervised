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
        className={`${merriweather.variable} antialiased`}
      >
        <main className="w-screen h-screen flex items-center justify-center flex-col gap-4">
          {children}
        </main>
      </body>
    </html>
  );
}
