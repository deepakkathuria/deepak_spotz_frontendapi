import React, { Suspense } from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import styles from "./post.module.css";
import PostCategoryBox from "../../../components/common/PostCategoryBox";
import PostDisplay from "../../../components/common/PostDisplay";
import PostListBar from "../../../components/common/PostListBar";
import NewsCard from "../../../components/common/NewsCard";
import parse from "html-react-parser";
import Link from "next/link";
import ArticleLd from "@/json-ld/ArticleLd";
import BreadCrumbLd from "@/json-ld/BreadCrumbLd";
// import OrganisationLd from "@/json-ld/OrganisationLd";
import UpdatesSound from "@/components/common/UpdatesSound";
import HeaderBox2 from "@/components/common/HeaderBox2";
import FaqLive from "@/components/common/FaqLive";
// import Loading from "@/app/Loading";
const baseUrlAd = process.env.NEXT_PUBLIC_BASE_URL;
const NEXT_PUBLIC_BASE_URL_WP = process.env.NEXT_PUBLIC_BASE_URL_WP;
const NEXT_PUBLIC_WP_API_USERNAME = process.env.NEXT_PUBLIC_WP_API_USERNAME;
const NEXT_PUBLIC_WP_API_PASSWORD = process.env.NEXT_PUBLIC_WP_API_PASSWORD;

const credentials = `${NEXT_PUBLIC_WP_API_USERNAME}:${NEXT_PUBLIC_WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const fetchAD = async (adId) => {
  const res = await fetch(`${baseUrlAd}/getpad?selectedTypes=${adId}`, {
    cache: "no-store",
  });
  const ad = res.json();
  return ad;
};

const fetchRelatedPostsByTagId = async (id) => {
  const response = await fetch(
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/posts?tags=${id}&per_page=6`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  return await response.json();
};

