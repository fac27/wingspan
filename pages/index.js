import Head from "next/head";
import BirdCard from "../components/birdCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wingspan</title>
      </Head>
      <BirdCard />
    </>
  );
}
