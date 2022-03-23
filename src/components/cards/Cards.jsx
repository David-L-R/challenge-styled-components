import styled from "styled-components";

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: flex-start;
`;

const Card = styled.div`
  margin: 30px 30px;
  width: 250px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
`;

export const Cards = () => {
  return (
    <CardsContainer>
      <Card>card1</Card>
      <Card>card2</Card>
      <Card>card3</Card>
    </CardsContainer>
  );
};
