import { useState } from "react";
import GlobalStyle from '../styles/globalstyles';


export default function MyApp({ Component, pageProps }) {
  const handleAdd = () => {
    setBirdcage((prevCage) => {
      return { ...prevCage, bird: prevCage.bird + 1 };
    });
  };
  const [birdcage, setBirdcage] = useState({ bird: 0 });
  const props = { ...pageProps, birdcage, setBirdcage, handleAdd };

  return (
    <>
      <GlobalStyle />
      <Component {...props} />;
    </>
  );
}
