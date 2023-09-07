// import { getServerSideSitemap } from "next-sitemap";
// import axios from "axios";
// // const API_URL = process.env.BASE_URL_DO;
// const site_url = process.env.siteUrl;
// const base_url = process.env.BASE_URL_WP;
// const WP_API_USERNAME = process.env.WP_API_USERNAME;
// const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

// const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
// const buffer = Buffer.from(credentials, "utf-8");
// const base64Credentials = buffer.toString("base64");

// export async function GET(request, { params }) {
//   if (!params?.id || Number.isNaN(Number(params.id))) {
//     return { notFound: true };
//   }

//   const id = Number(params.id) + 1;
//   console.log("ID is = : " + id);
//   const URLS_PER_SITEMAP = 200;

//   // Custom function to format the date into the desired format
//   function formatDateWithOffset(date) {
//     let pad = (num) => String(num).padStart(2, "0");
//     let offsetHours = Math.floor(offsetMilliseconds / (60 * 60 * 1000));
//     let offsetMinutes = (offsetMilliseconds % (60 * 60 * 1000)) / (60 * 1000);

//     return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(
//       date.getUTCDate()
//     )}T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(
//       date.getUTCSeconds()
//     )}+${pad(offsetHours)}:${pad(offsetMinutes)}`;
//   }

//   try {
//     const fetchPostUrls = async (id) => {
//       const res = await fetch(
//         `${base_url}/wp-json/wp/v2/posts?per_page=${URLS_PER_SITEMAP}&page=${id}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Basic ${base64Credentials}`,
//           },
//         }
//       );
//       const data = await res.json();
//       return data;
//     };

//     const urls = await fetchPostUrls(id);
//     // console.log(urls, "urlssssssssssssssssssss");
//     // const a = [];

//     const sitemap_data = urls?.map((ele) => {
//       const primaryCategorySlug = ele.primary_category_slug || "news";
//       let gmtString = ele.modified_gmt;
//       // Convert the string to a Date object
//       let gmtDate = new Date(gmtString + "Z"); // Append 'Z' to indicate it's GMT
//       // Calculate the desired offset in milliseconds
//       // For +05:30, it's 5 hours * 60 minutes/hour + 30 minutes = 330 minutes
//       let offsetMilliseconds = 330 * 60 * 1000;
//       // Adjust the date object by the offset
//       gmtDate.setTime(gmtDate.getTime() + offsetMilliseconds);
//       let formattedDate = formatDateWithOffset(gmtDate);
//       return {
//         loc: `${site_url}/${primaryCategorySlug}/${ele.slug}`,
//         // lastmod: new Date(ele.modified_gmt).toISOString(),
//         lastmod: formattedDate,
//       };
//     });
//     return getServerSideSitemap(sitemap_data);
//   } catch (e) {
//     console.log(e);
//   }
// }

import { getServerSideSitemap } from "next-sitemap";
import axios from "axios";

const site_url = process.env.siteUrl;
const base_url = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

function formatDateWithOffset(date) {
  let pad = (num) => String(num).padStart(2, "0");

  // For +05:30, it's 5 hours * 60 minutes/hour + 30 minutes = 330 minutes
  const offsetMilliseconds = 330 * 60 * 1000;
  let offsetHours = Math.floor(offsetMilliseconds / (60 * 60 * 1000));
  let offsetMinutes = (offsetMilliseconds % (60 * 60 * 1000)) / (60 * 1000);

  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(
    date.getUTCDate()
  )}T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(
    date.getUTCSeconds()
  )}+${pad(offsetHours)}:${pad(offsetMinutes)}`;
}

export async function GET(request, { params }) {
  if (!params?.id || Number.isNaN(Number(params.id))) {
    return { notFound: true };
  }

  const id = Number(params.id) + 1;
  const URLS_PER_SITEMAP = 200;

  try {
    const fetchPostUrls = async (id) => {
      const res = await fetch(
        `${base_url}/wp-json/wp/v2/posts?per_page=${URLS_PER_SITEMAP}&page=${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${base64Credentials}`,
          },
        }
      );
      const data = await res.json();
      return data;
    };

    const urls = await fetchPostUrls(id);
    // let lastCorrectDate = "2014-06-08T05:30:00+05:30";
    let lastCorrectDate = new Date("2014-06-08T05:30:00+05:30");
    const sitemap_data = urls?.map((ele) => {
      const primaryCategorySlug = ele.primary_category_slug || "news";
      // console.log(ele.slug,"-----",ele.modified_gmt);

      // let gmtDate = new Date(ele.modified_gmt + "Z"); // Append 'Z' to indicate it's GMT
      // gmtDate.setTime(gmtDate.getTime() + 330 * 60 * 1000); // Adjust for +05:30
      // let formattedDate = formatDateWithOffset(gmtDate);

      let gmtDate;
      if (ele.modified_gmt && !isNaN(Date.parse(ele.modified_gmt))) {
        gmtDate = new Date(ele.modified_gmt + "Z"); // Append 'Z' to indicate it's GMT
        lastCorrectDate = gmtDate;
      } else if (ele.date && !isNaN(Date.parse(ele.date))) {
        gmtDate = new Date(ele.date + "Z");
        lastCorrectDate = gmtDate;
      } else {
        gmtDate = lastCorrectDate;
      }

      gmtDate.setTime(gmtDate.getTime() + 330 * 60 * 1000); // Adjust for +05:30
      let formattedDate = formatDateWithOffset(gmtDate);

      return {
        loc: `${site_url}/${primaryCategorySlug}/${ele.slug}`,
        lastmod: formattedDate,
      };
    });

    return getServerSideSitemap(sitemap_data);
  } catch (e) {
    console.log(e);
    return { error: "Server error" }; // Return a general error (or provide a more detailed message)
  }
}
