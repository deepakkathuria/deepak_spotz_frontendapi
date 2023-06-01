// "use client"

import React from "react";
import styles from "../../[category]/CategoryPosts.module.css";
import NewsCard from "../../../components/common/NewsCard";
import axios from "axios";
import Link from "next/link";
// import CategoryDescriptionDisplay from "@/components/common/categoryDescriptionDisplay";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }) {
  const { tag } = params;
  return {
    title: `SportzWiki | ${tag}`,
    description: "this is a comment",
  };
}

const CategoryPosts = async ({ params }) => {
  const { tag } = params;
  const data = await axios.get(
    `${base_url}getpostbytagslug?slug=cricket&page=1&limit=100`
  );
  console.log(data.data);
  return (
    <>
      <div className={styles.CategoryPosts}>
        <div className={styles.categoryTitleDescription}>
          <h1 className={styles.categoryTitle}>{params.tag?.toUpperCase()}</h1>
          {/* <CategoryDescriptionDisplay category={params.tag} /> */}
        </div>

        <div className={styles.newsCardsDisplay}>
          {data.data?.map((post) => (
            <div className="card" key={post.ID}>
              <Link href={`/${post.category}/${post.post_name}`}>
                <NewsCard
                  title={post.post_title}
                  content={post.post_content}
                  date={new Date(post?.post_modified).toLocaleString()}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPosts;
