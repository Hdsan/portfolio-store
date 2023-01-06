import React from "react";
import Box from "@mui/material/Box";
import ProductCard from "../components/ProductCard"
const cars = [
  { id: 1, brand: "Ford", name: "Ka", type: "Sedan", img:'https://imgur.com/tBxkATh.png'},
  // { id: 2, brand: "Fiat", name: "Uno", type: "Hatch" },
  { id: 3, brand: "Chevrolet", name: "Impala", type: "Sedan" ,img:'https://imgur.com/Z7cE6xc.jpeg'},
];
// TODO:
// botao de deletar fora do LINK
// funcionalidade de deletar item
const list = cars.map((car) => (
    <ProductCard product={car} key={car.id}/>
));

function Home() {
  return (
    <div>
      {" "}
      <Box>{list}</Box>{" "}
    </div>
  );
}
export default Home;
