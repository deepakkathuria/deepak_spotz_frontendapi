import React from "react";
import styles from "../../[category]/CategoryPosts.module.css";
import NewsCard from "../../../components/common/NewsCard";
import axios from "axios";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const CategoryPosts = async ({ params }) => {
  const { tag } = params;
  const data = await axios.get(
    `${base_url}/getpostsbytagname?tag=${tag}&page=1&limit=100`
  );

  return (
    <>
      <div className={styles.CategoryPosts}>
        <div className={styles.categoryTitleDescription}>
          <h1 className={styles.categoryTitle}>{params.tag?.toUpperCase()}</h1>
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
            <div className="card" key={post.ID}>
              <Link href={`/${tag}/${post.post_name}`}>
                <NewsCard
                  title={post.post_title}
                  content={post.post_content}
                  date={new Date(post?.post_modified).toLocaleString()}
                />
              </Link>
            </div>
          ))}
          {/* <NewsCard /> */}
        </div>
      </div>
    </>
  );
};

export default CategoryPosts;
