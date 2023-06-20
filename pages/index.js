import Head from "next/head";
import ViewBirds from "../components/viewBirds";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <ViewBirds />
    </>
  );
}
