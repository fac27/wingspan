import { useState } from "react";
import GlobalStyle from "../styles/globalstyles";

export default function MyApp({ Component, pageProps }) {
  const [totalBirdCount, setTotalBirdCount] = useState(0)
  const handleAdd = (bird, quant) => {
    setBirdcage((prevCage) => {
      const birdInCage = prevCage.find((b) => b.id === bird.id);

      if (birdInCage) {
        return prevCage.map((b) =>
          b.id === bird.id ? { ...b, quantity: b.quantity + quant } : b
        );
      } else {
        return [...prevCage, { ...bird, quantity: quant }];
      }
    });
    setTotalBirdCount( () => {
      return birdcage.reduce((total, bird) => {
        return total + bird.quantity;
      }, 1);
  })
    
  };
 

  const [birdcage, setBirdcage] = useState([]);
  const props = { ...pageProps, birdcage, setBirdcage, handleAdd, totalBirdCount };

  return (
    <>
      <GlobalStyle />
      <Component {...props} />;
    </>
  );
}
