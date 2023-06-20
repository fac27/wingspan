import Image from "next/image";

export default function BirdCard({ tempStyles, allBirdsData }) {
  return (
    <div style={tempStyles}>
      <h2>Flamingo</h2>
      <Image
        // src={allBirdsData.img_path}
        src="public/images/American_Kestrel.png"
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
