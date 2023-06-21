import Layout from "../components/layout";
import { getAllBirds } from "../lib/birds";
import ViewBirds from "../components/viewBirds";
import Header from "../components/header";
import {totalBirdCount} from '../pages/bird-cage'

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  return {
    props: {
      allBirdsData,
    },
  };
}

export default function Home({ allBirdsData, handleAdd, totalBirdCount }) {
  return (
    <Layout>
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData} />
    </Layout>
  );
}
