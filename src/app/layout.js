// import Navbar from "../components/common/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";
import CustomAd1 from "@/ad/CustomAd1";
// import { WebPageSchema } from "@/json-ld/WebPageSchema";
// import { NextSeo } from "next-seo";
// const GTM_ID = "G-HGXKFDCKYE";

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
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_TRACKING_ID} />
      {/* <CustomAd1 /> */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6125827673616617"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      ></Script>
      {/* <head> */}
            {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6125827673616617"
          crossOrigin="anonymous"
        ></script> */}
      {/* <script
          async
          src="https://cdn.unibotscdn.com/ubplayer/player.js"
        ></script>
        <cript
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        ></script>
        <cript
          src="https://cdn.rediads.com/sportzwiki/js/ads.min.js"
          defer
        ></script>
        <cript src="https://cdn.rediads.com/sportzwiki/js/prebid.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.rediads.com/css/style.min.css"
        ></link> */}
      {/* <Script
        async
        src="https://cdn.unibotscdn.com/ubplayer/player.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.rediads.com/sportzwiki/js/ads.min.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        defer
      ></Script>
      <Script
        src="https://cdn.rediads.com/sportzwiki/js/prebid.min.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
        defer
      ></Script>
      <Script
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      ></Script>
      <Script
        async
        src="https://cdn.rediads.com/css/style.min.css"
        rel="stylesheet"
      ></Script>
      <Script
        id="custom-ad-below-post-mobile"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
              try {
                (function() {
                  var cads = document.createElement("script");
                  cads.async = true;
                  cads.type = "text/javascript";
                  cads.src = "https://static.clmbtech.com/ad/commons/js/82562/colombia_v2.js";
                  var node = document.getElementsByTagName("script")[0];
                  node.parentNode.insertBefore(cads, node);
                })();
              } catch(e) {}
            `,
        }}
      ></Script>

      <Script
        id="custom-ad-below-post-desktop"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
      try {
        (function() {
          var cads = document.createElement("script");
          cads.async = true;
          cads.type = "text/javascript";
          cads.src = "https://static.clmbtech.com/ad/commons/js/82562/colombia_v2.js";
          var node = document.getElementsByTagName("script")[0];
          node.parentNode.insertBefore(cads, node);
        })();
      } catch(e) {}
    `,
        }}
      ></Script>
      {/* </head> */}
      <Script id="gtag" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-40644512-1');
    `}
      </Script>

      <body className={inter.className}>
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

        {children}
        <Analytics />
        <div style={{ height: "5rem" }}></div>
        <Footer />
        <div className="Rediads_BottomSticky">
          <div
            data-adslot="/21855545885/sportzwiki.com/BottomOverlay"
            data-size-desktop="[[728,90]]"
            data-size-mobile="[[320,50]]"
            data-ad-refresh={true}
            data-ad="bottom_sticky"
          ></div>
        </div>
      </body>
    </html>
  );
}
