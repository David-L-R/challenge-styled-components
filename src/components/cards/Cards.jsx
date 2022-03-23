import { useState } from "react";
import styled from "styled-components";
import { Card } from "../";
import { foods } from "../../data/foods";

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: flex-start;
`;

export const Cards = () => {
  const [loading, setLoading] = useState(false);

  const save = () => {
    setLoading(true);

    setTimeout(setLoading(false), 2000);
  };

  return (
    <CardsContainer>
      {foods.map((food) => (
        <Card>
          <div className='img-container'>
            <img src={food.img} alt={`recipe of ${food.title}`} />
          </div>
          <div className='text'>
            <h2>{food.title}</h2>
            <p>{food.description.slice(0, 200)}...</p>
          </div>
          <div className='tag-container'>
            {food.tags.map((tag) => (
              <div className='tag'>{tag}</div>
            ))}
          </div>
          <div className='card-footer'>
            <button className='secondary'>Recipe</button>
            <button className='primary' onClick={save}>
              {loading ? <Loader /> : "Save"}
            </button>
          </div>
        </Card>
      ))}
    </CardsContainer>
  );
};
