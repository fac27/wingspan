import BirdCard from "./birdCard";

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
