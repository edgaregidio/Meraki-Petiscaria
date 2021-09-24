import styled from "styled-components";
import Image from "next/image";

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: c;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
  margin: 0;
  margin-bottom: 3rem;

  h1 {
    color: #ffc107;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    font-weight: 200;
    color: #fff;
    margin: 0;
  }
`;

export const Line2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const LinePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */

  h4 {
    color: #fff;
    font-size: 1.4rem;
    margin-right: 0.5rem;
    margin-top: 2.6rem;
    font-weight: 500;
  }
  h3 {
    color: #ffc107;
    font-size: 2.2rem;
  }
`;

export const Circle = styled.div`
  border: 2px solid #ffc107;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  align-self: center;
  padding: 1rem;
  justify-content: center;

  h1 {
    font-size: 0.9rem;
    color: #fff;
    text-transform: lowercase;
  }
`;

export const CardPhoto = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

export const ImageProduct = styled(Image)``;
