import Head from "next/head";
import { getAllBirds } from "../lib/birds";
import ViewBirds from "../components/viewBirds";
import Header from "../components/header";
import {totalBirdCount} from '../pages/bird-cage'

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  return {
    props: {
      allBirdsData,
    },
  };
}

export default function Home({ allBirdsData, handleAdd, totalBirdCount }) {
  return (
    <>
      <Head >
        <title>Homepage</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header totalBirdCount={totalBirdCount}/>
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData} />
    </>
  );
}
