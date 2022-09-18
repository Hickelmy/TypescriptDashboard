import styled from "styled-components";

export const Grid = styled.div`
  display: Grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.secondary};

  /**
  *MH = MainHeader
  *AS = Aside
  *CT = content

  */
`;
