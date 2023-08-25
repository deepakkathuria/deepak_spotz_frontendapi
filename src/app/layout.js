// import Navbar from "../components/common/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
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

  const faqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "what is sportzwiki",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Latest Sports News: Get all latest sports news today on different sports, from Cricket, Football, Tennis, WWE, Esports, Badminton, Basketball, Boxing, F1, Hockey, Kabaddi &amp; Golf.",
        },
      },
    ],
  };

  const organizationSchema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "SportzWiki",
    alternateName: "SportzWiki Sports News",
    url: "https://www.sportzwiki.com/",
    // logo: "https://www.sportzwiki.com/path-to-your-logo.png",
    // image:
    //   "https://www.sportzwiki.com/path-to-an-image-representing-your-organization.jpg",
    description:
      "SportzWiki is a renowned sports news portal that delivers comprehensive and timely updates on various sports globally. From cricket to football, tennis to hockey, SportzWiki ensures fans remain informed.",
    disambiguatingDescription: "A global sports news platform based in India",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.sportzwiki.com/aboutus/",
    },
    foundingDate: "2014-01-01",
    // foundingLocation: {
    //   "@type": "Place",
    //   name: "City where SportzWiki was founded, Country",
    // },
    founder: {
      "@type": "Person",
      name: "Bhupinder Singh",
      // image: "https://www.sportzwiki.com/path-to-founder-image.jpg",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-81, Vyapar Kendra ( PVK)",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122017",
      addressCountry: "India",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "0124-4284294",
        contactType: "Customer service",
        email: "enquiry@sportzwiki.com",
        areaServed: "Global",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/SportzWiki/",
      "https://twitter.com/sportzwiki",
      "https://www.instagram.com/sportzwikiinsta/",
      "https://in.linkedin.com/company/sportz-wiki",
      "https://www.youtube.com/channel/UCORAXc3QbpWOiBDyizLribQ",
    ],
    // member: [
    //   {
    //     "@type": "Organization",
    //     name: "International Sports News Association",
    //   },
    // ],
    // employee: [
    //   {
    //     "@type": "Person",
    //     name: "Employee Name 1",
    //   },
    //   {
    //     "@type": "Person",
    //     name: "Employee Name 2",
    //   },
    // ],
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: "https://www.sportzwiki.com/search?q={search_term}",
    //   "query-input": "required name=search_term",
    // },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLD) }}
        />
        {/* </div> */}
        {/* <div className="bodyItems"></div> */}
        {children}
        {/* <GlobalContextProvider>{children}</GlobalContextProvider> */}
        <Analytics />
        <div style={{ height: "5rem" }}></div>
        <Footer />
      </body>
    </html>
  );
}
