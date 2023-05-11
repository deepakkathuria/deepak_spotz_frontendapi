import axios from "axios";
const baseUrl = process.env.baseUrl;

const fetchAllDynamicPostsSlugs = async () => {
  try {
    const res = await axios.get(`${baseUrl}/getpostslug`);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchAllDynamicPostsSlugs;
