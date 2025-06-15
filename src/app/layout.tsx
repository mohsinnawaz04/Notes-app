import type { Metadata } from "next";
import { Roboto, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { ThemeProvider } from "next-themes";
import { LayoutProvider } from "@/lib/contexts/LayoutContext";

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  weight: ["400", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notes App",
  description: "A notes playground.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${roboto.variable} ${openSans.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"} enableSystem={false}>
          <LayoutProvider>
            <Header />
            {children}
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
