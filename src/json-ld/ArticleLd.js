import { NewsArticleJsonLd } from "next-seo";

const ArticleLd = (props) => {
//   console.log(props.tags, "tags");

  return (
    <>
      <NewsArticleJsonLd
        useAppDir={true}
        url="https://example.com/article"
        title={props.title}
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        section="politic"
        keywords={props.tags}
        datePublished={props.date}
        dateModified={props.date}
        authorName={props.author}
        publisherName="SportzWiki Media Pvt Ltd"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description="This is a mighty good description of this article."
        body={props.description}
        //   isAccessibleForFree={true}
      />
    </>
  );
};

export default ArticleLd;
