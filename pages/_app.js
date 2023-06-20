import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [birdcage, setBirdcage] = useState({ bird: "bird" });
  const props = { ...pageProps, birdcage, setBirdcage };

  return <Component {...props} />;
}
