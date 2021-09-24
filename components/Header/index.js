import React from "react";
import { Logo, Container } from "./styles";
import logob from "../../public/logob.png";

export default function Header() {
  return (
    <Container>
      <Logo src={logob} alt="Logo Meraki Petiscaria" width={200} height={100} />
    </Container>
  );
}
