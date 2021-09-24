import React from "react";
import {
  ProductList,
  Line2,
  LinePrice,
  Circle,
  ImageProduct,
  CardPhoto,
} from "./styles";

export default function product() {
  const data = [
    {
      id: 1,
      title: "Batata Frita",
      descripition: "",
      price: "28,00",
      img: "/petiscos/batatafrita.jpeg",
      details: "500g",
    },
    {
      id: 2,
      title: "Batata Cheddar e Bacon 500g",
      descripition: "",
      price: "35,00",
      img: "/petiscos/batatacheddar.jpeg",
      details: "500g",
    },
    {
      id: 3,
      title: "Bolinho de costela suina",
      descripition: "Bolinho de costela suina com Barbecue",
      price: "36,00",
      img: "/petiscos/bolinhodecostela.jpeg",
      details: "400g",
    },
    {
      id: 4,
      title: "Bolinho de Tilápia",
      descripition: "Recheado com queijo e alcaparras.",
      price: "38,00",
      img: "/petiscos/bolinhodetilapia.jpeg",
      details: "350g",
    },
    {
      id: 5,
      title: "Bolinho de Mandioca",
      descripition: "Bolinho de mandioca com carne seca.",
      price: "36,00",
      img: "/petiscos/bolinhodetilapia.jpeg",
      details: "400g",
    },
    {
      id: 6,
      title: "Disco de Costela",
      descripition: "Com cheddar e bacon.",
      price: "38,00",
      img: "/petiscos/discodecostela.jpeg",
      details: "400g",
    },
    {
      id: 7,
      title: "Disco de Carne",
      descripition: "Disco de carne recheado com queijo.",
      price: "38,00",
      img: "/petiscos/discodecarne.jpeg",
      details: "400g",
    },
    {
      id: 8,
      title: "Frango a Kiev",
      descripition: "Recheado com provolone.",
      price: "48,00",
      img: "/petiscos/frangoakiev.jpeg",
      details: "600g",
    },
    {
      id: 9,
      title: "Isca de franco Empanada",
      descripition: "",
      price: "38,00",
      img: "/petiscos/iscadefrangoempanado.jpeg",
      details: "450g",
    },
    {
      id: 10,
      title: "Palitinho Mineiro",
      descripition: "Provolone empanado.",
      price: "38,00",
      img: "/petiscos/palitinhomineiro.jpeg",
      details: "350g",
    },
    {
      id: 11,
      title: "Pastel de carne",
      descripition: "Recheado com queijo.",
      price: "34,00",
      img: "/petiscos/pasteldecarne.jpeg",
      details: "300g",
    },
    {
      id: 12,
      title: "Filé de Tilápia Empanado",
      descripition: "",
      price: "52,00",
      img: "/petiscos/filedetilapiaempanado.jpeg",
      details: "700g",
    },
  ];

  return (
    <div>
      {data.map((product) => {
        return (
          <ProductList key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.descripition}</p>
            <Line2>
              <LinePrice>
                <h4>R$</h4>
                <h3>{product.price}</h3>
              </LinePrice>
              <Circle>
                <h1>{product.details}</h1>
              </Circle>
            </Line2>
            {/* <CardPhoto> */}
            <ImageProduct
              alt="Imagem do produto"
              layout="responsive"
              width={130}
              height={170}
              src={product.img}
            />
            {/* </CardPhoto> */}
          </ProductList>
        );
      })}
    </div>
  );
}
