import Head from "next/head";
import { getAllBirds, getAllBirdIds } from "../lib/birds";
import ViewBirds from "../components/viewBirds";

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  const test = getAllBirdIds();
  return {
    props: {
      allBirdsData,
      test,
    },
  };
}

export default function Home({ allBirdsData, test }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      {console.log(test)}
      <ViewBirds />
    </>
  );
}
