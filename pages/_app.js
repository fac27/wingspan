import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const handleAdd = (bird) => {
    setBirdcage((prevCage) => {
      return prevCage.map((birdInCage) => {
        if (birdInCage.id === bird.id) {
          return [...prevCage, { ...bird, quantity: birdInCage.quantity + 1 }];
        } else {
          return [...prevCage, bird];
        }
      });
    });
  };
  const [birdcage, setBirdcage] = useState([]);
  const props = { ...pageProps, birdcage, setBirdcage, handleAdd };
  console.log(birdcage);
  return <Component {...props} />;
}
