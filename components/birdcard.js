import Image from "next/image";
import kestrel from "../public/images/American_Kestrel.png";

export default function BirdCard({ tempStyles }) {
  return (
    <div style={tempStyles}>
      <h2>Flamingo</h2>
      <Image
        // src={allBirdsData.img_path}   -- I assume it would be soemthing like this or just children.im_path?
        src={kestrel}
        alt="bird image"
        width={123}
        height={123}
      />
      <p>Wingspan</p>
      <p>Habitat</p>
      <p></p>
    </div>
  );
}
