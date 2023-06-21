import { useState, useEffect } from "react";
import GlobalStyle from "../styles/globalstyles";

export default function MyApp({ Component, pageProps }) {
  const [birdcage, setBirdcage] = useState([]);

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
  };

  useEffect(() => {
    const storedCage = JSON.parse(window.localStorage.getItem("birdcage"));
    setBirdcage(storedCage ? storedCage : []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("birdcage", JSON.stringify(birdcage));
  }, [birdcage]);

  const props = { ...pageProps, birdcage, setBirdcage, handleAdd };

  return (
    <>
      <GlobalStyle />
      <Component {...props} />
    </>
  );
}