const fetchPostBySlug = async (slug) => {
  try {
    // const response = await fetch(
    //   `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/posts?slug=england-mulling-to-introduce-a-new-t20-league-in-the-country-likely-to-scrap-vitality-blast-and-the-hundred-reports`
    // );
    const response = await fetch(
      `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/posts?slug=${slug}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
      }
    );
    const articleData = await response.json();

    // Fetch tags data and populate names
    const tagIds = articleData[0]?.tags || [];
    const tagsData = await Promise.all(
      tagIds.map((tagId) => fetchTagById(tagId))
    );
    const tags = tagsData.map((tag) => tag);

    // Fetch categories data and populate names
    const categoryIds = articleData[0]?.categories || [];
    const categoriesData = await Promise.all(
      categoryIds.map((categoryId) => fetchCategoryById(categoryId))
    );
    const categories = categoriesData.map((category) => category);

    const authorId = articleData[0]?.author || "SportzWiki Desk";
    const authorName = await getAuthorName(authorId);

    // Replace tag and category IDs with their respective names
    articleData[0].tags = tags;
    articleData[0].categories = categories;
    articleData[0].author = authorName;

    return articleData[0];
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
};

// Function to fetch tag data by ID
const fetchTagById = async (tagId) => {
  const response = await fetch(
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/tags/${tagId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const tagData = await response.json();
  return tagData;
};

// Function to fetch category data by ID
const fetchCategoryById = async (categoryId) => {
  const response = await fetch(
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/categories/${categoryId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const categoryData = await response.json();
  return categoryData;
};

const getAuthorName = async (authorId) => {
  const response = await fetch(
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/users/${authorId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const authorName = await response.json();
  return authorName;
};

const site_url = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateMetadata({ params }) {
  const { slug } = params;

  const post = await fetchPostBySlug(slug);

  const title = post?.title?.rendered ?? "SportzWiki";
  const description = post?.excerpt?.rendered ?? "SportzWiki";
  const imageUrl = post?.featured_image_url ?? "";
  const parsedDescription = parse(description);

  return {
    title: title,
    description: description,

    openGraph: {
      title: title,
      description: description,
      url: "https://www.sportzwiki.com",
      siteName: "Sportzwiki",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: title,
        },
        {
          url: imageUrl,
          width: 1800,
          height: 1600,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      siteId: "1467726470533754880",
      creator: "@sportzwiki",
      creatorId: "1467726470533754880",
      images: [imageUrl],
    },
  };
}

const page = async ({ params }) => {
  const { category, slug } = params;

  const articleBody = await fetchPostBySlug(slug);
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `${decodeURIComponent(category)}`,
      url: `/${category}`,
    },
    {
      name: `${articleBody?.title.rendered}`,
      // url: `/${category}/${slug}`,
    },
  ];

  // console.log(articleBody, "articleBodyarticleBodyarticleBody");
  if (articleBody?.tags.length > 0) {
    var randomIndex = Math.floor(Math.random() * articleBody?.tags.length);
    var randomTag = articleBody?.tags[randomIndex].id;
    console.log(randomTag, "randomTag");
  } else {
    var randomTag = 83366;
    console.log("Error at tags selection of post " + slug);
  }

  const relatedPosts = await fetchRelatedPostsByTagId(randomTag);
  // console.log(relatedPosts, "relatedPostsrelationships");

  const ad = await fetchAD(1);
  // console.log(ad, "addddddddddddddddddd");
  const adAfterParaData = [];
  // let adAfterImage = "";

  for (const item of ad) {
    // if (item.selected_types === 1) {
    // console.log("found");
    adAfterParaData.push({
      para_no: item.para_no,
      code: item.code,
    });
    // }
    // if (item.selected_types === "After Image") {
    //   adAfterImage = item.code;
    // }
  }

  const articleJsonLd = {
    "@context": "https://schema.org/",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "www.sportzwiki.com",
    },
    headline: articleBody?.title.rendered ?? "",
    description: articleBody?.content.rendered ?? "",
    image: {
      "@type": "ImageObject",
      url: articleBody?.featured_image_url || "",
      // width: "1280",
      // height: "1280",
    },
    author: {
      "@type": "Person",
      name: articleBody?.author?.name ?? "",
    },
    publisher: {
      "@type": "Organization",
      name: "SportzWiki",
      logo: {
        "@type": "ImageObject",
        url: "SportzWiki.com",
        // width: "326",
        // height: "326",
      },
    },
    datePublished: articleBody?.date_gmt ?? "",
    dateModified: articleBody?.date_gmt ?? "",
  };

  // console.log(adAfterImage, "jhvfhbshbskbkjsbvhk");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <BreadCrumbLd category={category ?? ""} slug={slug ?? ""} />

      {/* <OrganisationLd /> */}

      <div className={styles.postPageContainer}>
        <div style={{ marginTop: "6rem" }} className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <div style={{ marginTop: "1.5rem" }} className={styles.breadcrumb}>
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <PostCategoryBox categories={articleBody?.categories ?? []} />
        <div className={styles.postDetailListContainer}>
          <Suspense fallback="Loading...">
            <PostDisplay
              title={articleBody?.title.rendered ?? ""}
              date={articleBody?.date_gmt ?? ""}
              author={articleBody?.author?.name ?? ""}
              description={articleBody?.content.rendered ?? ""}
              tags={articleBody?.tags ?? []}
              categories={articleBody?.categories ?? []}
              thumbnail={articleBody?.featured_image_url}
              summary={articleBody?.excerpt.rendered ?? ""}
              ad={adAfterParaData || ""}
              // adAfterImage={adAfterImage || ""}
            />
          </Suspense>
          <Suspense fallback={<p>Loading Post list bar...</p>}>
            <PostListBar category={articleBody?.categories[0].name} />
          </Suspense>
        </div>
        <div className="header" style={{ marginTop: "1rem" }}>
          {/* <HeaderBox2
            header="SportzWiki Media"
            content="It is an honour to introduce—Sportzwiki – sports is life, is one of the leading online sports mediums across the globe. The digital platform over the years has grabbed the attention of an audience worldwide.From the cricketing ground to the badminton court—the dedicated team at Sportzwiki has been always on the lookout to provide insights, pre and post-match stuff and plenty with 24/7 window."
          /> */}
          <FaqLive />
        </div>
        <div className={styles.relatedArticleSection}>
          <div className={styles.relatedArticleTitle}>
            Related <span>Article</span>
          </div>
          <div className={styles.relatedArticlePosts}>
            <Suspense fallback={<p>Loading related posts...</p>}>
              {!relatedPosts && (
                <h2 className="div">No Related Posts available</h2>
              )}
              {relatedPosts &&
                relatedPosts?.map((card, index) => {
                  return (
                    <div key={index}>
                      <a href={`/${category}/${card?.slug}`}>
                        <NewsCard
                          id={card?.id}
                          title={card?.title.rendered}
                          content={`${card?.content.rendered.substring(
                            0,
                            40
                          )}...`}
                          date={new Date(card?.date).toLocaleString("en-us")}
                          guid={card?.guid}
                          featuredMedia={card?.featured_image_url}
                        />
                      </a>
                      <hr />
                    </div>
                  );
                })}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
