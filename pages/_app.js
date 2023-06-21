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

  const [birdcage, setBirdcage] = useState([]);
  const props = { ...pageProps, birdcage, setBirdcage, handleAdd };
  return <Component {...props} />;
}
