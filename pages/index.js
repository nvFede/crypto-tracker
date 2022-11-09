import Head from "next/head";
import Image from "next/image";
import Table from "../components/Table";

export default function Home({ prices }) {
  return (
    <>
      <Table latestPrices={prices.data} />

    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env["X-CMC_PRO_API_KEY"] || "",
      },
    }
  );

  const latestPrices = await res.json();

  return {
    props: {
      prices: latestPrices,
    },
  };
};
