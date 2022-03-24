import { Cards, Button, BootstrapButton } from "./components";
import styled from "styled-components";
import "./App.css";
import { link } from "./link";

function App() {
  const dark = false;

  const SubmitButton = styled.button``;

  const buttonType = "danger";

  const Text = styled.div``;
  const Hero = styled.img``;

  const Flexbox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Card = styled(Flexbox)`
    width: 300px;
    border: 1px solid #333;

    ${Hero} {
      width: 100%;
    }
    ${Text} {
      padding: 20px;
    }
  `;

  const UserCard = styled(Card)`
    background-color: #333;
    color: white;
    border-radius: 20px;
    padding: 10px;
  `;

  return (
    <div className='App'>
      {/* <Button buttonType={buttonType}>hello</Button> */}
      {/* <SubmitButton>world</SubmitButton> */}
      {/* <BootstrapButton buttonType={buttonType}>Hello</BootstrapButton> */}

      <div className='card'>
        <img src={link} alt='something' />
        <div className='text'>
          <h2>Hello world</h2>
          <p>Sit proident ex incididunt enim sint.</p>
        </div>
      </div>

      <Card>
        <Hero src={link} alt='something' />
        <Text>
          <h2>Hello world</h2>
          <p>Sit proident ex incididunt enim sint.</p>
        </Text>
      </Card>

      <UserCard>
        <h2>David</h2>
        <p>
          Irure officia laborum ea nulla. Exercitation consequat Lorem labore ea
          deserunt sit voluptate. Sint incididunt dolore ut Lorem nostrud Lorem.
          Eiusmod quis culpa cupidatat nisi est exercitation consectetur
          incididunt. Minim anim laborum officia culpa duis ad proident
          consectetur adipisicing.
        </p>
      </UserCard>
    </div>
  );
}

export default App;
