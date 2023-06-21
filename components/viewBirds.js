import BirdCard from "./birdcard.js";
import { styled } from "styled-components";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  return (
    <>
      {/* <Header/> */}
      <BirdContainer>
        {allBirdsData.map((bird, index) => (
          <BirdCard
            handleAdd={handleAdd}
            key={index}
            habitat={bird.habitat}
            scientific_name={bird.scientific_name}
            wingspan={bird.wingspan}
            name={bird.name}
            img={bird.img_path}
          ></BirdCard>
        ))}
      </BirdContainer>
    </>
  );
}

const BirdContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;
