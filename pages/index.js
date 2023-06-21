import Head from "next/head";
import { getAllBirds, getAllBirdIds } from "../lib/birds";
import ViewBirds from "../components/viewBirds";
import Header from "../components/header";

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  const test = getAllBirdIds();
  return {
    props: {
      allBirdsData,
      test,
    },
  };
}

export default function Home({ allBirdsData, handleAdd, birdcage }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Test</h1>
      <Header />
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData} />
    </>
  );
}
