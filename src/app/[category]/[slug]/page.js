import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import styles from "./post.module.css";
import PostCategoryBox from "../../../components/common/PostCategoryBox";
import PostDisplay from "../../../components/common/PostDisplay";
import PostListBar from "../../../components/common/PostListBar";
import NewsCard from "../../../components/common/NewsCard";
import axios from "axios";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const page = async ({ params }) => {
  const { category, slug } = params;

  try {
    var post = await axios.get(
      `${base_url}/getsinglepostbycategoryslug?slug=${slug}`
    );
  } catch (err) {
    console.log(err);
  }

  const formattedContent = post?.data[0]?.content.replace(/\r?\n/g, "<br>");

  return (
    <>
      <div className={styles.postPageContainer}>
        <Breadcrumb />
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
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
