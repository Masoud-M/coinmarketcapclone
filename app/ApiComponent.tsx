"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Cryptocurrency {
  id: number;
  rank: number;
  name: string;
  symbol: string;
  slug: string;
  is_active: number;
  first_historical_data: string;
  last_historical_data: string;
  platform: any; // You can change 'any' to a more specific type if 'platform' has a defined structure.
}

const ApiComponent: React.FC = () => {
  const [data, setData] = useState<Cryptocurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Cryptocurrency[]>(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "16acb07f-cb1d-4762-8233-243fa74f8f1a",
            },
          }
        );
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (ex) {
        setError(ex.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, on the client-side

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Use the data in your component
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default ApiComponent;

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface CoinData {
//   id: number;
//   name: string;
//   // Add other properties based on the API response
// }

// const ApiComponent: React.FC = () => {
//   const [data, setData] = useState<CoinData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get<CoinData[]>(
//           "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
//           {
//             headers: {
//               "X-CMC_PRO_API_KEY": "16acb07f-cb1d-4762-8233-243fa74f8f1a",
//             },
//           }
//         );
//         setData(response.data);
//         setLoading(false);
//       } catch (ex) {
//         setError(ex.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Use the data in your component
//   return (
//     <div>
//       {data.map((item) => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//     </div>
//   );
// };

// export default ApiComponent;
