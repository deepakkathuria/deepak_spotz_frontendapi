import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

// "use client";
// import useSWRInfinite from "swr/infinite";
// const fetcher = (url) => fetch(url).then((res) => res.json());
// const NEXT_PUBLIC_BASE_URL_WP = process.env.NEXT_PUBLIC_BASE_URL_WP;

// const getKey = (pageIndex, previousPageData) => {
//   // return a falsy value if this is the last page
//   if (pageIndex && !previousPageData.length) return null;
//   // return `https://jsonplaceholder.typicode.com/comments?_page=${pageIndex}&_limit=12`;
//   return (
//     `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/posts?categories=10&page=${
//       pageIndex + 1
//     }&per_page=8`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Basic ${base64Credentials}`,
//       },
//     }
//   );
// };

// export default function Home() {
//   const { data, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher);

//   return (
//     <>
//       <header
//         style={{ marginTop: "5rem" }}
//         className="p-7 text-center bg-primary shadow-md"
//       >
//         <h1 className="text-secondary font-bold text-xl">Demo Data</h1>
//       </header>
//       <main className="max-w-[1100px] mx-auto mt-10 pb-10 px-4">
//         {isLoading ? (
//           <p className="text-secondary">Loading comments</p>
//         ) : (
//           <ul className="grid grid-cols-3 gap-x-3 gap-y-3">
//             {data.map((comments) => {
//               console.log(comments);
//               //   return <h1>fgakhgc</h1>;
//               return comments.map((comment, index) => (
//                 <li
//                   className="bg-primary p-10 rounded-lg shadow-md"
//                   key={index}
//                 >
//                   <span className="block mb-4 font-bold text-lg text-secondary capitalize">
//                     {comment.date}
//                   </span>
//                   <span className="text-secondary">{comment.slug}</span>
//                 </li>
//               ));
//             })}
//           </ul>
//         )}
//         <div className="max-w-[600px] mx-auto my-10 flex justify-center">
//           <button
//             className="block rounded-md border-2 border-secondary border-solid text-secondary bg-primary font-bold py-2 px-5"
//             onClick={() => setSize(size + 1)}
//           >
//             Load more
//           </button>
//         </div>
//       </main>
//     </>
//   );
// }