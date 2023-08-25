import React from "react";
import { OrganizationJsonLd } from "next-seo";
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const OrganisationLd = () => {
  return (
    <>
      <OrganizationJsonLd
        useAppDir={true}
        type="Corporation"
        id={site_url}
        logo="https://www.example.com/photos/logo.jpg"
        legalName="SportzWiki.com"
        name="SportzWiki Media"
        address={{
          streetAddress: "palam vihar",
          addressLocality: "gurgaon",
          addressRegion: "HR",
          postalCode: "122017",
          addressCountry: "IN",
        }}
        contactPoint={[
          {
            telephone: "0124-4284294",
            contactType: "customer service",
            email: "enquiry@sportzwiki.com",
            areaServed: "IN",
            availableLanguage: ["English"],
          },
          // {
          //   telephone: "+1-877-746-0909",
          //   contactType: "customer service",
          //   email: "servicecustomer@email.com",
          //   contactOption: "TollFree",
          //   availableLanguage: "English",
          // },
          // {
          //   telephone: "+1-877-453-1304",
          //   contactType: "technical support",
          //   contactOption: "TollFree",
          //   areaServed: ["US", "CA"],
          //   availableLanguage: ["English", "French"],
          // },
        ]}
        // sameAs={["https://www.orange-fox.com"]}
        url="https://www.sportzwiki.com/"
      />
    </>
  );
};

export default OrganisationLd;
