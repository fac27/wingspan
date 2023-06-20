import BirdCard from "./birdcard.js";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  return (
    <>
      {/* <Header/> */}
      <div>
        {allBirdsData.map((bird) => (
          <BirdCard handleAdd={handleAdd} key={bird.id} bird={bird}></BirdCard>
        ))}
      </div>
    </>
  );
}
