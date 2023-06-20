import Image from "next/image";
import kestrel from "../public/images/American_Kestrel.png";

export default function BirdCard({
  handleAdd,
  habitat,
  scientific_name,
  wingspan,
  name,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <Image src="/someBirdImage" alt="bird image" width={123} height={123} />
      <p>{scientific_name}</p>
      <p>{habitat}</p>
      <p>{wingspan}</p>
    </div>
  );
}
