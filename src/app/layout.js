// import Navbar from "../components/common/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
// import { WebPageSchema } from "@/json-ld/WebPageSchema";
// import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sports News, Breaking Sports News, Latest Sports News - Sportzwiki",
  description:
    "Latest Sports News: Get all latest sports news today on different sports, from Cricket, Football, Tennis, WWE, Esports, Badminton, Basketball, Boxing, F1, Hockey, Kabaddi &amp; Golf.",
  themeColor: "#092d55",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "SportzWiki",
    url: "https://www.sportzwiki.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="en">
      {/* <head></head> */}
      {/* <Head>
        <link rel="canonical" href="https://www.sportzwiki.com/" />
      </Head> */}
      <body className={inter.className}>
        {/* <WebPageSchema /> */}
        {/* <div className="nav"> */}
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* </div> */}
        {/* <div className="bodyItems"></div> */}
        {children}
        {/* <GlobalContextProvider>{children}</GlobalContextProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
