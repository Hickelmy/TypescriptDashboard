import React from "react";
import { Container, ToggleLabel } from "./styles";

import SwitchToggle from "react-switch";

export const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <SwitchToggle
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log("Mudou")}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);
