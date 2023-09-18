import { Feed } from "feed";
const base_url = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;
const site_url = process.env.SITE_URL;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const isCategory = async (slug) => {
  const res = await fetch(`${base_url}wp-json/wp/v2/categories?slug=${slug}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${base64Credentials}`,
    },
  });
  const data = await res.json();
  // console.log(data, "datadatadata");
  return data.length > 0 ? true : false;
};

const fetchCategoryById = async (categoryId) => {
  const response = await fetch(
    `${base_url}wp-json/wp/v2/categories/${categoryId}`,
    {
      next: { revalidate: 300 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const categoryData = await response.json();
  return categoryData;
};

const fetchPostBySlug = async (slug) => {
  try {
    const response = await fetch(
      `${base_url}wp-json/wp/v2/posts?slug=${slug}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
        next: { revalidate: 1500 },
      }
    );

    const articleData = await response.json();

    // Fetch tags data and populate names
    const tagIds = articleData[0]?.tags || [];
    const tagsData = await Promise.all(
      tagIds.map((tagId) => fetchTagById(tagId))
    );
    const tags = tagsData.map((tag) => tag);

    // Fetch categories data and populate names
    const categoryIds = articleData[0]?.categories || [];
    const categoriesData = await Promise.all(
      categoryIds.map((categoryId) => fetchCategoryById(categoryId))
    );
    const categories = categoriesData.map((category) => category);

    const authorId = articleData[0]?.author || "SportzWiki Desk";
    const authorName = await getAuthorName(authorId);

    // Replace tag and category IDs with their respective names
    articleData[0].tags = tags;
    articleData[0].categories = categories;
    articleData[0].author = authorName;

    return articleData[0];
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
};

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

  const { category, slug } = params;
  const result = await isCategory(slug);
  if (result === true) {
    // console.log("hereeeee");
    const categoryData = await fetchCategoryDataBySlug(slug);
    const categoryPosts = await fetchPostsByCategoryId(categoryData[0]?.id);

    categoryPosts.forEach((article) => {
      feed.addItem({
        title: article.title.rendered,
        id: `https://${site_url}/${article.primary_category_slug || "news"}/${
          article.slug
        }`,
        link: `https://${site_url}/${article.primary_category_slug || "news"}/${
          article.slug
        }`,
        description: article.excerpt.rendered,
        content: article.content.rendered,

        date: new Date(article.modified),
        image: article.featured_image_url,
      });
    });
  } else {
    // const { category, slug } = props;
    const article = await fetchPostBySlug(slug);
    // console.log(articleBody, "articleBodyarticleBodyarticleBody");
    // articleBody.forEach((article) => {
    feed.addItem({
      title: article.title.rendered,
      id: `https://${site_url}/${article.primary_category_slug || "news"}/${
        article.slug
      }`,
      link: `https://${site_url}/${article.primary_category_slug || "news"}/${
        article.slug
      }`,
      description: article.excerpt.rendered,
      // content: article.content.rendered,

      date: new Date(article.modified),
      image: article.featured_image_url,
    });
    // });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
