import { useState } from "react";
import BirdCard from "./birdcard.js";
import { styled } from "styled-components";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  const uniqueHabitats = [...new Set(allBirdsData.map((bird) => bird.habitat))];
  const [selectedHabitat, setSelectedHabitat] = useState(null);

  const handleClick = (habitat) => {
    setSelectedHabitat(habitat);
  };

  const filteredBirds = selectedHabitat
    ? allBirdsData.filter((bird) => bird.habitat === selectedHabitat)
    : allBirdsData;

  return (
    <>
      <form>
        {uniqueHabitats.map((habitat) => (
          <button
            key={habitat}
            onClick={() => handleClick(habitat)}
            type="button"
          >
            {habitat}
          </button>
        ))}
      </form>
      <BirdContainer>
        {filteredBirds.map((bird) => (
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
