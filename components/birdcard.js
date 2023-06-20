import Image from "next/image";

export default function BirdCard({ handleAdd, allBirdsData }) {
  console.log(allBirdsData)
  return (
    <div>
      <h2>Flamingo</h2>
      <Image src="/someBirdImage" alt="bird image" width={123} height={123} />
      <p>Scientific name</p>
      <p>Wingspan</p>
      <p>Habitat</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
