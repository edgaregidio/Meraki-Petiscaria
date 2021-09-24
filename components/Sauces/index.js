import React from "react";
import { ListaSauces, Line2, LinePrice, ImageSauces } from "./styles";

export default function Sauces() {
  const data = [
    {
      id: 1,
      title: "Barbecue",
      description: "",
      price: "3,00",
      img: "/sauces/molhobarbecue.jpeg",
    },
    {
      id: 2,
      title: "Ketchup",
      description: "",
      price: "3,00",
      img: "/sauces/molhobarbecue.jpeg",
    },
    {
      id: 3,
      title: "Molho de Alho",
      description: "",
      price: "3,00",
      img: "/sauces/molhotartaro.jpeg",
    },
    {
      id: 4,
      title: "Molho de Ervas",
      description: "",
      price: "3,00",
      img: "/sauces/molhoervas.jpeg",
    },
    {
      id: 5,
      title: "Molho Tártaro",
      description: "",
      price: "3,00",
      img: "/sauces/molhotartaro.jpeg",
    },
  ];

  return (
    <div>
      {data.map((sauces) => (
        <ListaSauces key={sauces.id}>
          <li>
            <h1>{sauces.title}</h1>
            <p>{sauces.description}</p>
            <Line2>
              <LinePrice>
                <h4>R$</h4>
                <h3>{sauces.price}</h3>
              </LinePrice>
              <ImageSauces
                alt="Imagem do molho"
                width={800}
                height={1024}
                src={sauces.img}
              />
            </Line2>
          </li>
        </ListaSauces>
      ))}
    </div>
  );
}
