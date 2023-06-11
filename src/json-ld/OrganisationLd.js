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
        legalName="Sportzwiki Media Pvt Ltd"
        name="Purple Fox"
        address={{
          streetAddress: "91 Springboard",
          addressLocality: "Sector 18, udyog vihar",
          addressRegion: "HR",
          postalCode: "122008",
          addressCountry: "IN",
        }}
        contactPoint={[
          {
            telephone: "+1-401-555-1212",
            contactType: "customer service",
            email: "customerservice@email.com",
            areaServed: "US",
            availableLanguage: ["English", "Spanish", "French"],
          },
          {
            telephone: "+1-877-746-0909",
            contactType: "customer service",
            email: "servicecustomer@email.com",
            contactOption: "TollFree",
            availableLanguage: "English",
          },
          {
            telephone: "+1-877-453-1304",
            contactType: "technical support",
            contactOption: "TollFree",
            areaServed: ["US", "CA"],
            availableLanguage: ["English", "French"],
          },
        ]}
        sameAs={["https://www.orange-fox.com"]}
        url="https://www.purpule-fox.io/"
      />
    </>
  );
};

export default OrganisationLd;
