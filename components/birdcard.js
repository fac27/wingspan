import Image from "next/image";

export default function BirdCard() {

  const tempStyles = {
    'border': '1px solid black',
    'width': '300px'
  }

  return (
    <div style={tempStyles}>
      <h2>Flamingo</h2>
      <Image src="/someBirdImage" alt="bird image" width={123} height={123}/>
    </div>
  );
}
