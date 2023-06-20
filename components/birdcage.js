import BirdCard from "./birdCard.js";

export default function BirdCage({ tempStyles, birdcage, setBirdcage }) {
  return (
    <>
      {birdcage.map((bird, index) => {
        return <BirdCard bird={bird} key={key} />;
      })}

      <div>
        <p>Total wingspan</p>
      </div>
    </>
  );
}
