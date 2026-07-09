import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import SiteLoader from "./components/site-loader";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigo Conde | Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} h-full antialiased`}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="min-h-full flex flex-col">
        <SiteLoader>{children}</SiteLoader>
      </body>
    </html>
  );
}
