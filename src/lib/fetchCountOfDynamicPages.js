const baseUrl = process.env.BASE_URL_WP;

const fetchCountOfDynamicPages = async () => {
  try {
    const response = await fetch(
      `https://demo2.sportzwiki.com/wp-json/wp/v2/posts?per_page=1`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const totalCount = parseInt(response.headers.get("X-WP-Total"));
    return totalCount;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default fetchCountOfDynamicPages;
