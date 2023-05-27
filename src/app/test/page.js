"use client";
// import { Menu_ic } from "@/gaurav/route";
import React from "react";
import Image from "next/image";
// import menu from "/images/menu_ic.png"

const page = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>page</div>
      <Image
        src="/images/Menu_ic.svg"
        alt="Vercel Logo"
        width={200}
        height={44}
        priority
      />
    </>
  );
};

export default page;
