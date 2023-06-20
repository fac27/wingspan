import BirdCard from "./birdCard.js";

export default function BirdCage({tempStyles}) {
  // {birdName, birdImage}
  return (
    <>
      <BirdCard tempStyles={tempStyles}/>
      <div>
        <p>Total wingspan</p>
      </div>
    </>
  );
}
