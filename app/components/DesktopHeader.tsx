"use client";
import { useTheme } from "next-themes";
import { BiSolidDownArrow } from "react-icons/bi";
import GlobalStats from "./GlobalStats";
import Image from "next/image";
import UsdImage from "../../public/USD.svg";
import Diamond from "../../public/diamond-icon.svg";
import GiftBox from "../../public/signupGift.gif";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const DesktopHeader = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={
        "bg-[#fff] dark:bg-[#0d1421] dark:text-white w-screen h-[125px] flex flex-col"
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
                  " text-black dark:text-white flex flex-nowrap shrink-0 items-center whitespace-nowrap text-[12px] font-semibold"
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
                      "flex dark:hidden h-[20px] w-[20px] text-[20px]  items-center"
                    }
                  >
                    <button
                      onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                      }}
                    >
                      <BsFillMoonFill />
                    </button>
                  </div>
                  <div
                    className={
                      "hidden dark:h-[20px] dark:w-[20px] dark:text-[20px] dark:flex dark:items-center"
                    }
                  >
                    <button
                      onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                      }}
                    >
                      <BsFillSunFill />
                    </button>
                  </div>
                </button>
                <span className="mx-[12px] w-[1px] h-[22px] bg-[#323546] ">
                  {" "}
                </span>
              </div>
              <div
                className={
                  "flex flex-nowrap relative items-center mr-[24px] text-black dark:text-white whitespace-nowrap text-[12px] "
                }
              >
                <Image width={20} height={20} src={Diamond} alt="" />

                <button className="ml-[6px] mr-[8px] border-[1px] px-[16px] h-[32px] bg-transparent rounded-[8px] font-bold cursor-pointer text-[#3861fb] border-[#3861fb] dark:text-[#6188ff] dark:border-[#6188ff]">
                  Log In
                </button>
                <button className=" px-[16px] h-[32px] bg-[#3861fb] rounded-[8px] font-bold cursor-pointer text-white ">
                  Sign up
                </button>
                <Image
                  className="absolute right-[-24px] top-[-16px] w-[50px] h-[50px] pointer-events-none"
                  src={GiftBox}
                  alt=""
                />
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
