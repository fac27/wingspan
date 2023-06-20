import Image from "next/image";
import kestrel from "../public/images/American_Kestrel.png";

export default function BirdCard({
  handleAdd,
  habitat,
  scientific_name,
  wingspan,
  name,
  img
}) {
  console.log({img})
  return (
    <div>
      <h2>{name}</h2>
      <Image src={img} alt="bird image" width={123} height={123}></Image>
      <p>{scientific_name}</p>
      <p>{habitat}</p>
      <p>{wingspan}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
