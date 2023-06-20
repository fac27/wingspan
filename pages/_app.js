import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const handleAdd = (bird) => {
    setBirdcage((prevCage) => {
      return [...prevCage, bird];
    });
  };
  const [birdcage, setBirdcage] = useState([]);
  const props = { ...pageProps, birdcage, setBirdcage, handleAdd };
  console.log(birdcage);
  return <Component {...props} />;
}
