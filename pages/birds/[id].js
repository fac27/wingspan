import Head from "next/head";
import Image from "next/image";
import { getAllBirdIds, getBirdData } from "../../lib/birds";

export async function getStaticPaths() {
  const paths = getAllBirdIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const birdData = await getBirdData(params.id);
  return {
    props: {
      birdData,
    },
  };
}

export default function Bird({ birdData }) {
  return (
    <>
      <Head>
        <title>{birdData.scientific_name}</title>
      </Head>

      <div>
        <h2>{birdData.name}</h2>
        <Image src="/someBirdImage" alt="bird image" width={123} height={123} />
        <p>{birdData.scientific_name}</p>
        <p>{birdData.habitat}</p>
        <p>{birdData.location}</p>
        <p>{birdData.nest_type}</p>
        <p>{birdData.trivia}</p>
        <p>{birdData.points}</p>
        <p>{birdData.wingspan}</p>
      </div>
    </>
  );
}
