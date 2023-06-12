import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import styles from "./post.module.css";
import PostCategoryBox from "../../../components/common/PostCategoryBox";
import PostDisplay from "../../../components/common/PostDisplay";
import PostListBar from "../../../components/common/PostListBar";
import NewsCard from "../../../components/common/NewsCard";
import Link from "next/link";
import axios from "axios";
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

  const oldPostThumbnail = await getPostThumbById(post[0]?.ID);
  // console.log(post,"posty")
  // console.log(post[0]?.ID,oldPostThumbnail, "postThumbnail");

  if (oldPostThumbnail && oldPostThumbnail[0]) {
    var thumbnail = oldPostThumbnail;
  } else {
    var thumbnail = post[0]?.guid;
  }

  console.log(thumbnail, "metaPostThumbnail");

  return {
    title: post[0]?.post_title,
    description: postMeta[0]?.meta_description,

    openGraph: {
      title: post[0]?.title,
      description: postMeta[0]?.meta_description,
      url: "https://www.sportzwiki.com",
      siteName: "SportzWiki",
      images: [
        {
          url: thumbnail.length
            ? thumbnail
            : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg",
          width: 800,
          height: 600,
        },
        {
          url: thumbnail.length
            ? thumbnail
            : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg",
          width: 1800,
          height: 1600,
          alt: post[0]?.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: post[0]?.title,
      description: postMeta[0]?.meta_description,
      // siteId: "1467726470533754880",
      creator: "@gaurav",
      // creatorId: "1467726470533754880",
      images: [
        thumbnail.length
          ? thumbnail
          : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg",
      ],
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

  var tags = post[0]?.tags;
  if (tags) {
    var tagsArray = tags.split(",");
    var randomIndex = Math.floor(Math.random() * tagsArray.length);
    var randomTag = tagsArray[randomIndex];
    console.log(randomTag, "randomIndex");
  } else {
    console.log("Error at tags selection of posts" + slug);
  }

  const relatedPosts = await getRelatedPostsByTag(randomTag);

  const formattedContent = postBody[0]?.post_content.replace(/\r?\n/g, "<br>");

  const oldPostThumbnail = await getPostThumbById(postBody[0].ID);
  // console.log(oldPostThumbnail, "postThumbnail");

  if (oldPostThumbnail && oldPostThumbnail[0]) {
    var thumbnail = oldPostThumbnail;
  } else {
    var thumbnail = postBody[0]?.guid;
  }

  return (
    <>
      <ArticleLd
        title={post[0]?.post_title}
        date={post[0]?.post_modified_gmt}
        author={post[0]?.author_name}
        description={formattedContent}
        tags={post[0]?.tags}
      />

      <BreadCrumbLd category={category} slug={slug} />

      <OrganisationLd />

      <div className={styles.postPageContainer}>
        <Breadcrumb breadcrumbsObj={breadcrumbs} />
        <PostCategoryBox categories={post[0]?.categories} />
        <div className={styles.postDetailListContainer}>
          <PostDisplay
            title={postBody[0]?.post_title}
            date={postBody[0]?.post_modified_gmt}
            author={post[0]?.author_name}
            description={formattedContent}
            tags={post[0]?.tags}
            categories={post[0]?.categories}
            thumbnail={
              thumbnail.length
                ? thumbnail
                : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            }
            summary={postMeta[0]?.meta_description}
          />
          <PostListBar category={decodeURIComponent(category)} />
        </div>
        <div className={styles.relatedArticleSection}>
          <div className={styles.relatedArticleTitle}>
            Related <span>Article</span>
          </div>
          <div className={styles.relatedArticlePosts}>
            {relatedPosts?.map((card) => {
              return (
                <div key={card.ID}>
                  <Link href={`/${category}/${card.post_name}`}>
                    <NewsCard
                      title={card.post_title}
                      content={`${card.post_content.substring(0, 40)}...`}
                      date={new Date(card.post_modified).toLocaleString()}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
