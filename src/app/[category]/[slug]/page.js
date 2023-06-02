import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import styles from "./post.module.css";
import PostCategoryBox from "../../../components/common/PostCategoryBox";
import PostDisplay from "../../../components/common/PostDisplay";
import PostListBar from "../../../components/common/PostListBar";
import NewsCard from "../../../components/common/NewsCard";
import Link from "next/link";
import axios from "axios";

import { ArticleJsonLd, OrganizationJsonLd, BreadcrumbJsonLd } from "next-seo";
{
  /* <NextSeo useAppDir={true} />; */
}

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
    title: post?.data[0]?.title,
    description: postMeta?.data[0]?.meta_description,
    // ##############################################

    // "@context": "https://schema.org",
    // "@type": "NewsArticle",
    // headline: "Title of a News Article",
    // image: [
    //   "https://example.com/photos/1x1/photo.jpg",
    //   "https://example.com/photos/4x3/photo.jpg",
    //   "https://example.com/photos/16x9/photo.jpg",
    // ],
    // datePublished: "2015-02-05T08:00:00+08:00",
    // dateModified: "2015-02-05T09:20:00+08:00",
    // author: [
    //   {
    //     "@type": "Person",
    //     name: "Jane Doe",
    //     url: "https://example.com/profile/janedoe123",
    //   },
    //   {
    //     "@type": "Person",
    //     name: "John Doe",
    //     url: "https://example.com/profile/johndoe123",
    //   },
    // ],

    // ##############################################

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

  const formattedContent = post?.data[0]?.content.replace(/\r?\n/g, "<br>");

  // const itemListElements = breadcrumbs.map((breadcrumb, index) => {
  //   return {
  //     position: index + 1,
  //     name: breadcrumb.name,
  //     item: breadcrumb.url,
  //   };
  // });

  return (
    <>
      {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
      <ArticleJsonLd
        useAppDir={true}
        url="https://example.com/article"
        title="Article headline"
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName={[
          {
            name: "Jane Blogs",
            url: "https://example.com",
          },
          {
            name: "Mary Stone",
            url: "https://example.com",
          },
        ]}
        publisherName="Gary Meehan"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description="This is a mighty good description of this article."
      />

      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "HOME",
            item: `site_url`,
          },
          {
            position: 2,
            name: `${category.toUpperCase()}`,
            item: `${site_url}/${category}`,
          },
          {
            position: 3,
            name: `${slug.toUpperCase().substring(0, 80)}...`,
            item: `${site_url}/${category}/${slug}`,
          },
        ]}
      />

      <OrganizationJsonLd
        useAppDir={true}
        type="Corporation"
        id={site_url}
        logo="https://www.example.com/photos/logo.jpg"
        legalName="Sportzwiki Media Pvt ltd"
        name="Purple Fox"
        address={{
          streetAddress: "1600 Saratoga Ave",
          addressLocality: "San Jose",
          addressRegion: "CA",
          postalCode: "95129",
          addressCountry: "US",
        }}
        contactPoint={[
          {
            telephone: "+1-401-555-1212",
            contactType: "customer service",
            email: "customerservice@email.com",
            areaServed: "US",
            availableLanguage: ["English", "Spanish", "French"],
          },
          {
            telephone: "+1-877-746-0909",
            contactType: "customer service",
            email: "servicecustomer@email.com",
            contactOption: "TollFree",
            availableLanguage: "English",
          },
          {
            telephone: "+1-877-453-1304",
            contactType: "technical support",
            contactOption: "TollFree",
            areaServed: ["US", "CA"],
            availableLanguage: ["English", "French"],
          },
        ]}
        sameAs={["https://www.orange-fox.com"]}
        url="https://www.purpule-fox.io/"
      />
      {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

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
