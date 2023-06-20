import Head from "next/head";
//const { getAllBirds } = require("../lib/birds");
import getAllBirds from "../lib/birds";
console.log(getAllBirds());

/* export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  return {
    props: {
      allBirdsData,
    },
  };
} */

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
