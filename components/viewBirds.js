import { useState } from "react";
import BirdCard from "./birdcard.js";
import { styled } from "styled-components";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  const allHabitats = allBirdsData.flatMap((bird) => bird.habitat.split(", "));
  const uniqueHabitats = [...new Set(allHabitats)].filter(habitat => habitat !== 'forest, grassland, wetland');
  const [selectedHabitat, setSelectedHabitat] = useState(null);

  const handleClick = (habitat) => {
    setSelectedHabitat(habitat);
  };

  const filteredBirds = selectedHabitat
  ? allBirdsData.filter((bird) => bird.habitat.split(', ').includes(selectedHabitat))
  : allBirdsData;

  return (
    <>
      <Filter>
        <HabitatButton
          key="all"
          onClick={() => handleClick(null)}
          type="button"
        >
          All
        </HabitatButton>
        {uniqueHabitats.map((habitat) => (
          <HabitatButton
            key={habitat}
            onClick={() => handleClick(habitat)}
            type="button"
          >
            {habitat}
          </HabitatButton>
        ))}
      </Filter>
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
const HabitatButton = styled.button`
  border-radius: 10px;
  background-color: #a4e2c5;
  text-decoration: none;
  border-color: white;
  padding: 10px;
  border-color: white;
  border: solid white;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 2px;
  margin-left: 10px;

  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px #967a71;
  }
`;

const Filter = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
