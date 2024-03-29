import Image from "next/image";
import { styled } from "styled-components";
import Link from "next/link";

export default function BirdCard({ handleAdd, handleRemove, bird, birdcage }) {
  return (
    <Card>
      <BirdName>{bird.name}</BirdName>
      <Link href={"/birds/" + bird.id}>
        <Image
          data-testid="view-bird"
          src={bird.img_path}
          alt="bird image"
          width={123}
          height={123}
        ></Image>
      </Link>
      {!birdcage && <p>{bird.scientific_name}</p>}
      {!birdcage && (
        <HabitatCard>
          <HabitatIcon habitat={bird.habitat}>
            <img src="/images/habitat.png"></img>
          </HabitatIcon>
          <HabitatText>{bird.habitat}</HabitatText>
        </HabitatCard>
      )}
      <Wingspan birdcage={birdcage}>Wingspan: {bird.wingspan}cm</Wingspan>
      {birdcage && (
        <p>
          <StyledQuantity>Quantity: {bird.quantity}</StyledQuantity>
        </p>
      )}
      {birdcage && (
        <RemoveButton
          data-testid="remove-button"
          onClick={() => handleRemove(bird)}
        >
          -
        </RemoveButton>
      )}
      <AddButton data-testid="add-button" onClick={() => handleAdd(bird, 1)}>
        +
      </AddButton>
    </Card>
  );
}

const Card = styled.div`
  font-family: "HelveticaNeue-Light";
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
  font-family: "HelveticaNeue-Light";
  font-style: bold;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
  width: 100%;
  padding: 0.5rem;
`;

const Wingspan = styled.p`
  position: ${({ birdcage }) => (!birdcage ? "absolute" : "relative")};
  bottom: 0.5rem;
  color: #967a71;
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

const RemoveButton = styled(AddButton)`
  right: 0;
  left: 20px;
`;

const HabitatIcon = styled.div`
  background: ${(props) =>
    props.habitat === "forest"
      ? "#276547"
      : props.habitat === "grassland"
      ? "#aa624d;"
      : "#5372a0"};
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
  margin-top: 8px;
  width: fit-content;
  padding: 8px 8px;
  border-radius: 4px;
  visibility: hidden;
`;
const HabitatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  & ${HabitatIcon}:hover + ${HabitatText} {
    visibility: visible;
    color: #967a71;
    width: fit-content;
    padding: 8px 8px;
    border-radius: 4px;
  }
`;

const leafIcon = styled.img`
  height: 45px;
  width: 45px;
`;

const StyledQuantity = styled.strong`
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 2px;
`;
