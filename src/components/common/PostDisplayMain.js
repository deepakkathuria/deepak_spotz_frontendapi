import React, { Suspense } from "react";
import Breadcrumb from "./Breadcrumb";
import styles from "../../app/[category]/[slug]/post.module.css";
import PostCategoryBox from "./PostCategoryBox";
import PostDisplay from "./PostDisplay";
import PostListBar from "./PostListBar";
import NewsCard from "./NewsCard";
// import parse from "html-react-parser";
import BreadCrumbLd from "../../json-ld/BreadCrumbLd";
import UpdatesSound from "./UpdatesSound";
import CardSlider from "../home/CardSlider";
import Image from "next/image";
const baseUrlAd = process.env.BASE_URL_DO;
const BASE_URL_WP = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

// const fetchUpcomingMatches = async (matchId) => {
//   const res = await fetch(
//     `${base_url}/competitions/${matchId}/matches/?token=${key}&per_page=50&&paged=1`,
//     { next: { revalidate: 30 } }
//   );
//   const data = await res.json();
//   return data;
// };

const fetchUpcomingMatches = async (matchId) => {
  let res;
  try {
    res = await fetch(
      `${base_url}/competitions/${matchId}/matches/?token=${key}&per_page=50&&paged=1`,
      { next: { revalidate: 30 } }
    );
  } catch (error) {
    // Handle network errors
    throw new Error("Network error: " + error.message);
  }

  if (!res.ok) {
    // Handle HTTP response errors
    const errorMessage = await res.text();
    throw new Error("HTTP error: " + errorMessage);
  }

  let data;
  try {
    data = await res.json();
  } catch (error) {
    // Handle JSON parsing errors
    throw new Error("JSON parsing error: " + error.message);
  }

  return data;
};

// const fetchAD = async (adId) => {
//   const res = await fetch(`${baseUrlAd}/getpad?selectedTypes=${adId}`, {
//     cache: "no-store",
//   });
//   const ad = res.json();
//   return ad;
// };
const fetchAD = async (adId) => {
  let res;
  try {
    res = await fetch(`${baseUrlAd}/getpad?selectedTypes=${adId}`, {
      cache: "no-store",
    });
  } catch (error) {
    // Handle network errors
    throw new Error("Network error: " + error.message);
  }

  if (!res.ok) {
    // Handle HTTP response errors
    const errorMessage = await res.text();
    throw new Error("HTTP error: " + errorMessage);
  }

  let ad;
  try {
    ad = await res.json();
  } catch (error) {
    // Handle JSON parsing errors
    throw new Error("JSON parsing error: " + error.message);
  }

  return ad;
};

// const fetchRelatedPostsByTagId = async (id) => {
//   const response = await fetch(
//     `${BASE_URL_WP}wp-json/wp/v2/posts?tags=${id}&per_page=6`,
//     {
//       next: { revalidate: 1500 },
//       method: "GET",
//       headers: {
//         Authorization: `Basic ${base64Credentials}`,
//       },
//     }
//   );
//   return await response.json();
// };

const fetchRelatedPostsByTagId = async (id) => {
  let response;
  try {
    response = await fetch(
      `${BASE_URL_WP}wp-json/wp/v2/posts?tags=${id}&per_page=6`,
      {
        next: { revalidate: 1500 },
        method: "GET",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
      }
    );
  } catch (error) {
    // Handle network errors
    throw new Error("Network error: " + error.message);
  }

  if (!response.ok) {
    // Handle HTTP response errors
    const errorMessage = await response.text();
    throw new Error(
      "HTTP error, Status: " + response.status + ", Message: " + errorMessage
    );
  }

  let jsonData;
  try {
    jsonData = await response.json();
  } catch (error) {
    // Handle JSON parsing errors
    throw new Error("JSON parsing error: " + error.message);
  }

  return jsonData;
};

// const fetchPostBySlug = async (slug) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL_WP}wp-json/wp/v2/posts?slug=${slug}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Basic ${base64Credentials}`,
//         },
//         next: { revalidate: 1500 },
//       }
//     );

//     const articleData = await response.json();

//     // Fetch tags data and populate names
//     const tagIds = articleData[0]?.tags || [];
//     const tagsData = await Promise.all(
//       tagIds.map((tagId) => fetchTagById(tagId))
//     );
//     const tags = tagsData.map((tag) => tag);

//     // Fetch categories data and populate names
//     const categoryIds = articleData[0]?.categories || [];
//     const categoriesData = await Promise.all(
//       categoryIds.map((categoryId) => fetchCategoryById(categoryId))
//     );
//     const categories = categoriesData.map((category) => category);

//     const authorId = articleData[0]?.author || "SportzWiki Desk";
//     const authorName = await getAuthorName(authorId);

