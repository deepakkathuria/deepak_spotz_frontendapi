// // "use client"
// import React from 'react'
// import axios from 'axios'
// const base_url = process.env.BASE_URL_DO;
// import { useGlobalContext } from '../app/context/store';

// const fetchPostsByTagName = async(tag) => {
//     const posts = await axios.get(`${base_url}/getpostsbytagname?tag=${tag}&page=1&limit=100`)
//     console.log("###########################")
//     console.log(posts.data)
//     console.log("###########################")

//     const { currentTag, setCurrentTag, currentData, setCurrentData } = useGlobalContext();
//   return (
//     <div>fetchPostsByTagName</div>
//   )
// }

// export default fetchPostsByTagName