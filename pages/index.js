import Head from "next/head";
import BirdCard from "../components/birdCard";
import ViewBirds from "../components/viewBirds";

export default function Home() {
  
  const tempStyles = {
    border: "1px solid black",
    width: "300px",
  };

  return (
    <>
      <Head>
        <title>Wingspan</title>
      </Head>
      <ViewBirds tempStyles={tempStyles}/>
    </>
  );
}
