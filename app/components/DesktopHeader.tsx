"use client";
import { useTheme } from "next-themes";
import { BiSolidDownArrow } from "react-icons/bi";
import GlobalStats from "./GlobalStats";
import Image from "next/image";
import UsdImage from "../../public/USD.svg";
import Diamond from "../../public/diamond-icon.svg";
import GiftBox from "../../public/signupGift.gif";
import { AiFillPieChart, AiFillStar } from "react-icons/ai";

import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import Link from "next/link";

const DesktopHeader = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={
        "bg-[#fff] dark:bg-[#0d1421] dark:text-white w-screen h-[125px] flex flex-col"
      }
    >
      {/* Top half */}
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
      {/* Buttom half */}
      <div>
        <div className="h-[1px] w-full bg-[#323546]"></div>
        <div className="flex flex-row justify-between px-[24px] h-[71px]">
          {/* left section */}
          <div className="flex flex-row items-center">
            <div className="mr-[16px]">
              <Link href={"/"}>
                <svg
                  width="168"
                  height="29"
                  fill={theme ? "white" : "black"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 168 29"
                >
                  <path d="M28.442 14.445v-.056C28.414 6.466 22.032 0 14.221 0S0 6.466 0 14.445c0 7.98 6.381 14.433 14.221 14.433a13.978 13.978 0 0 0 9.66-3.866 1.309 1.309 0 0 0-1.766-1.933l-.028.028a11.5 11.5 0 0 1-16.572-.755l6.075-9.742v4.508c0 2.154.84 2.855 1.546 3.051.706.196 1.765.054 2.912-1.765l3.333-5.412c.089-.158.192-.308.306-.449v2.745c0 2.015.812 3.639 2.211 4.422a4.071 4.071 0 0 0 4.173-.167c1.616-1.049 2.484-2.886 2.371-5.098Zm-3.696 2.835a1.529 1.529 0 0 1-1.546.111c-.56-.335-.897-1.09-.897-2.126v-3.173c0-1.51-.588-2.603-1.595-2.881-1.709-.516-2.995 1.595-3.472 2.379l-3.015 4.842V10.47c-.028-1.371-.477-2.183-1.317-2.436-.56-.167-1.4-.082-2.211 1.15L3.946 19.989a11.971 11.971 0 0 1-1.371-5.544c0-6.523 5.234-11.814 11.646-11.814 6.412 0 11.646 5.291 11.646 11.814v.057c.067 1.258-.337 2.268-1.12 2.77v.008ZM48.263 9.518a1.407 1.407 0 0 1 .645 1.092 1.24 1.24 0 0 1-1.204 1.232 2.062 2.062 0 0 1-.449-.085 4.61 4.61 0 0 0-2.716-.922c-2.379 0-4.002 1.93-4.002 4.337s1.652 4.312 4.002 4.312a4.34 4.34 0 0 0 3.023-1.232c.206-.145.45-.223.701-.224a1.134 1.134 0 0 1 .99 1.709c-.097.17-.235.315-.402.42a6.647 6.647 0 1 1-4.283-11.758c1.318-.02 2.61.37 3.695 1.119ZM54.925 12.309a4.745 4.745 0 0 0-4.765 4.71 4.82 4.82 0 0 0 4.76 4.79c2.464 0 4.564-2.212 4.564-4.79 0-2.576-2.067-4.71-4.559-4.71Zm-.028 7.167c-1.175 0-2.155-1.064-2.155-2.436 0-1.427.98-2.296 2.155-2.296 1.093 0 2.015.897 2.015 2.296 0 1.4-.922 2.444-2.015 2.444v-.008ZM61.056 20.352v-6.608a1.29 1.29 0 0 1 1.289-1.314 1.306 1.306 0 0 1 1.289 1.314v6.608a1.306 1.306 0 0 1-1.289 1.315 1.328 1.328 0 0 1-1.289-1.315ZM60.86 9.938a1.505 1.505 0 0 1 1.485-1.547 1.528 1.528 0 0 1 1.51 1.547 1.497 1.497 0 0 1-2.994 0ZM68.559 16.77v3.582a1.289 1.289 0 1 1-2.578 0v-6.915a.994.994 0 1 1 1.988 0 3.738 3.738 0 0 1 2.835-1.12c2.577 0 3.724 1.932 3.724 4.144v3.891a1.289 1.289 0 1 1-2.578 0V16.77c0-1.121-.139-2.062-1.763-2.062-1.146 0-1.623.951-1.623 2.062h-.005ZM82.865 18.141a.835.835 0 0 1-.673-.338l-2.995-3.247v5.796a1.289 1.289 0 1 1-2.577 0V8.873a.546.546 0 0 1 .477-.335.9.9 0 0 1 .56.335l4.788 5.376a.624.624 0 0 0 .42.258.701.701 0 0 0 .42-.258l4.786-5.376a.843.843 0 0 1 .559-.335.49.49 0 0 1 .477.335v11.48a1.29 1.29 0 0 1-1.289 1.314 1.307 1.307 0 0 1-1.288-1.315v-5.796l-2.998 3.247a1.031 1.031 0 0 1-.67.338h.003ZM107.08 14.698h-.281c-1.623.082-1.93 1.008-1.93 2.062v3.582a1.29 1.29 0 0 1-1.289 1.289 1.29 1.29 0 0 1-1.288-1.29v-6.903a.997.997 0 0 1 .995-.995.996.996 0 0 1 .994.995c.951-.897 1.735-1.093 2.518-1.122h.258a1.207 1.207 0 0 1 1.175 1.204 1.18 1.18 0 0 1-1.147 1.178h-.005ZM117.018 19.736c.118.185.186.397.196.616a1.346 1.346 0 0 1-1.289 1.289c-.446 0-.84-.338-1.147-.73l-2.966-3.448v2.86a1.288 1.288 0 0 1-2.577 0V9.828a1.287 1.287 0 0 1 2.199-.911c.242.241.378.57.378.91v6.55l2.966-3.274c.307-.337.673-.7 1.119-.7a1.289 1.289 0 0 1 1.232 1.26 1.09 1.09 0 0 1-.168.587l-2.35 2.577 2.407 2.913v-.003ZM132.584 21.78h-.701c-1.959 0-3.108-.869-3.108-3.92v-3.162h-.67a1.19 1.19 0 1 1 0-2.382h.66V9.881a1.282 1.282 0 0 1 .789-1.214c.158-.066.328-.1.499-.1a1.311 1.311 0 0 1 1.289 1.314v2.428h1.062a1.185 1.185 0 0 1 1.149 1.203 1.222 1.222 0 0 1-1.149 1.178h-1.062v2.66c0 1.763.082 2.126.866 2.126h.366a1.152 1.152 0 0 1 1.147 1.15 1.174 1.174 0 0 1-1.147 1.147l.01.007ZM145.04 9.518a1.41 1.41 0 0 1 .644 1.092 1.239 1.239 0 0 1-1.204 1.232 2.135 2.135 0 0 1-.448-.085 4.597 4.597 0 0 0-2.714-.922c-2.381 0-4.005 1.93-4.005 4.337s1.652 4.312 4.005 4.312a4.34 4.34 0 0 0 3.023-1.232c.205-.144.449-.222.699-.224a1.143 1.143 0 0 1 .816.332 1.134 1.134 0 0 1 .176 1.378 1.184 1.184 0 0 1-.405.418 6.639 6.639 0 0 1-5.978 1.3 6.642 6.642 0 0 1-4.853-7.268 6.642 6.642 0 0 1 6.548-5.789 6.27 6.27 0 0 1 3.696 1.119ZM98.99 12.402a.982.982 0 0 0-.982 1.007l-.054.31a4.026 4.026 0 0 0-2.997-1.428c-2.518 0-4.337 2.126-4.337 4.7 0 2.575 1.79 4.789 4.198 4.789 1.008 0 2.603-.449 3.108-1.428l.057.307a.964.964 0 0 0 1.007.982 1.006 1.006 0 0 0 1.008-1.008v-7.216a1.03 1.03 0 0 0-1.008-1.015Zm-3.752 7.082c-1.147 0-2.044-1.09-2.044-2.436 0-1.345.923-2.32 2.044-2.32 1.12 0 2.129.923 2.129 2.32 0 1.397-.982 2.436-2.13 2.436ZM126.425 16.824c-.057-2.884-1.933-4.508-4.423-4.508-3.092 0-4.397 2.24-4.397 4.817 0 3.276 2.158 4.675 4.761 4.675.979 0 2.015-.141 2.798-.729a1.135 1.135 0 0 0 .56-.923 1.057 1.057 0 0 0-1.031-1.064c-.237.002-.469.07-.67.196a4.173 4.173 0 0 1-1.681.335c-.644 0-2.128-.258-2.128-1.791h5.2a1.031 1.031 0 0 0 1.011-1.008Zm-6.217-.65c0-1.09 1.15-1.453 1.848-1.453.699 0 1.848.363 1.876 1.453h-3.724ZM155.31 12.402a.984.984 0 0 0-.703.296.976.976 0 0 0-.277.711l-.056.31a4.02 4.02 0 0 0-2.995-1.428c-2.52 0-4.34 2.126-4.34 4.7 0 2.575 1.804 4.789 4.198 4.789 1.008 0 2.606-.449 3.108-1.428l.057.307a.974.974 0 0 0 .292.708.965.965 0 0 0 .716.274 1.01 1.01 0 0 0 .932-.622c.05-.122.076-.253.076-.386v-7.216a1.032 1.032 0 0 0-1.008-1.015Zm-3.753 7.082c-1.118 0-2.043-1.09-2.043-2.436 0-1.345.897-2.32 2.043-2.32 1.147 0 2.129.923 2.129 2.32 0 1.397-.974 2.436-2.123 2.436h-.006ZM163.657 12.309a4.14 4.14 0 0 0-3.023 1.232c0-.642-.42-1.119-.979-1.119a1.007 1.007 0 0 0-1.01 1.008v10.863a1.291 1.291 0 0 0 1.288 1.288 1.29 1.29 0 0 0 1.289-1.288v-3.268c.698.53 1.819.755 2.577.773 2.436 0 4.201-2.211 4.201-4.788 0-2.578-1.85-4.701-4.343-4.701Zm-.309 7.167c-1.147 0-2.126-1.03-2.126-2.435s.979-2.32 2.126-2.32c1.147 0 2.044.923 2.044 2.32 0 1.352-.894 2.443-2.044 2.443v-.008Z"></path>
                </svg>
              </Link>
            </div>
            <div className="flex flex-row items-center pl-[16px]">
              <div className="px-[16px] py-[24px] font-semibold">
                <Link className="h-[23px]" href={"/"}>
                  <span className=" text-[14px] hover:text-[#6188ff] transition-all">
                    Cryptocurrencies
                  </span>
                </Link>
              </div>
              <div>
                <div className="px-[16px] py-[24px] font-semibold">
                  <Link className="h-[23px]" href={"/"}>
                    <span className=" text-[14px] hover:text-[#6188ff] transition-all">
                      Exchanges
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                <div className="px-[16px] py-[24px] font-semibold">
                  <Link className="h-[23px]" href={"/"}>
                    <span className=" text-[14px] hover:text-[#6188ff] transition-all">
                      Community
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                <div className="px-[16px] py-[24px] font-semibold">
                  <Link className="h-[23px]" href={"/"}>
                    <span className=" text-[14px] hover:text-[#6188ff] transition-all">
                      Products
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                <div className="px-[16px] py-[24px] font-semibold">
                  <Link className="h-[23px]" href={"/"}>
                    <span className=" text-[14px] hover:text-[#6188ff] transition-all">
                      Learn
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Right section */}
          <div className="flex">
            <div className="flex items-center flex-wrap ">
              <div className="flex items-center px-[8px] h-[36px] rounded-[8px] hover:bg-[#222531] cursor-pointer transition-all">
                <div className="text-[#646b80] text-[19px]">
                  <AiFillStar />
                </div>
                <span className="ml-[4px] text-[14px]">Watchlist</span>
              </div>
              <div className="flex items-center px-[8px] h-[36px] rounded-[8px] hover:bg-[#222531] cursor-pointer transition-all">
                <div className="text-[#646b80] text-[19px]">
                  <AiFillPieChart />
                </div>
                <span className="ml-[4px] text-[14px]">Portfolio</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center cursor-pointer ml-[8px] p-[8px] rounded-[8px] dark:bg-[#323546] bg-[#eff2f5] dark:text-[#646b80] text-[#a6b0c3]">
                <div className="text-[16px]">
                  <BsSearch />
                </div>
                <div className="ml-[4px] w-[200px] flex flex-nowrap font-semibold text-[12px] text-ellipsis overflow-hidden whitespace-nowrap">
                  Search
                </div>
                <div className="h-[20px] w-[20px] rounded-[4px] text-[14px] text-center leading-[19px] dark:bg-[#646b80] bg-[#a6b0c3] text-white">
                  /
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#323546]"></div>
      </div>
    </div>
  );
};

export default DesktopHeader;
