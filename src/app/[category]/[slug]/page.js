import React from "react";
import PostDisplayMain from "@/components/common/PostDisplayMain";
import CategoryDisplayMain from "@/components/common/CategoryDisplayMain";
import Link from "next/link";
const BASE_URL_WP = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const isCategory = async (slug) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/categories?slug=${slug}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const data = await res.json();
  // console.log(data, "datadatadata");
  return data.length > 0 ? true : false;
};

const fetchCategoryDataBySlug = async (categorySlug) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/categories?slug=${categorySlug}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
      cache: "no-store",
    }
  );

  const categoryData = await res.json();
  return categoryData;
};

const fetchMetaData = async (category, slug) => {
  const res = await fetch(
    `${BASE_URL_WP}/wp-json/rankmath/v1/getHead?url=${BASE_URL_WP}/${category}/${slug}`,
    {
      next: { revalidate: 1500 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const headData = await res.json();
  return headData;
};

const fetchMetaDataCat = async (categorySlug) => {
  const res = await fetch(
    `${BASE_URL_WP}/wp-json/rankmath/v1/getHead?url=${BASE_URL_WP}/${categorySlug}`,
    {
      next: { revalidate: 1500 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const headData = await res.json();
  return headData;
};

const fetchPostBySlug = async (slug) => {
  try {
    const response = await fetch(
      `${BASE_URL_WP}wp-json/wp/v2/posts?slug=${slug}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
        next: { revalidate: 1500 },
      }
    );

    const articleData = await response.json();

    return articleData[0];
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
};

export async function generateMetadata({ params }) {
  const { category, slug } = params;
  const result = await isCategory(slug);
  // console.log("here1");

  if (result === true) {
    // console.log("here2");
    const DATA_PER_PAGE = 48;
    let { "page-no": currentPage = "1" } = params;
    currentPage = parseInt(currentPage);
    // console.log("here3");

    const metaData = await fetchMetaDataCat(slug);
    // console.log("here4");
    const headContent = metaData.head;

    // Extract meta title
    const titleMatch = headContent.match(/<title>(.*?)<\/title>/);
    const metaTitle = titleMatch ? titleMatch[1] : null;

    // Extract meta description
    const descriptionMatch = headContent.match(
      /<meta name="description" content="(.*?)"/
    );
    const metaDescription = descriptionMatch ? descriptionMatch[1] : null;

    // Extract robots
    const robotsMatch = headContent.match(
      /<meta name="robots" content="(.*?)"/
    );
    const robots = robotsMatch ? robotsMatch[1] : null;

    // Split the content by commas
    const robotsProperties = robots
      .split(",")
      .map((property) => property.trim());

    // Access each property separately
    const follow = robotsProperties.includes("follow") ? true : false;
    const index = robotsProperties.includes("index") ? true : false;
    const maxSnippet = robotsProperties.find((property) =>
      property.startsWith("max-snippet:")
    );
    const maxVideoPreview = robotsProperties.find((property) =>
      property.startsWith("max-video-preview:")
    );
    const maxImagePreview = robotsProperties.find((property) =>
      property.startsWith("max-image-preview:")
    );

    // Extract canonical
    const canonicalMatch = headContent.match(
      /<link rel="canonical" href="(.*?)"/
    );
    const canonical = canonicalMatch
      ? canonicalMatch[1].replace(
          "https://admin.sportzwiki.com",
          "https://sportzwiki.com"
        )
      : null;

    const categoryData = await fetchCategoryDataBySlug(slug);
    // console.log(categoryData,'categoryDatacategoryData')
    const totalPages = Math.ceil((categoryData[0]?.count || 0) / DATA_PER_PAGE);

    const iconsOther = [];

    if (currentPage !== 1) {
      iconsOther.push({
        rel: "prev",
        url: `https://www.sportzwiki.com/${category}/${slug}/page/${
          currentPage - 1
        }`,
      });
    }

    if (currentPage !== totalPages) {
      iconsOther.push({
        rel: "next",
        url: `https://www.sportzwiki.com/${category}/${slug}/page/${
          currentPage + 1
        }`,
      });
    }

    return {
      title: metaTitle,
      description: metaDescription,
      icons: {
        other: iconsOther,
      },
      robots: {
        index: index,
        follow: follow,
        "max-video-preview": maxVideoPreview,
        "max-image-preview": maxImagePreview,
        "max-snippet": maxSnippet,
      },
      alternates: {
        canonical: canonical,
      },
    };
  } else {
    const post = await fetchPostBySlug(slug);

    const title = post?.title?.rendered ?? "SportzWiki";
    const description = post?.meta_description ?? "SportzWiki";
    const imageUrl = post?.featured_image_url ?? "";
    const parsedTitle = (title ?? "").replace(/<[^>]+>/g, "");
    const parsedDescription = (description ?? "").replace(/<[^>]+>/g, "");
    let canonicalUrl = "";

    try {
      const metaData = await fetchMetaData(
        post?.categories[0].slug,
        post?.slug
      );
      // console.log(metaData, "metaDatametaDatametaDatametaData");

      if (!metaData || !metaData.head) {
        console.error(
          "Error: Failed to fetch metadata or metadata is incomplete."
        );
        return; // Exit early if there's no metadata or head content
      }

      const headContent = metaData.head;
      console.log(headContent, "headContentheadContentheadContentheadContent");
      const canonicalRegex = /<link rel="canonical" href="(.*?)" \/>/;
      const match = headContent.match(canonicalRegex);

      if (match && match[1]) {
        canonicalUrl = match[1].replace(
          "https://admin.sportzwiki.com",
          "https://sportzwiki.com"
        );
        // console.log("Canonical URL:", canonicalUrl);
      } else {
        console.log("Canonical URL not found.");
      }
    } catch (error) {
      console.error("An unexpected issue occurred. Please try again later.");
      console.debug("Detailed error:", error.message); // For debugging purposes
    }

    const robotsData =
      post?.robots === ""
        ? {
            robots: {
              index: true,
              follow: true,
              "max-video-preview": -1,
              "max-image-preview": "large",
              "max-snippet": -1,
            },
          }
        : {
            robots: {
              index: false,
              follow: false,
            },
          };

    return {
      title: parsedTitle,
      description: description,
      ...robotsData,
      alternates: {
        canonical: canonicalUrl,
      },
      // canonical: canonicalUrl,

      openGraph: {
        title: parsedTitle,
        description: parsedDescription,
        url: "https://www.sportzwiki.com",
        siteName: "Sportzwiki",
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: parsedTitle,
          },
          {
            url: imageUrl,
            width: 1800,
            height: 1600,
            alt: parsedTitle,
          },
        ],
        locale: "en_US",
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title: parsedTitle,
        description: parsedDescription,
        siteId: "1467726470533754880",
        creator: "@sportzwiki",
        creatorId: "1467726470533754880",
        images: [imageUrl],
      },
    };
  }
}

const page = async ({ params }) => {
  const { slug, category } = params;
  const { "page-no": currentPage } = params;
  const result = await isCategory(slug);
  return (
    <>
      <div style={{ marginTop: "6rem" }}>
        {result === true ? (
          <CategoryDisplayMain
            category={category}
            slug={slug}
            currentPage="1"
          />
        ) : result === false ? (
          <PostDisplayMain category="news" slug={slug} />
        ) : (
          <>
            <h1>Looks like you are lost</h1>
            <Link href="/">Go to home</Link>
          </>
        )}
      </div>
    </>
  );
};

export default page;
