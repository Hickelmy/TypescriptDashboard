import styled from "styled-components";

export const Grid = styled.div`
  display: Grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;

  /**
  *MH = MainHeader
  *AS = Aside
  *CT = content

  */
`;
