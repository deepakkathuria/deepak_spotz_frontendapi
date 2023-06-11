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

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateMetadata({ params }) {
  const { category, slug } = params;
  const post = await axios.get(
    `${base_url}/getsinglepostbycategoryslug?slug=${slug}`
  );

  const postMeta = await axios.get(
    `${base_url}/getpostmetabypostslug?slug=${slug}`
  );
  return {
    title: post?.data[0]?.post_title,
    description: postMeta?.data[0]?.meta_description,

    openGraph: {
      title: post?.data[0]?.title,
      description: postMeta?.data[0]?.meta_description,
      url: site_url,
      siteName: "SportzWiki",
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
      title: post?.data[0]?.title,
      description: postMeta?.data[0]?.meta_description,
      // siteId: "1467726470533754880",
      creator: "@gaurav",
      // creatorId: "1467726470533754880",
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

  const getPostBody = async () => {
    try {
      const response = await fetch(
        `${base_url}/getSinglePostByPostSlug?slug=${slug}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch post data");
      }
      const postBodyData = await response.json();
      return postBodyData;
    } catch (err) {
      console.log(err);
      return null; // or any other value indicating the error condition
    }
  };

  const postBody = await getPostBody();
  // console.log(postBody, "postBody");

  const getData = async () => {
    try {
      const postResponse = await fetch(
        `${base_url}/getsinglepostbycategoryslug?slug=${slug}`
      );
      if (!postResponse.ok) {
        throw new Error("Failed to fetch post data");
      }
      const postData = await postResponse.json();
      // Use the postData here
      return postData;
    } catch (err) {
      console.log(err);
      return null; // or any other value indicating the error condition
    }
  };

  const post = await getData();

  try {
    var postMeta = await axios.get(
      `${base_url}/getpostmetabypostslug?slug=${slug}`
    );
  } catch (err) {
    console.log(err);
  }

  var tags = post[0]?.tags;
  if (tags) {
    var tagsArray = tags.split(",");
    var randomIndex = Math.floor(Math.random() * tagsArray.length);
    var randomTag = tagsArray[randomIndex];
  } else {
    console.log("Error at tags selection of posts" + slug);
  }

  // console.log(`${randomTag} = Random Tag`);

  try {
    var relatedPosts = await axios.get(
      `${base_url}/getPostsByTagName?tag=${randomTag}`
    );
  } catch (err) {
    console.log(err);
  }

  const formattedContent = postBody[0]?.post_content.replace(/\r?\n/g, "<br>");

  const getPostThumbById = async () => {
    try {
      const response = await fetch(
        `${base_url}/getPostThumbnailByPostID?id=${postBody[0].ID}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch post data");
      }
      const postThumb = await response.json();
      return postThumb[0].cover_image_guid;
    } catch (err) {
      console.log(err);
      return null; // or any other value indicating the error condition
    }
  };

  const thumbnail = await getPostThumbById();
  // console.log(thumbnail, "thumbnail");

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
            // summary={postMeta[0]?.meta_description}
          />
          <PostListBar category={decodeURIComponent(category)} />
        </div>
        <div className={styles.relatedArticleSection}>
          <div className={styles.relatedArticleTitle}>
            Related <span>Article</span>
          </div>
          <div className={styles.relatedArticlePosts}>
            {relatedPosts?.data?.map((card) => {
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
