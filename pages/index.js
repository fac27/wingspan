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

export default function Home( {allBirdsData}) {

  const [birdcage, setBirdcage] = useState({});
  
  const handleAdd = (bird) => {
    //setBirdcage()
  };
  
  return (
    <>
      <Head>
        <title>Wingspan</title>
      </Head>
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData}/>
    </>
  );
}
