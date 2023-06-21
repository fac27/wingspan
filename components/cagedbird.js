import Image from "next/image";

export default function CagedBird({ handleAdd, bird, handleRemove }) {
  return (
    <div>
      <h2>{bird.name}</h2>
      <Image src={bird.img_path} alt="bird image" width={123} height={123} />
      <p>Wingspan: {bird.wingspan}</p>
      <p>
        <strong>Quantity: {bird.quantity}</strong>
      </p>
      <button onClick={() => handleRemove(bird)}>-</button>
      <button onClick={() => handleAdd(bird, 1)}>+</button>
    </div>
  );
}
