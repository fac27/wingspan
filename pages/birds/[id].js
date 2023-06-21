import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { getAllBirdIds, getBirdData } from "../../lib/birds";
import Header from "../../components/header";
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
      <Header />
      <Card>
        <h2>{birdData.name}</h2>
        <Image
          src={birdData.img_path}
          alt="bird image"
          width={123}
          height={123}
        />
        <p>{birdData.scientific_name}</p>
        <p>Habitat: {birdData.habitat}</p>
        <p>Location: {birdData.location}</p>
        <p>Nest type: {birdData.nest_type}</p>
        <p>{birdData.trivia}</p>
        <p>Bird points: {birdData.points}</p>
        <p>Wingspan: {birdData.wingspan}</p>
        <div>
          <AddRemoveButton onClick={handleQuantMinus}>-</AddRemoveButton>
          {quant}
          <AddRemoveButton onClick={handleQuantPlus}>+</AddRemoveButton>
        </div>
        <AddToBasket onClick={() => handleAdd(birdData, quant)}>
          Add to Basket
        </AddToBasket>
      </Card>
    </>
  );
}

const AddRemoveButton = styled.button`
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
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    background-color: #e0c9bc;
    color: grey;
    cursor: pointer;
    box-shadow: 2px 5px #967a71;
  }
`;

const AddToBasket = styled.button`
  border-radius: 50%;
  font-size: 14px;
  border-color: white;
  border: solid white;
  color: #967a71;
  margin-top: 5px;

  &:hover {
    background-color: #e0c9bc;
    color: grey;
    cursor: pointer;
    box-shadow: 2px 5px #967a71;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 10px;
  padding: 10px;
  background-color: rgba(224, 201, 188, 0.5);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
`;
