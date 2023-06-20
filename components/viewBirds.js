import BirdCard from "./birdcard.js";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  return (
    <>
      {/* <Header/> */}
      <div>
        {allBirdsData.map((bird, index) => (
          <BirdCard
            handleAdd={handleAdd}
            key={index}
            habitat={bird.habitat}
            scientific_name={bird.scientific_name}
            wingspan={bird.wingspan}
            name={bird.name}
            img={bird.img_path}
          ></BirdCard>
        ))}
      </div>
    </>
  );
}
