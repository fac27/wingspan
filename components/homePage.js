import BirdCard from "./birdCard";
import Head from 'next/head';

export default function HomePage() { // {birdName, birdImage}

  return (
    <>
    <Head/>
    {/* // <Header/> */}
    <BirdCard></BirdCard>
    </>

  )

}