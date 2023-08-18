"use client";
import ApiComponent from "./ApiComponent";
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
      <ApiComponent />
    </div>
  );
};
export default Home;
