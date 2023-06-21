import { useState } from "react";
import BirdCard from "./birdcard.js";
import { styled } from "styled-components";

export default function ViewBirds({ handleAdd, allBirdsData }) {
/////////////////////////////////HABITAT
  const allHabitats = allBirdsData.flatMap((bird) => bird.habitat.split(", "));
  const uniqueHabitats = [...new Set(allHabitats)].filter(
    (habitat) => habitat !== "forest, grassland, wetland"
  );
  const [selectedHabitat, setSelectedHabitat] = useState(null);

  const handleClick = (habitat) => {
    setSelectedHabitat(habitat);
  };

///////////////////////////////WINGSPAN    
  const wingspanArr = [];
  allBirdsData.forEach((bird) => wingspanArr.push(bird.wingspan));
  const largestWingspan = Math.max(...wingspanArr);
  const smallestWingspan = Math.min(...wingspanArr);

  const [minWingspan, setMinWingspan] = useState(smallestWingspan);
  const updateMinWingspan = (e) => {
    return setMinWingspan(e.target.value);
  }

////////////////////////////APPLY FILTERS
  const filteredBirds = allBirdsData.filter((bird) => {
    const habitatFilter = selectedHabitat
    ?  bird.habitat.split(", ").includes(selectedHabitat)
    : allBirdsData;
    const wingspanFilter = bird.wingspan > minWingspan;
    return habitatFilter && wingspanFilter;
  });


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
        <WingspanFilter>
          <p>Wingspan</p>
          <input type="range" step={((largestWingspan - 20) - smallestWingspan) / 8} min={0} max={largestWingspan} onChange={updateMinWingspan}></input>
        </WingspanFilter>
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

const WingspanFilter = styled.div`
border-radius: 10px;
background-color: #a4e2c5;
font-family: "Bebas Neue", sans-serif;
letter-spacing: 2px;
width:150px
padding: 10px;
text-align: center;
`;

const Filter = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