//     // Replace tag and category IDs with their respective names
//     articleData[0].tags = tags;
//     articleData[0].categories = categories;
//     articleData[0].author = authorName;

//     return articleData[0];
//   } catch (error) {
//     console.error("Error fetching article data:", error);
//     return null;
//   }
// };

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

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `HTTP error fetching post, Status: ${response.status}, Message: ${errorMessage}`
      );
    }

    const articleData = await response.json();

    if (!articleData[0]) {
      throw new Error("No post found for the given slug.");
    }

    // Fetch tags data and populate names
    const tagIds = articleData[0].tags || [];
    const tagsData = await Promise.all(
      tagIds.map(async (tagId) => {
        try {
          return await fetchTagById(tagId);
        } catch (tagError) {
          console.error(`Error fetching tag with ID ${tagId}:`, tagError);
          return null; // or return a default value or structure
        }
      })
    );
    const tags = tagsData.filter(Boolean); // Removes null values, if any

    // Fetch categories data and populate names
    const categoryIds = articleData[0].categories || [];
    const categoriesData = await Promise.all(
      categoryIds.map(async (categoryId) => {
        try {
          return await fetchCategoryById(categoryId);
        } catch (categoryError) {
          console.error(
            `Error fetching category with ID ${categoryId}:`,
            categoryError
          );
          return null; // or return a default value or structure
        }
      })
    );
    const categories = categoriesData.filter(Boolean);

    // Fetch author data
    const authorId = articleData[0].author || "SportzWiki Desk";
    let authorName;
    try {
      authorName = await getAuthorName(authorId);
      // console.log(authorName, "authorNameauthorNameauthorName");
    } catch (authorError) {
      console.error(`Error fetching author with ID ${authorId}:`, authorError);
      authorName = "Unknown Author"; // default name in case of an error
    }

    // Replace tag and category IDs with their respective names
    articleData[0].tags = tags;
    articleData[0].categories = categories;
    articleData[0].author = authorName;
    // console.log(articleData[0].author, "articleData[0]articleData[0]");

    return articleData[0];
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
};

// Function to fetch tag data by ID
// const fetchTagById = async (tagId) => {
//   const response = await fetch(`${BASE_URL_WP}wp-json/wp/v2/tags/${tagId}`, {
//     next: { revalidate: 300 },
//     method: "GET",
//     headers: {
//       Authorization: `Basic ${base64Credentials}`,
//     },
//   });
//   const tagData = await response.json();
//   return tagData;
// };

