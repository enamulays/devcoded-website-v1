
import type { Metadata } from "next";
import "./globals.css";
import TopSection from "../../components/TopSection";
import NavSection from "../../components/NavSection";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <TopSection />
        <NavSection />
        {children}
        <Footer />
      </body>
    </html>
  );
}
