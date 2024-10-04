"use client";
import React from "react";
import logoImg from "@/public/assets/svg-image-1.svg";
import desktopImg from "@/public/assets/svg-image-2.svg";
import mobileImg from "@/public/assets/svg-image-3.svg";
import cancel from "@/public/assets/cancel.svg";
import Image from "next/image";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

const Header = ({ viewMode, setViewMode, headerVisible, setHeaderVisible }) => {
  const menuItems = (
    <Menu
      items={[
        {
          label: "Home",
          key: "1",
        },
        {
          label: "About",
          key: "2",
        },
        {
          label: "Contact",
          key: "3",
        },
      ]}
    />
  );
  return (
    <div className="bg-dark">
      <div className="flex justify-between items-center py-3 px-7 h-18 w-full  text-white z-30 relative">
        <div className="flex md:flex-1">
          <h1 className="m-0">
            <Image src={logoImg} alt="logo" />
          </h1>
        </div>
        <div className=" md:flex md:items-center">
          <button
            className="demo-preview-desktop is-active rounded-sm mx-2 flex items-center justify-center p-0 h-8 w-8"
            title="Desktop"
            onClick={() => setViewMode("desktop")}
          >
            <span className="sr-only">Desktop</span>
            <Image src={desktopImg} alt="desktop" />
          </button>
          <button
            className="demo-preview-mobile rounded-sm mx-2 flex items-center justify-center p-0 h-8 w-8"
            title="Mobile"
            onClick={() => setViewMode("mobile")}
          >
            <span className="sr-only">Mobile</span>
            <Image src={mobileImg} alt="mobile" />
          </button>
        </div>
        <div className="flex items-center flex-1 justify-end">
          <div className="demo-preview-select  relative text-sm mr-3 flex gap-3">
            <div className="demo-preview-selected font-medium text-gray-50 border border-gray-600 rounded-lg py-1.5 px-3 cursor-pointer w-36  md:flex items-center justify-center">
              <Dropdown overlay={menuItems} trigger={["click"]}>
                <a className="">
                  <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-[calc(100% - 22px)]">
                    Home
                  </span>
                  <DownOutlined className="ml-10" />
                </a>
              </Dropdown>
            </div>
            <div className="flex items-center gap-5">
              <button className="js-buy btn-xs text-white font-bold text-[14px] bg-violet-500 hover:bg-violet-600 outline-none px-5 py-1 md:py-0 lg:py-3 rounded-lg box-border">
                <span>
                  Buy Now <span className="text-white/50">-</span> $49{" "}
                </span>
              </button>
              <span
                onClick={() => setHeaderVisible(!headerVisible)}
                className="cursor-pointer"
              >
                <Image src={cancel} width={20} height={10} alt="cancel" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
