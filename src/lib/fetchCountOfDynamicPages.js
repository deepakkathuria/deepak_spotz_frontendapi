import axios from "axios";
const baseUrl = process.env.baseUrl;

const fetchCountOfDynamicPages = async () => {
  try {
    const res = await axios.get(`${baseUrl}/getpostslug`);

    return res.data.length;
  } catch (err) {
    console.log(err);
  }
};

export default fetchCountOfDynamicPages;
