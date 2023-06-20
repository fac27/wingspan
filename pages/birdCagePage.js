import Head from "next/head";
import BirdCage from "../components/birdCage";

export default function BirdCagePage({ birdcage, setBirdcage }) {
  // {birdName, birdImage}

  return (
    <>
      <Head />
      {/* <Header/> */}
      <BirdCage birdcage={birdcage} setBirdcage={setBirdcage} />
    </>
  );
}
