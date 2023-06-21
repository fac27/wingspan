import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const handleAdd = (bird) => {
    setBirdcage((prevCage) => {
      const birdInCage = prevCage.find((b) => b.id === bird.id);

      if (birdInCage) {
        return prevCage.map((b) =>
          b.id === bird.id ? { ...b, quantity: b.quantity + 1 } : b
        );
      } else {
        return [...prevCage, { ...bird, quantity: 1 }];
      }
    });
  };

  const handleClick = ({ pageProps }) => {
    const uniqueHabitats = [
      ...new Set(allBirdsData.map((bird) => bird.habitat)),
    ];

    setSelectedHabitat(habitat);
  };

  const [selectedHabitat, setSelectedHabitat] = useState(null);
  const [birdcage, setBirdcage] = useState([]);
  const props = { ...pageProps, birdcage, setBirdcage, handleAdd, handleClick };
  console.log(birdcage);
  return <Component {...props} />;
}
