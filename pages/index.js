import { useState } from "react";
import Head from "next/head";
import getAllBirds from "../lib/birds";
import ViewBirds from "../components/viewBirds";

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  return {
    props: {
      allBirdsData,
    },
  };
}

export default function Home({ allBirdsData, setBirdcage, birdcage }) {
  const handleAdd = () => {
    setBirdcage({ bird: "bird" });
    console.log({ birdcage, setBirdcage });
  };

  return (
    <>
      <Head>
        <title>Wingspan</title>
      </Head>
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData} />
    </>
  );
}
