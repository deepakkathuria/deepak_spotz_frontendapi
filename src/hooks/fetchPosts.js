import axios from "axios";
const apiUrl = process.env.apiUrl;

const fetchPosts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/posts/?offset=1&limit=10`);

    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // console.log(response.data);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(`Request failed with status ${error.response.status}`);
    } else if (error.request) {
      console.log("Request failed. Please check your network connection.");
    } else {
      console.log(`Request failed with message ${error.message}`);
    }
  }
};

export default fetchPosts;
