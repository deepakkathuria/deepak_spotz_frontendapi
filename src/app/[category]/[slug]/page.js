import React, { Suspense } from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import styles from "./post.module.css";
import PostCategoryBox from "../../../components/common/PostCategoryBox";
import PostDisplay from "../../../components/common/PostDisplay";
import PostListBar from "../../../components/common/PostListBar";
import NewsCard from "../../../components/common/NewsCard";
import Link from "next/link";
import ArticleLd from "@/json-ld/ArticleLd";
import BreadCrumbLd from "@/json-ld/BreadCrumbLd";
import OrganisationLd from "@/json-ld/OrganisationLd";
import {
  getPostMeta,
  getSinglePostByPostSlug,
  getPostBody,
  getPostData,
  getRelatedPostsByTag,
  getPostThumbById,
} from "../../../lib/PostDataFetch";

const site_url = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateMetadata({ params }) {
  const { slug } = params;

  const post = await getSinglePostByPostSlug(slug);

  const postMeta = await getPostMeta(slug);

  const oldPostThumbnail = (await getPostThumbById(post?.[0]?.ID)) ?? "";
  // console.log(post,"posty")
  // console.log(post[0]?.ID,oldPostThumbnail, "postThumbnail");

  if (oldPostThumbnail && oldPostThumbnail[0]) {
    var thumbnail = oldPostThumbnail;
  } else {
    var thumbnail = post?.[0]?.post_guid;
  }

  // console.log(thumbnail, "metaPostThumbnail");
  // title, description, url, thumbnailUrl,
  // console.log(post[0]?.post_title, "title");
  // console.log(postMeta[0]?.meta_description, "description");
  // console.log("url", "url");
  // console.log(thumbnail, "thumbnailUrl");

  const title = post?.[0]?.post_title ?? "AN";
  const description = postMeta?.[0]?.meta_description ?? "";
  const thumbUrl = thumbnail ?? "https://nextjs.org";

  return {
    title: title,
    description: "postMeta[0]?.meta_description",

    openGraph: {
      title: title,
      description: "The React Framework for the Web",
      url: "https://nextjs.org",
      siteName: "Next.js",
      images: [
        {
          url: "https://nextjs.org/og.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://nextjs.org/og-alt.png",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: title,
      description: "The React Framework for the Web",
      siteId: "1467726470533754880",
      creator: "@nextjs",
      creatorId: "1467726470533754880",
      images: ["https://nextjs.org/og.png"],
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

  const postBody = await getPostBody(slug);

  const post = await getPostData(slug);

  const postMeta = await getPostMeta(slug);

  var tagsArray = [];

  if (post[0]?.tags) {
    tagsArray = post[0].tags.split(",");
  }

  if (tagsArray.length > 0) {
    var randomIndex = Math.floor(Math.random() * tagsArray.length);
    var randomTag = tagsArray[randomIndex];
    console.log(randomTag, "randomTag");
  } else {
    console.log("Error at tags selection of post " + slug);
  }

  const relatedPosts = await getRelatedPostsByTag(randomTag);

  const formattedContent = postBody?.[0]?.post_content?.replace(
    /\r?\n/g,
    "<br>"
  );

  if (postBody[0] && postBody[0].ID) {
    // const oldPostThumbnail = await getPostThumbById(postBody?.[0].ID);
    const oldPostThumbnail = postBody[0]
      ? await getPostThumbById(postBody[0].ID)
      : "";
    // rest of the code here
    if (oldPostThumbnail && oldPostThumbnail[0]) {
      var thumbnail = oldPostThumbnail;
    } else {
      var thumbnail = postBody[0]?.guid;
    }
  }

  // const oldPostThumbnail = await getPostThumbById(postBody[0].ID);
  // console.log(oldPostThumbnail, "postThumbnail");

  return (
    <>
      <ArticleLd
        title={post?.[0]?.post_title ?? ""}
        date={post?.[0]?.post_modified_gmt ?? ""}
        author={post?.[0]?.author_name ?? ""}
        description={formattedContent ?? ""}
        tags={post?.[0]?.tags ?? []}
      />

      <BreadCrumbLd category={category ?? ""} slug={slug ?? ""} />

      <OrganisationLd />

      <div className={styles.postPageContainer}>
        <Breadcrumb breadcrumbsObj={breadcrumbs} />
        <PostCategoryBox categories={post?.[0]?.categories} />
        <div className={styles.postDetailListContainer}>
          <PostDisplay
            title={postBody?.[0]?.post_title ?? ""}
            date={postBody?.[0]?.post_modified_gmt}
            author={post?.[0]?.author_name ?? ""}
            description={formattedContent ?? ""}
            tags={post?.[0]?.tags}
            categories={post?.[0]?.categories}
            thumbnail={
              typeof thumbnail === "string" && thumbnail.length
                ? thumbnail
                : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            }
            summary={postMeta?.[0]?.meta_description ?? ""}
          />
          <Suspense fallback={<p>Loading Post list bar...</p>}>
            <PostListBar category={decodeURIComponent(category)} />
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
              {Array.isArray(relatedPosts) &&
                relatedPosts.map((card) => {
                  return (
                    <div key={card.ID}>
                      <Link href={`/${category}/${card.post_name}`}>
                        <NewsCard
                          title={card?.post_title}
                          content={`${card?.post_content.substring(0, 40)}...`}
                          date={new Date(card?.post_modified).toLocaleString()}
                          /* other props */
                        />
                      </Link>
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
