import { useState } from "react";
import Head from "next/head";
import getAllBirds from "../lib/birds";
import ViewBirds from "../components/viewBirds";
import Header from "../components/Header";

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  return {
    props: {
      allBirdsData,
    },
  };
}

export default function Home({ allBirdsData, handleAdd, birdcage }) {
  return (
    <>
      <Head>
        <title>Wingspan</title>
      </Head>
      <Header />
      <p>{birdcage.bird}</p>
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData} />
    </>
  );
}
