import Image from "next/image";

export default function BirdProfileCard({ handleAdd }) {
  return (
    <div>
      <h2>Flamingo</h2>
      <Image src="/someBirdImage" alt="bird image" width={123} height={123} />
      <p>
        jsdgjlksjdglksjdlgkjldskgjlksjglkjsdlgjlskjdglksjdglkjslkjgdlkjlksdjglksdjglkjsgdl
      </p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
