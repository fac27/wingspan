import BirdCard from "./birdcard";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  return (
    <>
      {/* <Header/> */}
      <div>
        <BirdCard handleAdd={handleAdd} allBirdsData={allBirdsData}></BirdCard>
      </div>
    </>
  );
}
