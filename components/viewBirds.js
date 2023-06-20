import BirdCard from "./birdcard";

export default function ViewBirds({ tempStyles }) {
  // {birdName, birdImage}

  return (
    <>
      {/* <Header/> */}
      <div>
        <BirdCard tempStyles={tempStyles}></BirdCard>
        <BirdCard></BirdCard>
        <BirdCard></BirdCard>
        <BirdCard></BirdCard>
      </div>
    </>
  );
}
