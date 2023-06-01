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
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

// export const metadata = {
//   title: "post",
//   description: "Sports news | events",
// };

export async function generateMetadata({ params }) {
  const { category, slug } = params;
  const post = await axios.get(
    `${base_url}/getsinglepostbycategoryslug?slug=${slug}`
  );

  const postMeta = await axios.get(
    `${base_url}/getpostmetabypostslug?slug=${slug}`
  );
  return {
    title: post?.data[0]?.title,
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

    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "prismic.asText(article.data.title)",
      author: {
        "@type": "Person",
        name: "prismic.asText(article.data.author.data.name)",
        // The full URL must be provided, including the website's domain.
        url: "https://example.com",
      },
      image: "biufbi",
      datePublished: "article.data.publication_date",
      dateModified: "article.last_publication_date",
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
    var postMeta = await axios.get(
      `${base_url}/getpostmetabypostslug?slug=${slug}`
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
    console.log("Error at tags selection of posts" + slug);
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
            summary={postMeta?.data[0]?.meta_description}
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
