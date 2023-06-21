import Head from "next/head";
import Header from "../components/header";
import CagedBird from "../components/cagedbird";

export default function BirdCagePage({ birdcage, setBirdcage, handleAdd }) {
  const handleRemove = (bird) => {
    setBirdcage((prevCage) => {
      return prevCage.map((b) =>
        b.id === bird.id ? { ...b, quantity: b.quantity - 1 } : b
      );
    });
  };
  return (
    <>
      <Head>
        <title>Bird Cage</title>
      </Head>

      <Header />
      {birdcage.map((bird, index) => {
        return (
          <CagedBird
            handleRemove={handleRemove}
            handleAdd={handleAdd}
            bird={bird}
            key={index}
          />
        );
        //return <CagedBird bird={bird} key={bird.id} />;
      })}
      <div>
        <p>Total wingspan</p>
      </div>
    </>
  );
}
