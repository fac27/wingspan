import BirdProfileCard from "../components/birdProfileCard";

export default function BirdProfilePage({ handleAdd }) {
  return (
    <>
      {/* <Header/> */}
      <BirdProfileCard handleAdd={handleAdd} />
    </>
  );
}
