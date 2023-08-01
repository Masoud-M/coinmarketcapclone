"use client";

import { BiSolidDownArrow } from "react-icons/bi";
import { useGlobalContext } from "../Context/MainContext";
import GlobalStats from "./GlobalStats";
import Image from "next/image";
import UsdImage from "../../public/USD.svg";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const DesktopHeader = () => {
  const { darkTheme, setDarkTheme } = useGlobalContext();
  return (
    <div
      className={
        darkTheme
          ? "bg-[#0d1421] w-screen h-[125px] flex flex-col"
          : "bg-[#fff] w-screen h-[125px] flex flex-col"
      }
    >
      <div className=" py-[8px] h-[52px] ">
        <div className="flex flex-col items-center ">
          <div className="flex justify-between w-full pr-[24px]">
            <div className="mr-[8px] flex z-[5] overflow-x-auto ">
              <GlobalStats />
            </div>
            <div className=" h-[36px] z-20 flex items-center whitespace-nowrap">
              <div
                className={
                  darkTheme
                    ? " text-white flex flex-nowrap shrink-0 items-center whitespace-nowrap text-[12px] font-semibold"
                    : " text-black flex flex-nowrap shrink-0 items-center whitespace-nowrap text-[12px] font-semibold"
                }
              >
                <div className="flex flex-nowrap  items-center gap-1 h-[22.5px] mr-[8px] cursor-pointer">
                  <span>English</span>
                  <div className="text-[8px] mb-[2px]">
                    <BiSolidDownArrow />
                  </div>
                </div>
                <div className="flex flex-nowrap  items-center mr-[4px]">
                  <Image width={15} height={15} src={UsdImage} alt="" />
                  <span className="ml-[8px]">USD</span>
                  <div className="text-[8px] ml-[4px] mb-[2px]">
                    <BiSolidDownArrow />
                  </div>
                </div>
                <button>
                  <div
                    className={
                      darkTheme
                        ? "h-[20px] w-[20px] text-[20px] flex items-center"
                        : "hidden"
                    }
                  >
                    <BsFillSunFill />
                  </div>
                  <div
                    className={
                      darkTheme
                        ? "hidden"
                        : "h-[20px] w-[20px] text-[20px] flex items-center"
                    }
                  >
                    <BsFillMoonFill />
                  </div>
                </button>
                <span className="mx-[12px] w-[1px] h-[22px] bg-[#323546] ">
                  {" "}
                </span>
              </div>
              <div
                className={
                  darkTheme
                    ? " text-white  whitespace-nowrap text-[12px] "
                    : " text-black  whitespace-nowrap text-[12px] "
                }
              >
                <div>diamond</div>
                <button>Login</button>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[1px] w-full bg-[#323546]"></div>
        <div>bottom half</div>
        <div className="h-[1px] w-full bg-[#323546]"></div>
      </div>
    </div>
  );
};

export default DesktopHeader;
