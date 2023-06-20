import Head from "next/head";
import Image from "next/image";

export default function BirdProfile() {
  return (
    <>
      <Head>
        <title>Bird Profile</title>
      </Head>

      {/* <Header/> */}

      <div>
        <h2>Flamingo</h2>
        <Image src="/someBirdImage" alt="bird image" width={123} height={123} />
        <p>
          jsdgjlksjdglksjdlgkjldskgjlksjglkjsdlgjlskjdglksjdglkjslkjgdlkjlksdjglksdjglkjsgdl
        </p>
      </div>
    </>
  );
}
