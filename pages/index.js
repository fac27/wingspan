import Head from "next/head";
import getAllBirds from "../lib/birds";

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  return {
    props: {
      allBirdsData,
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Wingspan</title>
      </Head>
      <p>Hello, Nextjs</p>
    </>
  );
}
