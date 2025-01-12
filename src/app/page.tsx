"use client";
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import State from "../state/state";
import PrivateProvider from "../providers/PrivateProvider";

import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Home() {
  const token = localStorage.getItem("token");
  const { data, handleDetail } = State();
  const [dataCount, setDataCount] = useState<number>(10);
  const [selected, setSelected] = useState<string>("product_name");
  const [rowData, setRowData] = useState<any>([]);

  const [search, setSearch] = useState<string>("");
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const getData = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        `https://techtest.folkatech.com/api/product?keyword=${
          search === "" ? "" : search
        }&price=${min === "" ? "" : min},${max === "" ? "" : max}&page=${
          page === 1 ? "" : page
        }&limit=${dataCount === 10 ? 10 : dataCount}&order=${
          selected === "product_name" ? "product_name" : selected
        },ASC`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRowData(response.data.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  type AccordionData = {
    origin: { city: string }[];
    species: { species: string }[];
    level: { level: string }[];
    taste: { taste: string }[];
    process: { process: string }[];
  };

  const accordion: AccordionData = {
    origin: [
      { city: "Aceh" },
      { city: "Bali" },
      { city: "Banten" },
      { city: "Bengkulu" },
      { city: "Jawa Barat" },
      { city: "Jawa Tengah" },
      { city: "Jawa Timur" },
    ],
    species: [
      { species: "Arabika" },
      { species: "Robusta" },
      { species: "Blend" },
    ],
    level: [{ level: "light" }, { level: "medium" }, { level: "dark" }],
    taste: [
      { taste: "Sweet" },
      { taste: "Floral" },
      { taste: "Fruity" },
      { taste: "Nutty" },
      { taste: "Cocoa" },
      { taste: "Spices" },
    ],
    process: [
      { process: "Honey White" },
      { process: "Natural" },
      { process: "Honey Gold" },
    ],
  };

  type AccordionConfig = {
    key: keyof AccordionData; // Ensure the key is valid for accordion
    label: string;
    dataKey: string;
  };

  const accordionConfig: AccordionConfig[] = [
    { key: "origin", label: "ORIGIN", dataKey: "city" },
    { key: "species", label: "SPECIES", dataKey: "species" },
    { key: "level", label: "Roast level", dataKey: "level" },
    { key: "taste", label: "Taste", dataKey: "taste" },
    { key: "process", label: "Processing", dataKey: "process" },
  ];

  console.log(data);
  return (
    <PrivateProvider>
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
            <div className="text-[#696969]">Home</div>
            <MdKeyboardDoubleArrowRight />
            <div className="text-[#696969]">Produk</div>
            <MdKeyboardDoubleArrowRight />
            <div className="text-[#EB3F36]">Roasted bean</div>
          </div>
        </div>
        <div id="content" className="w-full px-80 grid grid-cols-4 gap-4">
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="text-[#696969]">
                    URUTKAN BERDASARKAN HARGA
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex items-center gap-2">
                  <div>Rp.</div>
                  <input
                    type="text"
                    className="w-full bg-slate-100 p-2 rounded-lg"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                  />
                  <div>Rp.</div>
                  <input
                    type="text"
                    className="w-full bg-slate-100 p-2 rounded-lg"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                  />
                </AccordionContent>
              </AccordionItem>
              {accordionConfig.map((item, index) => (
                <AccordionItem key={item.key} value={`item-${index + 2}`}>
                  <AccordionTrigger>
                    <div className="text-[#696969]">{item.label}</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {accordion[item.key]?.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={
                              (subItem as Record<string, string>)[item.dataKey]
                            } // Explicit casting
                          />
                          <label
                            htmlFor={
                              (subItem as Record<string, string>)[item.dataKey]
                            }
                            className="text-sm text-[#868686]"
                          >
                            {(subItem as Record<string, string>)[item.dataKey]}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="col-span-3">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm">
                <div>Menampilkan</div>
                <div>
                  <Select
                    onValueChange={(value) => setDataCount(Number(value))}
                  >
                    <SelectTrigger className="w-[60px]">
                      <SelectValue placeholder={dataCount.toString()} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="30">30</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>dari {dataCount}</div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div>Urutkan</div>
                <div>
                  <Select onValueChange={(value) => setSelected(value)}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Product Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="product_name">
                          Product Name
                        </SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-4">
              {Array.isArray(data) &&
                data.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="rounded-lg shadow-lg p-4 flex flex-col items-center gap-2 "
                    onClick={(e) => {
                      handleDetail(e, item);
                    }}
                  >
                    <div>
                      <img
                        src={item?.images[0].image_url}
                        alt=""
                        className="rounded-lg"
                      />
                    </div>
                    <div className="text-center text-xl text-[#696969] font-bold truncate w-full">
                      {item?.name}
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-yellow-400 text-xs"
                        />
                      ))}
                      <div className="text-xs">(7)</div>
                    </div>
                    <div className="text-[#EB3F36] font-semibold text-lg">
                      Rp. <span>{item?.price}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PrivateProvider>
  );
}

export default Home;
