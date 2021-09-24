import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const Line = styled.div`
  background: #ffc107;
  width: 100%;
  height: 2px;
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    color: #ffc107;
    margin-bottom: 0.5rem;
  }
`;
