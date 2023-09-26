import slugify from "slugify";
import styles from "./currentSeries.module.css";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchSeriesList = async () => {
  try {
    const res = await fetch(
      `${baseUrl}/competitions?per_page=30&&paged=1&status=live&token=${key}`,
      { next: { revalidate: 30 } }
    );

    if (!res.ok) {
      // If the response status code is not in the range 200-299, throw an error
      // throw new Error(`Failed to fetch data. Status: ${res.status}`);
      console.log(`Failed to fetch data. Status: ${res.status})`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // Handle errors here, you can log the error or return a default value
    // console.error("Error in fetchSeriesList:", error);
    return []; // Return an empty array or another default value
  }
};

const CurrentSeries = async () => {
  const data = await fetchSeriesList();
    // console.log(data.response.items, "dahfbjsvfihbk999");
  return (
    <>
      <ul className={styles.ulList}>
        <li style={{ fontWeight: "bold", color: "#bd0000" }}>
          Quick Links &#58;
        </li>
        {data?.response?.items?.map((item) => {
          if (item.category === "international") {
            return (
              <a
                key={item.cid}
                href={`/cricket-series/${slugify(item?.title, {
                  remove: /[*+~.()'"!:@]/g,
                }).toLowerCase()}-${item?.cid}/`}
              >
                <li>{item.abbr}</li>
              </a>
            );
          }
          return null;
        })}
      </ul>
    </>
  );
};

export default CurrentSeries;
