"use client";

import React, { useEffect, useState } from "react";

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
    async function fetchCoinData() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "16acb07f-cb1d-4762-8233-243fa74f8f1a",
            },
          }
        );

        if (!res.ok)
          throw new Error("something went wrong with fetching coin data");

        const fetchedData = await res.json();

        if (fetchedData.status.error_message)
          throw new Error(`${fetchedData.status.error_message}`);

        setData(fetchedData.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCoinData();
  }, []);

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
