import React, { useState } from "react";
import { AppContainer, Footer, Header } from "./App.styled";
import { Button } from "./components/Button";
import { Game } from "./components/Game/Game.component";

const App = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  return (
    <AppContainer>
      <Header>
        <h1>2048</h1>
        <Button onClick={handleRestart}>Restart</Button>
      </Header>
      <Game key={date.toISOString()} />
      <Footer>
        Made by{" "}
        <a href="https://github.com/juansecalvinio/" target="_blank">
          @juansecalvinio
        </a>
      </Footer>
    </AppContainer>
  );
};

export default App;
