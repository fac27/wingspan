import BirdCard from "./birdCard";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  return (
    <>
      {/* <Header/> */}
      <div>
        {allBirdsData.map((bird, index) => 
        <BirdCard handleAdd={handleAdd} key={index} habitat={bird.habitat} scientific_name={bird.scientific_name} wingspan={bird.wingspan} name={bird.name}></BirdCard>
        )}
      </div>
    </>
  );
}

