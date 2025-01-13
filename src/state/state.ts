"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function State() {
  const router = useRouter();
  const [data, setData] = useState([]) as any;

  const handleDetail = (e: any, data: any) => {
    e.preventDefault();
    localStorage.setItem("detailData", JSON.stringify(data)) as any;
    router.push(`product/${data.id}`);
  };

  return { data, setData, handleDetail };
}

export default State;
