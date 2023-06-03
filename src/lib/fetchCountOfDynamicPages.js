import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchCountOfDynamicPages = async () => {
  try {
    const res = await axios.get(`${baseUrl}/totalposts`);
    return res.data[0].total_posts;
  } catch (err) {
    console.log(err);
  }
};

export default fetchCountOfDynamicPages;
