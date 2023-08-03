"use client";

import { useGlobalContext } from "./Context/MainContext";
import Header from "./components/Header";
import ToggleSwitch from "./components/ToggleSwitch";

export default function Home() {
  const { darkTheme, setDarkTheme } = useGlobalContext();
  // const axios = require("axios");

  // let response = null;
  // new Promise(async (resolve, reject) => {
  //   try {
  //     response = await axios.get(
  //       "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  //       {
  //         headers: {
  //           "X-CMC_PRO_API_KEY": "16acb07f-cb1d-4762-8233-243fa74f8f1a",
  //         },
  //       }
  //     );
  //   } catch (ex) {
  //     response = null;
  //     // error
  //     console.log(ex);
  //     reject(ex);
  //   }
  //   if (response) {
  //     // success
  //     const json = response.data;
  //     console.log(json);
  //     resolve(json);
  //   }
  // });
  return (
    <div>
      <Header />
    </div>
  );
}
