import react from "react";
import {
  Container,
  MenuItemLink,
  Header,
  LogImg,
  MenuContainer,
  Title,
} from "./styles";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";
import logoImg from "../../assets/SVG/faceB.svg";
export const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo" />
        <Title>DEVBOOK</Title>
        <h3>²</h3>
      </Header>

      <MenuContainer>
        <MenuItemLink>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink>
          <MdArrowUpward />
          Entrada
        </MenuItemLink>
        <MenuItemLink>
          <MdArrowDownward />
          Saida
        </MenuItemLink>

        <MenuItemLink>
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};
