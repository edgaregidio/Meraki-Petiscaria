import React from "react";
import { Logo, Container } from "./styles";
import logob from "../../public/logob.png";

export default function Header() {
  return (
    <Container>
      <Logo src={logob} alt="Logo Meraki Petiscaria" width={300} height={145} />
    </Container>
  );
}
