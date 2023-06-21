import { useState } from "react";
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

      </Head>
      <Header />
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData} />
    </>
  );
}
