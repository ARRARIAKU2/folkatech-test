"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuSquareCheckBig } from "react-icons/lu";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function DetailProduct() {
  const router = useRouter();
  const [data, setData] = useState({}) as any;
  const [count, setCount] = useState(1);
  const [description, setDescription] = useState("description");

  useEffect(() => {
    const detail = localStorage.getItem("detailData");
    if (detail !== null) {
      setData(JSON.parse(detail));
      console.log(data);
      // rest of your code here
    } else {
      console.error("No data found in local storage");
    }
  }, []);

  const renderText = (text: string) => {
    // Ensure text is a string before proceeding
    if (typeof text !== "string") {
      return <span>{text}</span>; // Return as is if it's not a string
    }

    // Check if text includes '\\n' and split accordingly
    if (text.includes("\\n")) {
      return text.split("\\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ));
    } else {
      return text; // Return original text if no '\\n' is found
    }
  };

  const handleDesc = () => {
    setDescription(
      description === "description" ? "information" : "description"
    );
  };
  return (
    <div className="w-full space-y-8">
      <nav
        id="navbar"
        className="flex justify-end items-center pt-8 px-80 gap-4"
      >
        <div className="h-full flex items-center shadow-lg">
          <input
            className="p-4 h-full rounded-tl-lg rounded-bl-lg"
            type="text"
            placeholder="Search"
          />
          <div className="bg-red-500 p-4 rounded-tr-lg rounded-br-lg">
            <FaSearch className="text-white" />
          </div>
        </div>
        <div>
          <MdFavoriteBorder className="text-xl" />
        </div>
        <div>
          <FiShoppingBag className="text-xl" />
        </div>
        <div>
          <IoPersonOutline className="text-xl" />
        </div>
      </nav>
      <div id="tab" className="w-full px-80 bg-[#F5F5F5]">
        <div className="text-xl bg-[#EB3F36] w-fit text-white px-8 py-4">
          BELANJA
        </div>
      </div>
      <div id="breadcrumb" className="w-full px-80">
        <div className="flex items-center gap-4">
          <div
            className="text-[#696969] cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </div>
          <MdKeyboardDoubleArrowRight />
          <div className="text-[#EB3F36]">{data.name}</div>
        </div>
      </div>
      <div id="product" className="w-full px-80">
        <div className="grid grid-cols-2 gap-8">
          <div className="w-full grid grid-cols-3 grid-rows-4 gap-4 justify-between">
            <div className="col-span-3 row-span-3 bg-gray-200 flex items-center justify-center h-[530px]">
              <img
                src={
                  Array.isArray(data?.images) && data.images[0]?.image_url
                    ? data.images[0].image_url
                    : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
                alt="Product image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-300 flex items-center justify-center h-[170px]">
              <img
                src={
                  Array.isArray(data?.images) && data.images[1]?.image_url
                    ? data.images[1].image_url
                    : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
                alt="Product image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-300 flex items-center justify-center h-[170px]">
              <img
                src={
                  Array.isArray(data?.images) && data.images[2]?.image_url
                    ? data.images[2].image_url
                    : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
                alt="Product image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-300 flex items-center justify-center h-[170px]">
              <img
                src={
                  Array.isArray(data?.images) && data.images[3]?.image_url
                    ? data.images[3].image_url
                    : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
                alt="Product image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-bold text-2xl text-[#696969]">{data.name}</div>
            <div className="font-medium text-xl text-[#696969]">
              {data.product_merk}
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-xs" />
              ))}
              <div className="text-xs">(7)</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium text-xl text-[#EB3F36]">
                RP. {data.price}
              </div>
              <div className="flex items-center gap-1 text-xs text-[#6F8EFF]">
                <LuSquareCheckBig />
                <div>Tersedia</div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center justify-between">
                <button
                  className={`${
                    count == 1 ? "opacity-25" : ""
                  } h-14 w-14 flex justify-center items-center shadow-lg cursor-pointer`}
                  onClick={() => setCount(count - 1)}
                  disabled={count === 1}
                >
                  <FaMinus />
                </button>
                <div className="h-14 w-14 flex justify-center items-center shadow-lg">
                  {count}
                </div>
                <button
                  className="h-14 w-14 flex justify-center items-center shadow-lg cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <FaPlus />
                </button>
              </div>
              <div className="font-medium text-base text-white px-4 bg-[#EB3F36] h-14 flex justify-center items-center">
                TAMBAH KE KERANJANG
              </div>
              <div className="bg-[#F5F5F5] h-14 w-14  flex justify-center items-center">
                <MdFavoriteBorder className="text-xl" />
              </div>
            </div>
            <div className="text-lg text-[#696969] text-justify">
              {renderText(data.short_description)}
            </div>
          </div>
        </div>
      </div>
      <div id="description" className="w-full px-80">
        <div className="flex justify-center">
          <div
            className={`px-20 py-4 text-2xl font-bold text-[#EB3F36] cursor-pointer ${
              description === "description" ? "border-b-4 border-[#EB3F36]" : ""
            }`}
            onClick={handleDesc}
          >
            DESKRIPSI
          </div>
          <div
            className={`px-20 py-4 text-2xl font-bold text-[#EB3F36] cursor-pointer ${
              description === "information" ? "border-b-4 border-[#EB3F36]" : ""
            }`}
            onClick={handleDesc}
          >
            INFORMASI
          </div>
        </div>
        {description === "description" && (
          <div className="text-justify text-lg py-8">
            {renderText(data.description)}
          </div>
        )}
        {description === "information" && <div>infromasi</div>}
      </div>
      <div id="suggest" className="w-full px-80 pb-80">
        <div className="flex justify-center">
          <div
            className={`px-20 py-4 text-2xl font-bold text-[#EB3F36] cursor-pointer border-b-4 border-[#EB3F36]`}
          >
            REKOMENDASI UNTUK ANDA
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-10">
          <div className="rounded-lg shadow-lg p-4 flex flex-col items-center gap-2 ">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="text-center text-xl text-[#696969] font-bold truncate w-full">
              ABID CLEVER DRIPPER 102
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-xs" />
              ))}
              <div className="text-xs">(7)</div>
            </div>
            <div className="text-[#EB3F36] font-semibold text-lg">
              Rp. <span>480000</span>
            </div>
          </div>
          <div className="rounded-lg shadow-lg p-4 flex flex-col items-center gap-2 ">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="text-center text-xl text-[#696969] font-bold truncate w-full">
              ABID CLEVER DRIPPER 102
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-xs" />
              ))}
              <div className="text-xs">(7)</div>
            </div>
            <div className="text-[#EB3F36] font-semibold text-lg">
              Rp. <span>480000</span>
            </div>
          </div>
          <div className="rounded-lg shadow-lg p-4 flex flex-col items-center gap-2 ">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="text-center text-xl text-[#696969] font-bold truncate w-full">
              ABID CLEVER DRIPPER 102
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-xs" />
              ))}
              <div className="text-xs">(7)</div>
            </div>
            <div className="text-[#EB3F36] font-semibold text-lg">
              Rp. <span>480000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
