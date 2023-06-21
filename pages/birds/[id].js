import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { getAllBirdIds, getBirdData } from "../../lib/birds";
import { styled } from "styled-components";

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

export default function Bird({ birdData, handleAdd, birdcage }) {
  const [quant, setQuant] = useState(1);

  const handleQuantPlus = () => {
    setQuant((prevQuant) => prevQuant + 1);
  };
  const handleQuantMinus = () => {
    if (quant <= 1) return;
    setQuant((prevQuant) => prevQuant - 1);
  };
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
        <div>
          <AddRemoveButton onClick={handleQuantMinus}>-</AddRemoveButton>
          {quant}
          <AddRemoveButton onClick={handleQuantPlus}>+</AddRemoveButton>
        </div>
        <button onClick={() => handleAdd(birdData, quant)}>
          Add to Basket
        </button>
      </div>
    </>
  );
}

const AddRemoveButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  padding: 8px;
  text-decoration: none;
  font-size: 24px;
  border-color: white;
  border: solid white;
  color: #967a71;

  &:hover {
    background-color: #e0c9bc;
    color: grey;
    cursor: pointer;
    box-shadow: 2px 5px #967a71;
  }
`;
