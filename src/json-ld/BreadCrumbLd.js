import React from "react";
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;

const BreadCrumbLd = (props) => {
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: "sportzwiki.com",
          },
          {
            position: 2,
            name: props.category,
            item: `${site_url}/${props.category}`,
          },
          {
            position: 3,
            name: `${props.slug}`,
            item: `${site_url}/${props.category}/${props.slug}`,
          },
        ]}
      />
    </>
  );
};

export default BreadCrumbLd;
