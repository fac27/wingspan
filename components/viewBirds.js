import BirdCard from "./birdcard.js";
import { styled } from "styled-components";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  return (
    <>
      {/* <Header/> */}
      <BirdContainer>
        {allBirdsData.map((bird) => (
          <BirdCard handleAdd={handleAdd} key={bird.id} bird={bird}></BirdCard>
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