const fetchTagById = async (tagId) => {
  let response;
  try {
    response = await fetch(`${BASE_URL_WP}wp-json/wp/v2/tags/${tagId}`, {
      next: { revalidate: 300 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    });
  } catch (error) {
    // Handle network errors
    throw new Error(
      `Network error fetching tag with ID ${tagId}: ${error.message}`
    );
  }

  if (!response.ok) {
    // Handle HTTP response errors
    const errorMessage = await response.text();
    throw new Error(
      `HTTP error fetching tag with ID ${tagId}, Status: ${response.status}, Message: ${errorMessage}`
    );
  }

  let tagData;
  try {
    tagData = await response.json();
  } catch (error) {
    // Handle JSON parsing errors
    throw new Error(
      `JSON parsing error fetching tag with ID ${tagId}: ${error.message}`
    );
  }

  return tagData;
};

// Function to fetch category data by ID
// const fetchCategoryById = async (categoryId) => {
//   const response = await fetch(
//     `${BASE_URL_WP}wp-json/wp/v2/categories/${categoryId}`,
//     {
//       next: { revalidate: 300 },
//       method: "GET",
//       headers: {
//         Authorization: `Basic ${base64Credentials}`,
//       },
//     }
//   );
//   const categoryData = await response.json();
//   return categoryData;
// };

const fetchCategoryById = async (categoryId) => {
  let response;
  try {
    response = await fetch(
      `${BASE_URL_WP}wp-json/wp/v2/categories/${categoryId}`,
      {
        next: { revalidate: 300 },
        method: "GET",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
      }
    );
  } catch (error) {
    // Handle network errors
    throw new Error(
      `Network error fetching category with ID ${categoryId}: ${error.message}`
    );
  }

  if (!response.ok) {
    // Handle HTTP response errors
    const errorMessage = await response.text();
    throw new Error(
      `HTTP error fetching category with ID ${categoryId}, Status: ${response.status}, Message: ${errorMessage}`
    );
  }

  let categoryData;
  try {
    categoryData = await response.json();
  } catch (error) {
    // Handle JSON parsing errors
    throw new Error(
      `JSON parsing error fetching category with ID ${categoryId}: ${error.message}`
    );
  }

  return categoryData;
};

// const getAuthorName = async (authorId) => {
//   const response = await fetch(
//     `${BASE_URL_WP}wp-json/wp/v2/users/${authorId}`,
//     {
//       next: { revalidate: 300 },
//       method: "GET",
//       headers: {
//         Authorization: `Basic ${base64Credentials}`,
//       },
//     }
//   );
//   const authorName = await response.json();
//   return authorName;
// };

const getAuthorName = async (authorId) => {
  let response;
  try {
    response = await fetch(`${BASE_URL_WP}wp-json/wp/v2/users/${authorId}`, {
      next: { revalidate: 300 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    });
  } catch (error) {
    // Handle network errors
    throw new Error(
      `Network error fetching author with ID ${authorId}: ${error.message}`
    );
  }

  if (!response.ok) {
    // Handle HTTP response errors
    const errorMessage = await response.text();
    throw new Error(
      `HTTP error fetching author with ID ${authorId}, Status: ${response.status}, Message: ${errorMessage}`
    );
  }

  let authorData;
  try {
    authorData = await response.json();
  } catch (error) {
    // Handle JSON parsing errors
    throw new Error(
      `JSON parsing error fetching author with ID ${authorId}: ${error.message}`
    );
  }

  // Assuming the author's name is stored in a field named 'name' in the response. Adjust if different.
  return authorData.name || "Unknown Author";
};

// const site_url = process.env.SITE_URL;

const PostDisplayMain = async (props) => {
  const { category, slug } = props;

  const articleBody = await fetchPostBySlug(slug);

  const matchesList = await fetchUpcomingMatches(127865);

  let updatedPostDescription = articleBody?.content.rendered?.replace(
    /https?:\/\/admin\.sportzwiki\.com(?!\/wp-content\/)/g,
    "https://sportzwiki.com"
  );

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

  // const ad = await fetchAD(1);
  // const adAfterParaData = [];

  // for (const item of ad) {
  //   adAfterParaData.push({
  //     para_no: item.para_no,
  //     code: item.code,
  //   });
  // }

  const htmlStringTitle = articleBody?.title.rendered;
  const htmlStringDescription = articleBody?.content.rendered;

  const plainStringTitle = (htmlStringTitle ?? "").replace(/<[^>]+>/g, "");
  const plainStringDescription = (htmlStringDescription ?? "").replace(
    /<[^>]+>/g,
    ""
  );

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <BreadCrumbLd category={category ?? ""} slug={slug ?? ""} />

      <div className={styles.postPageContainer}>
        <div style={{ marginBottom: "2rem" }} className={styles.quickLinks}>
          <div className={styles.quickLinksHeading}>
            {/* <Image
              src={
                "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1695101726/world-cup_aqepah.svg"
              }
              width={0}
              height={0}
              alt=""
              style={{
                width: "20px",
                height: "auto",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            ></Image> */}
            <div className="eventName" style={{ marginRight: "1rem" }}>
              ICC World Cup
            </div>
            <div className={styles.triangle}>
              <Image
                src={"/gaurav/arrowRight.svg"}
                width={0}
                height={0}
                alt=""
                style={{ width: "25px", height: "auto" }}
              ></Image>
            </div>
          </div>
          <ul className={styles.items}>
            {/* <li>
                <a href="/live-cricket-scores/ind-vs-ban-asia-cup-2023-round-2-super-4s-a2-v-b2-65566/commentary/">
                  IND vs BAN
                </a>
              </li> */}
            {/* <li>|</li> */}
            <li>
              <a href="/cricket-series/icc-mens-world-cup-warm-up-matches-127865/matches">
                Schedule
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="/cricket-series/icc-mens-world-cup-warm-up-matches-127865/matches">
                Results
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="/cricket/">News</a>
            </li>
          </ul>
        </div>
        <div className="matches">
          {matchesList?.status === "ok" && (
            <CardSlider
              cards={matchesList?.response?.items}
              displayBtn="false"
            />
          )}
        </div>
        <div style={{ marginTop: "2rem" }} className={styles.updateBox}>
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
              date={articleBody?.modified_gmt ?? ""}
              author={articleBody?.author ?? ""}
              description={updatedPostDescription}
              tags={articleBody?.tags ?? []}
              categories={articleBody?.categories ?? []}
              thumbnail={articleBody?.featured_image_url}
              summary={articleBody?.excerpt.rendered ?? ""}
              // ad={adAfterParaData || ""}
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
        <div id="div-ub-sportzwiki"></div>
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
                      <a
                        href={`/${
                          articleBody?.primary_category_slug ||
                          articleBody?.categories[0].slug
                        }/${card?.slug}/`}
                      >
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
