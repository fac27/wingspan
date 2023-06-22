import Layout from "../components/layout";
import BirdCard from "../components/birdcard";
import { styled } from "styled-components";

export default function BirdCagePage({
  birdcage,
  setBirdcage,
  handleAdd,
  totalBirdCount,
}) {
  const handleRemove = (bird) => {
    if (bird.quantity === 1) {
      setBirdcage((prevCage) => {
        return prevCage.filter((b) => b.id !== bird.id);
      });
    }
    setBirdcage((prevCage) => {
      return prevCage.map((b) =>
        b.id === bird.id ? { ...b, quantity: b.quantity - 1 } : b
      );
    });
  };

  function totalWingspan() {
    return birdcage.reduce((total, bird) => {
      return total + bird.wingspan * bird.quantity;
    }, 0);
  }

  const total = totalWingspan();
  return (
    <Layout totalBirdCount={totalBirdCount}>
      {birdcage.map((bird) => {
        return (
          <BirdCard
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            bird={bird}
            key={bird.id}
            birdcage={true}
          />
        );
      })}

      <StyledTotal>
        <p data-testid="wingpsan-total">Total Wingspan: {total}</p>
      </StyledTotal>
    </Layout>
  );
}

const StyledTotal = styled.div`
  margin: 10px;
  padding: 10px;
  width: fit-content;
  background-color: rgba(224, 201, 188, 0.9);
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
`;
