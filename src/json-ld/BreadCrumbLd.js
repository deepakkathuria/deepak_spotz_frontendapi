import React from "react";
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const BreadCrumbLd = (props) => {
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "HOME",
            item: "sportzwiki.com",
          },
          {
            position: 2,
            name: props.category.toUpperCase(),
            item: `${site_url}/${props.category}`,
          },
          {
            position: 3,
            name: `${props.slug.toUpperCase().substring(0, 5)}...`,
            item: `${site_url}/${props.category}/${props.slug}`,
          },
        ]}
      />
    </>
  );
};

export default BreadCrumbLd;
