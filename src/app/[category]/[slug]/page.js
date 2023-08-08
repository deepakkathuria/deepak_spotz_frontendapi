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
import OrganisationLd from "@/json-ld/OrganisationLd";
import UpdatesSound from "@/components/common/UpdatesSound";
// import {
//   getPostMeta,
//   getSinglePostByPostSlug,
//   getPostBody,
//   getPostData,
//   // getRelatedPostsByTag,
//   getPostThumbById,
// } from "../../../lib/PostDataFetch";

const fetchRelatedPostsByTagId = async (id) => {
  const response = await fetch(
    `https://demo2.sportzwiki.com/wp-json/wp/v2/posts?tags=${id}&per_page=6`
  );
  return await response.json();
};

const fetchPostBySlug = async (slug) => {
  try {
    // const response = await fetch(
    //   `https://demo2.sportzwiki.com/wp-json/wp/v2/posts?slug=england-mulling-to-introduce-a-new-t20-league-in-the-country-likely-to-scrap-vitality-blast-and-the-hundred-reports`
    // );
    const response = await fetch(
      `https://demo2.sportzwiki.com/wp-json/wp/v2/posts?slug=${slug}`
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
    `https://demo2.sportzwiki.com/wp-json/wp/v2/tags/${tagId}`
  );
  const tagData = await response.json();
  return tagData;
};

// Function to fetch category data by ID
const fetchCategoryById = async (categoryId) => {
  const response = await fetch(
    `https://demo2.sportzwiki.com/wp-json/wp/v2/categories/${categoryId}`
  );
  const categoryData = await response.json();
  return categoryData;
};

const getAuthorName = async (authorId) => {
  const response = await fetch(
    `https://demo2.sportzwiki.com/wp-json/wp/v2/users/${authorId}`
  );
  const authorName = await response.json();
  // console.log(authorName,'authorNamehksdvbkjhsbdkj');
  return authorName;
};

const site_url = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateMetadata({ params }) {
  const { slug } = params;

  const post = await fetchPostBySlug(slug);
  // console.log(post, "postebufjebfibeiu");

  // const postMeta = await getPostMeta(slug);

  // const oldPostThumbnail = (await getPostThumbById(post?.[0]?.ID)) ?? "";

  // if (oldPostThumbnail && oldPostThumbnail[0]) {
  //   var thumbnail = oldPostThumbnail;
  // } else {
  //   var thumbnail = post?.[0]?.post_guid;
  // }

  const title = post?.title?.rendered ?? "SportzWiki";
  const description = post?.excerpt?.rendered ?? "SportzWiki";
  const imageUrl = post?.featured_image_url ?? "";
  const parsedDescription = parse(description);
  // const thumbUrl = thumbnail ?? "https://nextjs.org";

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
      creator: "@gaurav",
      creatorId: "1467726470533754880",
      images: [imageUrl],
    },
  };
}

const page = async ({ params }) => {
  const { category, slug } = params;

  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `${decodeURIComponent(category).toUpperCase()}`,
      url: `/${category}`,
    },
    {
      name: `${decodeURIComponent(slug).toUpperCase().substring(0, 40)}...`,
      url: `/${category}/${slug}`,
    },
  ];

  // const postBody = await getPostBody(slug);
  // **************************************************************
  const articleBody = await fetchPostBySlug(slug);
  // console.log(articleBody, "article bodynsdkfnl");

  // **************************************************************

  // const post = await getPostData(slug);

  // const postMeta = await getPostMeta(slug);

  // var tagsArray = [];

  // if (post[0]?.tags) {
  //   tagsArray = post[0].tags.split(",");
  // }

  // if (tagsArray.length > 0) {
  //   var randomIndex = Math.floor(Math.random() * tagsArray.length);
  //   var randomTag = tagsArray[randomIndex];
  //   console.log(randomTag, "randomTag");
  // } else {
  //   console.log("Error at tags selection of post " + slug);
  // }

  if (articleBody?.tags.length > 0) {
    var randomIndex = Math.floor(Math.random() * articleBody?.tags.length);
    var randomTag = articleBody?.tags[randomIndex].id;
    console.log(randomTag, "randomTag");
  } else {
    console.log("Error at tags selection of post " + slug);
  }

  // console.log(articleBody?.categories[0].name,'parent categoriiiiijidsninisn')

  // const relatedPosts = await getRelatedPostsByTag(randomTag);
  const relatedPosts = await fetchRelatedPostsByTagId(randomTag);
  // console.log(relatedPosts, "relatedddddddd");

  // const formattedContent = postBody?.[0]?.post_content?.replace(
  //   /\r?\n/g,
  //   "<br>"
  // );

  // if (postBody[0] && postBody[0].ID) {
  //   // const oldPostThumbnail = await getPostThumbById(postBody?.[0].ID);
  //   const oldPostThumbnail = postBody[0]
  //     ? await getPostThumbById(postBody[0].ID)
  //     : "";
  //   // rest of the code here
  //   if (oldPostThumbnail && oldPostThumbnail[0]) {
  //     var thumbnail = oldPostThumbnail;
  //   } else {
  //     var thumbnail = postBody[0]?.guid;
  //   }
  // }

  // const oldPostThumbnail = await getPostThumbById(postBody[0].ID);
  // console.log(oldPostThumbnail, "postThumbnail");

  // console.log(slug, "slugiiiiifi");

  return (
    <>
      <ArticleLd
        title={articleBody?.title.rendered ?? ""}
        date={articleBody?.date_gmt ?? ""}
        author={articleBody?.author?.name ?? ""}
        description={articleBody?.content.rendered ?? ""}
        // tags={articleBody?.tags ?? []}
        shortDescription={articleBody?.excerpt.rendered ?? ""}
      />

      <BreadCrumbLd category={category ?? ""} slug={slug ?? ""} />

      <OrganisationLd />

      <div className={styles.postPageContainer}>
        <div style={{ marginTop: "6rem" }} className="updateBox">
          <UpdatesSound />
        </div>
        <div style={{ marginTop: "1.5rem" }} className={styles.breadcrumb}>
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        {/* <PostCategoryBox categories={post?.[0]?.categories} /> */}
        <PostCategoryBox categories={articleBody?.categories ?? []} />
        <div className={styles.postDetailListContainer}>
          <PostDisplay
            // title={postBody?.[0]?.post_title ?? ""}
            title={articleBody?.title.rendered ?? ""}
            date={articleBody?.date_gmt ?? ""}
            author={articleBody?.author?.name ?? ""}
            description={articleBody?.content.rendered ?? ""}
            tags={articleBody?.tags ?? []}
            categories={articleBody?.categories ?? []}
            thumbnail={articleBody?.featured_image_url}
            summary={articleBody?.excerpt.rendered ?? ""}
          />
          <Suspense fallback={<p>Loading Post list bar...</p>}>
            <PostListBar category={articleBody?.categories[0].name} />
            {/* <PostListBar category={category} /> */}
          </Suspense>
        </div>
        <div className={styles.relatedArticleSection}>
          <div className={styles.relatedArticleTitle}>
            Related <span>Article</span>
          </div>
          <div className={styles.relatedArticlePosts}>
            {/* {relatedPosts?.map((card) => {
              return (
                <div key={card.ID}>
                  <Link href={`/${category}/${card.post_name}`}>
                    <NewsCard
                      title={card?.post_title}
                      content={`${card?.post_content.substring(0, 40)}...`}
                      date={new Date(card?.post_modified).toLocaleString()}
                    />
                  </Link>
                </div>
              );
            })} */}
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
                          /* other props */
                        />
                      </a>
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
