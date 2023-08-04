"use client";
import Header from "./components/Header";

// import { useCryptocurrencies } from "./useCryptocurrencies";
const Home: React.FC = () => {
  // const { data, isLoading, error } = useCryptocurrencies();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div>
      <Header />
    </div>
  );
};
export default Home;
