import React from "react";
import WagonWheel from "../../../components/testing/WagonWheel";
// import apiData from '../data/apiData'; // Replace 'apiData' with the actual data you receive from the API

const fetchApiData = async () => {
  const res = await fetch(
    "https://rest.entitysport.com/v2/matches/49689/wagons?token=ec471071441bb2ac538a0ff901abd249"
  );

  return await res.json();
};

const HomePage = async () => {
  const apiData1 = await fetchApiData();
  const apiData = apiData1.response;
//   console.log(apiData.innings[0].wagons, "apiDataaaaaaaa");
  return (
    <div>
      <h1>Cricket Wagon Wheel</h1>
      <WagonWheel data={apiData} />
    </div>
  );
};

export default HomePage;
