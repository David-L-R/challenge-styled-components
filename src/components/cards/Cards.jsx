import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Loader } from "../";
import { foods } from "../../data/foods";

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: flex-start;
`;

export const Cards = () => {
  const [loading, setLoading] = useState({});
  const [saved, setSaved] = useState({});

  const save = (id) => {
    setLoading({
      ...loading,
      [id]: false,
    });
    setSaved({
      ...saved,
      [id]: true,
    });
  };

  const handleSave = (id) => {
    setLoading({
      ...loading,
      [id]: true,
    });

    const passId = () => {
      save(id);
    };

    setTimeout(passId, 5000);
  };

  useEffect(() => {
    const foodState = {};
    foods.forEach((food) => {
      foodState[food.id] = false;
    });

    setSaved({ ...foodState });
    setLoading({ ...foodState });
  }, []);

  return (
    <CardsContainer>
      {foods.map((food) => (
        <Card key={food.id}>
          <div className='img-container'>
            <img src={food.img} alt={`recipe of ${food.title}`} />
          </div>
          <div className='text'>
            <h2>{food.title}</h2>
            <p>{food.description.slice(0, 200)}...</p>
          </div>
          <div className='tag-container'>
            {food.tags.map((tag) => (
              <div className='tag' key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className='card-footer'>
            <button className='secondary'>Recipe</button>
            {!saved[food.id] ? (
              <button className='primary' onClick={() => handleSave(food.id)}>
                {loading[food.id] ? <Loader /> : "Save"}
              </button>
            ) : (
              <div className='alert-success'>SAVED ✓</div>
            )}
          </div>
        </Card>
      ))}
    </CardsContainer>
  );
};
