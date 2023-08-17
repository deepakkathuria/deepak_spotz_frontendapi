"use client"
import { NewsArticleJsonLd } from "next-seo";

const ArticleLd = (props) => {
  //   console.log(props.tags, "tags");

  return (
    <>
      <NewsArticleJsonLd
        useAppDir={true}
        url="https://example.com/article"
        title={props.title}
        images={[`${props.thumbnail}`]}
        section="politic"
        keywords={props.tags}
        datePublished={props.date}
        dateModified={props.date}
        authorName={props.author}
        publisherName="SportzWiki Media Pvt Ltd"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description={props.shortDescription}
        body={props.description}
        //   isAccessibleForFree={true}
      />
    </>
  );
};

export default ArticleLd;
