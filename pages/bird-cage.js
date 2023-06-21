import Head from "next/head";
import Header from "../components/header";
// import CagedBird from "../components/cagedbird";
import BirdCard from "../components/birdcard";

export default function BirdCagePage({ birdcage, handleAdd }) {
  return (
    <>
      <Head>
        <title>Bird Cage</title>
      </Head>

      <Header />
      {birdcage.map((bird) => {
        return (
          <BirdCard
            handleAdd={handleAdd}
            bird={bird}
            key={bird.id}
            birdcage={true}
          />
        );
      })}
      <div>
        <p>Total wingspan</p>
      </div>
    </>
  );
}
