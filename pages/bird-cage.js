import Head from "next/head";
import Header from "../components/header";
// import CagedBird from "../components/cagedbird";
import BirdCard from "../components/birdcard";

export default function BirdCagePage({ birdcage, setBirdcage, handleAdd }) {
  const handleRemove = (bird) => {
    if (bird.quantity === 1) {
      setBirdcage((prevCage) => {
        return prevCage.filter((b) => b.id !== bird.id);
      });
    }
    setBirdcage((prevCage) => {
      return prevCage.map((b) =>
        b.id === bird.id ? { ...b, quantity: b.quantity - 1 } : b
      );
    });
  };

  function totalWingspan() {
    return birdcage.reduce((total, bird) => {
      return total + bird.wingspan * bird.quantity;
    }, 0);
  }
  const total = totalWingspan();
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
        <p>Total Wingspan: {total}</p>
      </div>
    </>
  );
}
