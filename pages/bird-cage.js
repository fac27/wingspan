import Head from "next/head";
import BirdCard from "../components/birdcard";

export default function BirdCage() {
  // {birdName, birdImage}

  return (
    <div>
      <Head>
        <title>Bird Cage</title>
      </Head>

      {/* <Header/> */}

      <BirdCard />
      <div>
        <p>Total wingspan</p>
      </div>
    </div>
  );
}
