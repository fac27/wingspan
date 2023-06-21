import Layout from "../components/layout";
import { getAllBirds } from "../lib/birds";
import ViewBirds from "../components/viewBirds";

export async function getStaticProps() {
  const allBirdsData = getAllBirds();
  return {
    props: {
      allBirdsData,
    },
  };
}

export default function Home({ allBirdsData, handleAdd }) {
  return (
    <Layout>
      <ViewBirds handleAdd={handleAdd} allBirdsData={allBirdsData} />
    </Layout>
  );
}
