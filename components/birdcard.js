import Image from "next/image";
import { styled } from "styled-components";

export default function BirdCard({
  handleAdd,
  habitat,
  scientific_name,
  wingspan,
  name,
  img,
}) {
  return (
    <Card>
      <BirdName>{name}</BirdName>
      <Image src={img} alt="bird image" width={123} height={123}></Image>
      <p>{scientific_name}</p>
      <HabitatCard>
        <HabitatIcon>H</HabitatIcon>
        <HabitatText>{habitat}</HabitatText>
      </HabitatCard>
      <Wingspan>{wingspan}</Wingspan>
      <AddButton onClick={handleAdd}>+</AddButton>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  background-color: rgba(224, 201, 188, 0.5);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
`;
const BirdName = styled.h2`
  font-family: "Lobster";
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
  width: 100%;
  padding: 0.5rem;
`;

const Wingspan = styled.p`
  position: absolute;
  bottom: .5rem;
  color:#967a71;
`;

const AddButton = styled.button`
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
const StyledP = styled.p`
  width: 60px; /* adjust as necessary */
  height: 60px; /* adjust as necessary */
  border-radius: 50%; /* this makes it round */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* this makes sure the text doesn't overflow the circle */
  text-align: center;
  background: #276547;
  // opacity: 0;  /* hides the text initially */
  transition: opacity 0.3s; /* adds a transition effect */

  &:hover {
    opacity: 1; /* shows the text on hover */
  }
`;

const HabitatIcon = styled.div`
  background: #276547;
  color: #fff;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 44px;
  border-radius: 50%;
  cursor: pointer;
`;
const HabitatText = styled.p`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  width: fit-content;
  padding: 8px 8px;
  border-radius: 4px;
  visibility: hidden;
`;
const HabitatCard = styled.div`
  margin: 16px;
  & ${HabitatIcon}:hover + ${HabitatText} {
    visibility: visible;
    color: #fff;
    width: fit-content;
    padding: 8px 8px;
    border-radius: 4px;
  }
`;
