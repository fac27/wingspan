import Head from "next/head";
import { getAllBirds } from "../lib/birds";
import ViewBirds from "../components/viewBirds";
import Header from "../components/header";

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  return {
    props: {
      allBirdsData,
    },
  };
}

export default function Home({ allBirdsData, handleAdd }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData} />
    </>
  );
}
