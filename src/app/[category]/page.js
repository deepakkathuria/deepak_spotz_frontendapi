import React from "react";
import styles from "./CategoryPosts.module.css";
import NewsCard from "@/components/common/NewsCard";
import axios from "axios";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const CategoryPosts = async ({ params }) => {
  const category = params.category;

  const data = await axios.get(
    `${base_url}/getpostsbycategoryname?name=${category}&page=1&limit=100`
  );

  return (
    <>
      <div className={styles.CategoryPosts}>
        <div className={styles.categoryTitleDescription}>
          <h1 className={styles.categoryTitle}>
            {params.category.toUpperCase()}
          </h1>
          <p className={styles.categoryDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            eligendi possimus molestias dolores fugit qui saepe quos quo dolor.
            Illum illo aspernatur itaque necessitatibus modi voluptas libero
            perspiciatis a placeat! Ut, asperiores dolore error laboriosam,
            possimus, exercitationem quidem velit nostrum iusto quo commodi?
            Veritatis culpa ea perspiciatis, incidunt nisi vel amet qui ducimus
            excepturi mollitia sed laboriosam repellat consequuntur? Voluptas.
          </p>
        </div>

        <div className={styles.newsCardsDisplay}>
          {data.data?.map((post) => (
            <NewsCard
              title={post.post_title}
              content={post.post_content}
              date={new Date(post.post_modified).toLocaleString()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPosts;