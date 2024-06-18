import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ReduxProvider from "./context/ReduxProvider";

const Poppines = Poppins({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  title: "Shorter Urp",
  description: "Shortly URL shortening API Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Poppines.className}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
