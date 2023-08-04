// // useCryptocurrencies.ts
// import { useQuery } from "react-query";

// interface Cryptocurrency {
//   id: number;
//   rank: number;
//   name: string;
//   symbol: string;
//   slug: string;
//   is_active: number;
//   first_historical_data: string;
//   last_historical_data: string;
//   platform: string | null;
// }

// const fetchCryptocurrencies = async (): Promise<Cryptocurrency[]> => {
//   const response = await fetch("https://api.example.com/v1/cryptocurrencies", {
//     headers: {
//       "X-CMC_PRO_API_KEY": "16acb07f-cb1d-4762-8233-243fa74f8f1a",
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   return response.json();
// };

// export const useCryptocurrencies = () => {
//   return useQuery<Cryptocurrency[], Error>(
//     "cryptocurrencies",
//     fetchCryptocurrencies
//   );
// };
