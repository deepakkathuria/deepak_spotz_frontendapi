import Rss from "rss";
const site_url = process.env.siteUrl;
const base_url = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

// import { getArticles } from "@/data/article.data";

// const SITE_URL = "http://localhost:3000";

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const fetchArticles = async () => {
  const res = await fetch(
    `${base_url}/wp-json/wp/v2/posts?per_page=100&page=1`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export async function GET() {
  const articles = await fetchArticles();

  const feed = new Rss({
    title: "SportWiki",
    description:
      "Latest Sports News: Get all latest sports news today on different sports, from Cricket, Football, Tennis, WWE, Esports, Badminton, Basketball, Boxing, F1, Hockey, Kabaddi & Golf.",
    feed_url: `${site_url}/feed`,
    site_url: site_url,
    image_url: `${site_url}/gaurav/sportzwiki_logo.svg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    language: "en",
    generator: "SportzWiki Media",
  });

  // const articles1 = [
  //   { title: "Example blog", description: "Lorem ipsum dolor sit amet" },
  // ];

  articles.forEach((article) => {
    feed.item({
      image: article.featured_image_url,
      title: article.title.rendered,
      description: article.content.rendered,
      url: `${site_url}/${article.primary_category_slug || "news"}/${
        article.slug
      }`,
      date: new Date(article.date + "Z"),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
