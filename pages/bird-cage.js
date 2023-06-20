import Head from "next/head";
import Header from "../components/header";
import CagedBird from "../components/cagedbird";

export default function BirdCagePage({ birdcage, handleAdd }) {
  return (
    <>
      <Head>
        <title>Bird Cage</title>
      </Head>

      <Header />
      {birdcage.map((bird) => {
        return <CagedBird handleAdd={handleAdd} bird={bird} key={bird.id} />;
        //return <CagedBird bird={bird} key={bird.id} />;
      })}
      <div>
        <p>Total wingspan</p>
      </div>
    </>
  );
}
