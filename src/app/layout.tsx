import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <Header />
        <div className="bg-gradient-to-b from-[#0d1428] via-[#0a2642] to-[#034a77]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
