import styled from 'styled-components'
import Image from 'next/image'

export const ListaSauces = styled.ul`
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
`

export const Line2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const LinePrice = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin: 0;
  width: 100%;
  margin: 0;
  padding: 0;

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
`

export const ImageSauces = styled(Image)`
  border-radius: 8px;
`
