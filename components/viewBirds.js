import { useState } from "react";
import BirdCard from "./birdcard.js";
import { styled } from "styled-components";

export default function ViewBirds({ handleAdd, allBirdsData }) {
  const allHabitats = allBirdsData.flatMap((bird) => bird.habitat.split(", "));
  const uniqueHabitats = [...new Set(allHabitats)].filter(
    (habitat) => habitat !== "forest, grassland, wetland"
  );
  const [selectedHabitat, setSelectedHabitat] = useState(null);

  const handleClick = (habitat) => {
    setSelectedHabitat(habitat);
  };

  const wingspanArr = [];
  allBirdsData.forEach((bird) => wingspanArr.push(bird.wingspan));
  const largestWingspan = Math.max(...wingspanArr);
  const smallestWingspan = Math.min(...wingspanArr);
  
  const [minWingspan, setMinWingspan] = useState(smallestWingspan);
  const filteredBirds = allBirdsData.filter((bird) => {
    const habitatFilter = selectedHabitat
      ? bird.habitat.split(", ").includes(selectedHabitat)
      : allBirdsData;
    const wingspanFilter = bird.wingspan > minWingspan;
    return habitatFilter && wingspanFilter;
  });

  return (
    <>
      <StyledFilter>
        <StyledHabitatButton
          key="all"
          onClick={() => handleClick(null)}
          type="button"
        >
          All
        </StyledHabitatButton>
        {uniqueHabitats.map((habitat) => (
          <StyledHabitatButton
            key={habitat}
            onClick={() => handleClick(habitat)}
            type="button"
          >
            {habitat}
          </StyledHabitatButton>
        ))}
        <StyledWingspanFilter>
          <StyledWingspanLabel>Wingspan</StyledWingspanLabel>
          <input
            type="range"
            step={(largestWingspan - 20 - smallestWingspan) / 8}
            min={0}
            max={largestWingspan}
            onChange={(e) => setMinWingspan(e.target.value)}
          ></input>
        </StyledWingspanFilter>
      </StyledFilter>
      <StyledBirdContainer>
        {filteredBirds.map((bird) => (
          <BirdCard handleAdd={handleAdd} key={bird.id} bird={bird}></BirdCard>
        ))}
      </StyledBirdContainer>
    </>
  );
}

const StyledBirdContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;
const StyledHabitatButton = styled.button`
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

const StyledWingspanFilter = styled.div`
  border-radius: 10px;
  background-color: #a4e2c5;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 2px;
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
  height: 60px;
`;

const StyledWingspanLabel = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
`;

const StyledFilter = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
