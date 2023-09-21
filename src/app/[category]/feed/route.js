import { Feed } from "feed";
const base_url = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;
const site_url = process.env.SITE_URL;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const getAuthorName = async (userId) => {
  const res = await fetch(`${base_url}wp-json/wp/v2/users${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${base64Credentials}`,
    },
    cache: "no-store",
  });

  const UserData = await res.json();
  return UserData;
};

const fetchCategoryDataBySlug = async (categorySlug) => {
  const res = await fetch(
    `${base_url}wp-json/wp/v2/categories?slug=${categorySlug}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
      cache: "no-store",
    }
  );

  const categoryData = await res.json();
  return categoryData;
};

const fetchPostsByCategoryId = async (categoryId, currentPage) => {
  const res = await fetch(
    `${base_url}wp-json/wp/v2/posts?categories=${categoryId}&per_page=25`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
      cache: "no-store",
    }
  );

  const posts = await res.json();
  return posts ?? [];
};

export async function GET(request, { params }) {
  const category = params.category;
  const categoryData = await fetchCategoryDataBySlug(category);
  const categoryPosts = await fetchPostsByCategoryId(categoryData[0]?.id);

  const feed = new Feed({
    title: "SportzWiki",
    description:
      "Latest Sports News: Get all latest sports news today on different sports, from Cricket, Football, Tennis, WWE, Esports, Badminton, Basketball, Boxing, F1, Hockey, Kabaddi & Golf.",
    id: "https://sportzwiki.com/",
    link: "https://sportzwiki.com/",
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "http://sportzwiki.com/gaurav/sportzwiki_logo.png",
    favicon: "https://sportzwiki.com/favicon.ico",
    copyright: "All rights reserved 2023, SportzWiki",
    generator: "SportzWiki Media",
  });

  categoryPosts.forEach((article) => {
    feed.addItem({
      title: article.title.rendered,
      id: `https://${site_url}/${article.primary_category_slug || "news"}/${
        article.slug
      }/`,
      link: `https://${site_url}/${article.primary_category_slug || "news"}/${
        article.slug
      }/`,
      description: article.excerpt.rendered,
      content: article.content.rendered,

      date: new Date(article.modified),
      image: article.featured_image_url,
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
