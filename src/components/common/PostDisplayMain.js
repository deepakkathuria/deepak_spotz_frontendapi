import React, { Suspense } from "react";
import Breadcrumb from "./Breadcrumb";
import styles from "../../app/[category]/[slug]/post.module.css";
import PostCategoryBox from "./PostCategoryBox";
import PostDisplay from "./PostDisplay";
import PostListBar from "./PostListBar";
import NewsCard from "./NewsCard";
// import parse from "html-react-parser";
// import Link from "next/link";/
// import ArticleLd from "@/json-ld/ArticleLd";
import BreadCrumbLd from "../../json-ld/BreadCrumbLd";
// import OrganisationLd from "@/json-ld/OrganisationLd";
import UpdatesSound from "./UpdatesSound";
// import HeaderBox2 from "@/components/common/HeaderBox2";
import FaqLive from "./FaqLive";
// import Loading from "@/app/Loading";
const baseUrlAd = process.env.BASE_URL_DO;
const BASE_URL_WP = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const fetchAD = async (adId) => {
  const res = await fetch(`${baseUrlAd}/getpad?selectedTypes=${adId}`, {
    cache: "no-store",
  });
  const ad = res.json();
  return ad;
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

const fetchRelatedPostsByTagId = async (id) => {
  const response = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/posts?tags=${id}&per_page=6`,
    {
      next: { revalidate: 1500 },
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
  const response = await fetch(`${BASE_URL_WP}wp-json/wp/v2/tags/${tagId}`, {
    next: { revalidate: 300 },
    method: "GET",
    headers: {
      Authorization: `Basic ${base64Credentials}`,
    },
  });
  const tagData = await response.json();
  return tagData;
};

// Function to fetch category data by ID
const fetchCategoryById = async (categoryId) => {
  const response = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/categories/${categoryId}`,
    {
      next: { revalidate: 300 },
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
    `${BASE_URL_WP}wp-json/wp/v2/users/${authorId}`,
    {
      next: { revalidate: 300 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const authorName = await response.json();
  return authorName;
};

// const site_url = process.env.SITE_URL;

const PostDisplayMain = async (props) => {
  const { category, slug } = props;

  const articleBody = await fetchPostBySlug(slug);
  // console.log(articleBody,'articleBodyarticleBodyarticleBody');
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

  const htmlStringTitle = articleBody?.title.rendered;
  const htmlStringDescription = articleBody?.content.rendered;

  // const plainStringTitle = htmlStringTitle.replace(/<[^>]+>/g, "");
  const plainStringTitle = (htmlStringTitle ?? "").replace(/<[^>]+>/g, "");
  // const plainStringDescription = htmlStringDescription.replace(/<[^>]+>/g, "");
  const plainStringDescription = (htmlStringDescription ?? "").replace(
    /<[^>]+>/g,
    ""
  );
  // const metaTitle =

  const articleJsonLd = {
    "@context": "https://schema.org/",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "www.sportzwiki.com",
    },
    headline: plainStringTitle ?? "",
    description: plainStringDescription ?? "",
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

  // console.log(headContent, "shbjfvjvcjyujh");

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
              date={articleBody?.date ?? ""}
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
          <div
            id="div-clmb-ctn-515735-1"
            style={{ float: "left", minHeight: "2px", width: "100%" }}
            data-slot="515735"
            data-position="1"
            data-section="ArticleShow"
            data-ua="M"
            className="colombia columbiaMobile"
          />
          <Suspense fallback={<p>Loading Post list bar...</p>}>
            <PostListBar category={articleBody?.categories[0]?.slug} />
          </Suspense>
        </div>
        {/* <div id="div-ub-sportzwiki"></div> */}
        <div
          id="div-clmb-ctn-515737-1"
          style={{ float: "left", minHeight: "2px", width: "100%" }}
          data-slot="515737"
          data-position="1"
          data-section="ArticleShow"
          data-ua="D"
          className="colombia columbiaDesktop"
        />
        {/* <div className="header" style={{ marginTop: "1rem" }}>
          <FaqLive />
        </div> */}
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
                          date={card?.date}
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

export default PostDisplayMain;
