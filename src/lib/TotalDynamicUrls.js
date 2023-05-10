import axios from "axios";

const fetchCountOfDynamicPages = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data.length);
  } catch (err) {
    console.error(err);
  }
};

export default fetchCountOfDynamicPages;
