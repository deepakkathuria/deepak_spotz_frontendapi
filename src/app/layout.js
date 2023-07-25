// import Navbar from "../components/common/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
// import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sports News, Breaking Sports News, Latest Sports News - Sportzwiki",
  description: "Sports news | events",
  themeColor: "#092d55",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {/* <div className="nav"> */}
          <Navbar />
        {/* </div> */}
        {/* <div className="bodyItems"></div> */}
        {children}
        {/* <GlobalContextProvider>{children}</GlobalContextProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
