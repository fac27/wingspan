import Image from "next/image";

export default function CagedBird({ handleAdd, bird }) {
  return (
    <div>
      <h2>{bird.name}</h2>
      <Image src={bird.img_path} alt="bird image" width={123} height={123} />
      <p>
        <strong>Quantity: {bird.quantity}</strong>
      </p>
      <button onClick={() => handleAdd(bird)}>Add</button>
    </div>
  );
}
