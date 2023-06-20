import Head from "next/head";
import Header from "../components/header";
import BirdCard from "../components/birdcard";

export default function BirdCagePage({ birdcage, setBirdcage }) {
  // {birdName, birdImage}

  return (
    <>
      <Head>
        <title>Bird Cage</title>
      </Head>

      <Header />
      {birdcage.map((bird) => {
        return <BirdCard bird={bird} key={index} />;
      })}
      <div>
        <p>Total wingspan</p>
      </div>
    </>
  );
}
