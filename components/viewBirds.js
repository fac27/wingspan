import BirdCard from "./birdcard.js";
import { styled } from "styled-components";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  const uniqueHabitats = [...new Set(allBirdsData.map((bird) => bird.habitat))];

  return (
    <>
      <form>
        {uniqueHabitats.map((habitat) => (
          <button key={habitat} onclick={handleClick} type="button">
            {habitat}
          </button>
        ))}
      </form>
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
