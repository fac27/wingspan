import BirdCard from "./birdCard.js";

export default function BirdCage({ tempStyles, birdcage, setBirdcage }) {
  return (
    <>
      <BirdCard tempStyles={tempStyles} />
      <div>
        <p>Total wingspan</p>
      </div>
    </>
  );
}
