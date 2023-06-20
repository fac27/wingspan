import Image from "next/image";

export default function BirdCard({ handleAdd, bird }) {
  return (
    <div>
      <h2>{bird.name}</h2>
      <Image
        src={bird.img_path}
        alt="bird image"
        width={123}
        height={123}
      ></Image>
      <p>{bird.scientific_name}</p>
      <p>{bird.habitat}</p>
      <p>{bird.wingspan}</p>
      <button onClick={() => handleAdd(bird)}>Add</button>
    </div>
  );
}
