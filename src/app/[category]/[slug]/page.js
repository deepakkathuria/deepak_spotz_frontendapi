import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import styles from "./post.module.css";
import PostCategoryBox from "../../../components/common/PostCategoryBox";
import PostDisplay from "../../../components/common/PostDisplay";
import PostListBar from "../../../components/common/PostListBar";
import NewsCard from "../../../components/common/NewsCard";
import Link from "next/link";
import axios from "axios";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const page = async ({ params }) => {
  const { category, slug } = params;

  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `${category.toUpperCase()}`,
      url: `/${category}`,
    },
    {
      name: `${slug.toUpperCase().substring(0, 80)}...`,
      url: `/${category}/${slug}`,
    },
  ];

  try {
    var post = await axios.get(
      `${base_url}/getsinglepostbycategoryslug?slug=${slug}`
    );
  } catch (err) {
    console.log(err);
  }

  var tags = post?.data[0]?.tags;
  if (tags) {
    var tagsArray = tags.split(",");
    var randomIndex = Math.floor(Math.random() * tagsArray.length);
    var randomTag = tagsArray[randomIndex];
  } else {
    console.log("Error at tags selection of posts");
  }

  try {
    var relatedPosts = await axios.get(
      `${base_url}/getPostsByTagName?tag=${randomTag}`
    );
  } catch (err) {
    console.log(err);
  }

  // console.log("################");
  // console.log(relatedPosts);
  // console.log(randomTag);
  // console.log("################");

  const formattedContent = post?.data[0]?.content.replace(/\r?\n/g, "<br>");

  return (
    <>
      <div className={styles.postPageContainer}>
        <Breadcrumb breadcrumbsObj={breadcrumbs} />
        <PostCategoryBox categories={post?.data[0]?.categories} />
        <div className={styles.postDetailListContainer}>
          <PostDisplay
            title={post?.data[0]?.title}
            date={post?.data[0]?.date_modified}
            author={post?.data[0]?.author_name}
            description={formattedContent}
            tags={post?.data[0]?.tags}
            categories={post?.data[0]?.categories}
          />
          <PostListBar category={category} />
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
                    content={`${(card.post_content).substring(0,40)}...`}
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
