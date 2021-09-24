import React from 'react'
import logob from '../../public/logob.png'
import Image from 'next/dist/client/image'
import {
  ProductList,
  Line2,
  LinePrice,
  Circle,
  // ImageProduct
} from './styles'

export default function Products() {

  const data = [
    {
      id: 1,
      title: 'Batata Frita',
      descripition: '',
      price: '27,00',
      img: require('../../public/logob.png'),
      details: '500g',
    },
    {
      id: 2,
      title: 'Batata Cheddar e Bacon 500g',
      descripition: '',
      price: '32,00',
      img: '',
      details: '500g',
    },
    {
      id: 3,
      title: 'Bolinho de costela suina',
      descripition: 'Bolinho de costela suina com Barbecue',
      price: '36,00',
      img: require('../../public/logob.png'),
      details: '10ud',
    },
    {
      id: 4,
      title: 'Bolinho de Tilápia',
      descripition: 'Recheado com queijo e alcaparras.',
      price: '38,00',
      img: '',
      details: '',
    },
    {
      id: 5,
      title: 'Bolinho de Mandioca',
      descripition: 'Bolinho de mandioca com carne seca.',
      price: '35,00',
      img: '',
      details: '10ud',
    },
    {
      id: 6,
      title: 'Disco de Costela',
      descripition: 'Com cheddar e bacon.',
      price: '38,00',
      img: '',
      details: '10ud',
    },
    {
      id: 7,
      title: 'Disco de Carne',
      descripition: 'Disco de carne recheado com queijo.',
      price: '37,00',
      img: '',
      details: '10ud',
    },
    {
      id: 8,
      title: 'Frango a Kiev',
      descripition: 'Recheado com provolone.',
      price: '48,00',
      img: '',
      details: '600g',
    },
    {
      id: 9,
      title: 'Isca de franco Empanada',
      descripition: '',
      price: '38,00',
      img: '',
      details: '10ud',
    },
    {
      id: 10,
      title: 'Palitinho Mineiro',
      descripition: 'Provolone empanado.',
      price: '38,00',
      img: '',
      details: '10ud',
    },
    {
      id: 11,
      title: 'Pastel de carne',
      descripition: 'Recheado com queijo.',
      price: '32,00',
      img: '',
      details: '10ud',
    },
    {
      id: 12,
      title: '',
      descripition: '',
      price: '35,00',
      img: '',
      details: '10ud',
    },

  ]
  console.log(data.img)

  return (
    <div>
      {
        data.map(products =>
          <ProductList key={products.id}>
            <h1>{products.title}</h1>
            <p>{products.descripition}</p>
            <Line2>
              <LinePrice>
                <h4>R$</h4>
                <h3>{products.price}</h3>
              </LinePrice>
              <Circle>
                <h1>{products.details}</h1>
              </Circle>
            </Line2>
            <Image
            src={products.img}
            alt="Imagem do produto"
            layout="responsive"
            width={150}
            height={70} />
          </ProductList>
        )
      }

    </div>
  )
}
