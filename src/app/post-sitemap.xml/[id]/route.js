import React from "react";
import { getServerSideSitemap } from "next-sitemap";
import fetchAllDynamicPostsSlugs from "@/lib/fetchAllDynamicPostsSlugs";

export async function GET(request, { params }) {
  if (!params?.id || isNaN(Number(params?.id))) {
    return { notFound: true };
  }
  const id = params.id;

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log(id);
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  const URLS_PER_SITEMAP = 10000;
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemap([
    {
      loc: "https://example.com",
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: "https://example.com/dynamic-path-2",
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ]);
}
