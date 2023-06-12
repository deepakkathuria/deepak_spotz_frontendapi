const base_url = process.env.NEXT_PUBLIC_BASE_URL;

// getPostMeta

export const getPostMeta = async (slug) => {
  try {
    const response = await fetch(
      `${base_url}/getpostmetabypostslug?slug=${slug}`,
      {
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Error retrieving post metadata");
    }

    const postMetaData = await response.json();
    return postMetaData;
  } catch (err) {
    console.error(err);
    return null; // Or any other appropriate value to indicate an error
  }
};

// getSinglePostByPostSlug

export const getSinglePostByPostSlug = async (slug) => {
  try {
    const response = await fetch(
      `${base_url}/getsinglepostbycategoryslug?slug=${slug}`,
      {
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Error retrieving post metadata");
    }

    const SinglePostByPostSlug = await response.json();
    return SinglePostByPostSlug;
  } catch (err) {
    console.error(err);
    return null; // Or any other appropriate value to indicate an error
  }
};

// getPostBody

export const getPostBody = async (slug) => {
  try {
    const response = await fetch(
      `${base_url}/getSinglePostByPostSlug?slug=${slug}`,
      {
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Error retrieving post metadata");
    }

    const PostBody = await response.json();
    return PostBody;
  } catch (err) {
    console.error(err);
    return null; // Or any other appropriate value to indicate an error
  }
};

// getPostData

export const getPostData = async (slug) => {
  try {
    const response = await fetch(
      `${base_url}/getsinglepostbycategoryslug?slug=${slug}`,
      {
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Error retrieving post metadata");
    }

    const PostData = await response.json();
    return PostData;
  } catch (err) {
    console.error(err);
    return null; // Or any other appropriate value to indicate an error
  }
};

// relatedPosts

export const getRelatedPostsByTag = async (randomTag) => {
  try {
    const response = await fetch(
      `${base_url}/getPostsByTagName?tag=${randomTag}`,
      {
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Error retrieving post metadata");
    }

    const RelatedPostsByTag = await response.json();
    return RelatedPostsByTag;
  } catch (err) {
    console.error(err);
    return null; // Or any other appropriate value to indicate an error
  }
};

export const getPostThumbById = async (ID) => {
  try {
    const response = await fetch(
      `${base_url}/getPostThumbnailByPostID?id=${ID}`,
      {
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Error retrieving post metadata");
    }

    const postThumb = await response.json();
    return postThumb[0]?.cover_image_guid;
  } catch (err) {
    console.error(err);
    return null; // Or any other appropriate value to indicate an error
  }
};
