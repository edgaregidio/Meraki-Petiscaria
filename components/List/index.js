import React from 'react'
import logob from '../../public/logob.png';

import {
  Container,
  Line,
  TitleContent,

} from './styles'

export default function index({title}) {
  return (
    <Container>
      <TitleContent>
        <h1>{title}</h1>
        <Line />
      </TitleContent>
    </Container>
  )
}
