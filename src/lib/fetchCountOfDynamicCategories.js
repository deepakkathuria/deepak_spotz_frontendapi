import axios from "axios";
const baseUrl = process.env.BASE_URL_DO;

const fetchCountOfDynamicCategories = async () => {
  try {
    const res = await axios.get(`${baseUrl}/gettotalcategories`);
    // console.log(res.data[0].total_categories_tags);
    return res.data[0].total_tags_categories;
  } catch (err) {
    console.log(err);
  }
};

export default fetchCountOfDynamicCategories;
