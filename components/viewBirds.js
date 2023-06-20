import BirdCard from "./birdCard";

export default function ViewBirds({tempStyles}) {
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
