import axios from "axios";
const base_url = process.env.baseUrl;

const fetchCategoryNameSlug = async () => {
  try {
    const res = await axios.get(
      `${base_url}/getcategoriesbyname?category1=Kabaddi&category2=News&category3=sports`
    );
    console.log("#######################")
    console.log(res.data)
    console.log("#######################")
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchCategoryNameSlug;
