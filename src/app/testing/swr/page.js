"use client";
import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};

const Page = () => {
  const { data, error, isLoading } = useSWR("/todos", fetcher, {
    refreshInterval: 1000,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return (
      <>
        <h1>Error occurred!</h1>
      </>
    );
  }
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        {data.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
    </>
  );
};

export default Page;
