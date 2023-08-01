"use client";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Link from "next/link";

const GlobalStats = () => {
  const stateStyle =
    "flex flex-nowrap items-center justify-start ml-[12px] h-[16px] box-border";
  const primerySpanStyle =
    "inline-block text-[11px] text-[#a1a7bb] font-semibold ";
  const normalDataStyle = "text-[#6188ff] text-[11px]  font-semibold";
  const linkStyle =
    "flex justify-start items-center font-semibold text-[11px] flex-nowrap";
  return (
    <div className=" py-[9px] px-[16px] whitespace-nowrap overflow-x-scroll ">
      <div className="flex flex-nowrap justify-start items-center h-full ">
        <div className={stateStyle}>
          <span className={primerySpanStyle}>Cryptos:</span>
          <Link className={normalDataStyle} href={"/"}>
            &nbsp;1.8M+
          </Link>
        </div>
        <div className={stateStyle}>
          <span className={primerySpanStyle}>Exchanges:</span>
          <Link className={normalDataStyle} href={"/"}>
            &nbsp;652
          </Link>
        </div>
        <div className={stateStyle}>
          <span className={primerySpanStyle}>Market Cap:</span>
          <div className={linkStyle}>
            <Link className={normalDataStyle} href={"/"}>
              &nbsp;$1.16T
            </Link>
            <div className="flex items-center ml-[6px]">
              {/* if it is a positive value: */}
              {/* <div className="text-[#128860]">
              <BiSolidUpArrow />
            </div>
            <span className="text-[#128860] ml-[2px]">17.19%</span> */}

              {/* if it is a negative value: */}
              <div className="text-[#ea3943]">
                {" "}
                <BiSolidDownArrow />
              </div>
              <span className="text-[#ea3943] ml-[2px]">1.72%</span>
            </div>
          </div>
        </div>
        <div className={stateStyle}>
          <span className={primerySpanStyle}>24h Vol:</span>
          <div className={linkStyle}>
            <Link className={normalDataStyle} href={"/"}>
              &nbsp;$31.39B
            </Link>
            <div className="flex items-center ml-[6px]">
              <div className="text-[#128860]">
                <BiSolidUpArrow />
              </div>
              <span className="text-[#128860] ml-[2px]">17.19%</span>
              {/* <div className="text-[#ea3943]">
              <BiSolidDownArrow />
            </div>
            <span className="text-[#ea3943] ml-[2px]">1.72%</span> */}
            </div>
          </div>
        </div>
        <div className={stateStyle}>
          <span className={primerySpanStyle}>Dominence:</span>
          <div className={linkStyle}>
            <Link className={normalDataStyle} href={"/"}>
              &nbsp;BTC: 48.3% ETH: 18.9%
            </Link>
          </div>
        </div>
        <div className={stateStyle}>
          <span className={primerySpanStyle}>ETH Gas:</span>
          <div className={linkStyle}>
            <Link className={normalDataStyle} href={"/"}>
              &nbsp;BTC: 48.3% ETH: 18.9%
            </Link>
          </div>
        </div>
        <div className={stateStyle}>
          <span className={primerySpanStyle}>Fear & Greed:</span>
          <div className={linkStyle}>
            <Link className={normalDataStyle} href={"/"}>
              &nbsp;51/100
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
