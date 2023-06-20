import Image from "next/image";
import kestrel from "../public/images/American_Kestrel.png";

export default function BirdCard({ handleAdd, allBirdsData }) {
  return (
    <div>
      <h2>Flamingo</h2>
      <Image
        // src={allBirdsData.img_path}   -- I assume it would be soemthing like this or just children.im_path?
        src={kestrel}
        alt="bird image"
        width={123}
        height={123}
      />
      <p>Scientific name</p>
      <p>Wingspan</p>
      <p>Habitat</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
