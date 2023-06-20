import Head from "next/head";
import BirdCage from "../components/birdcage";

export default function BirdCagePage() {
  // {birdName, birdImage}
  return (
    <>
      <Head />
      {/* <Header/> */}
      <BirdCage />
    </>
  );
}
