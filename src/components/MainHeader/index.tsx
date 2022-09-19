import React, { useMemo } from "react";
import { Toggle } from "../../components/Toggle";
import { Container, Welcome, UserName, Profile } from "./styles";
import emojis from "../../utils/emojis";
export const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <>
      <Container>
        <Toggle />
        <Profile>
          <Welcome>Ola, {emoji}</Welcome>
          <UserName>Player</UserName>
        </Profile>
      </Container>
    </>
  );
};
