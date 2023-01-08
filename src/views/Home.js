import React from "react";
import Box from "@mui/material/Box";
import ProductCard from "../components/ProductCard"
const cars = [
  { id: 1, brand: "Ford", name: "Ka", type: "Sedan", img:'https://imgur.com/tBxkATh.png',desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
  { id: 3, brand: "Chevrolet", name: "Impala", type: "Sedan" ,img:'https://imgur.com/Z7cE6xc.jpeg',desc:"descrição Chevrolet Impala",},
  { id: 4, brand: "Ford", name: "Ka", type: "Sedan", img:'https://imgur.com/tBxkATh.png',desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
  { id: 5, brand: "Chevrolet", name: "Impala", type: "Sedan" ,img:'https://imgur.com/Z7cE6xc.jpeg',desc:"descrição Chevrolet Impala",},
  { id: 6, brand: "Ford", name: "Ka", type: "Sedan", img:'https://imgur.com/tBxkATh.png',desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
  { id: 7, brand: "Chevrolet", name: "Impala", type: "Sedan" ,img:'https://imgur.com/Z7cE6xc.jpeg',desc:"descrição Chevrolet Impala",},
  { id: 8, brand: "Ford", name: "Ka", type: "Sedan", img:'https://imgur.com/tBxkATh.png',desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
  { id: 9, brand: "Chevrolet", name: "Impala", type: "Sedan" ,img:'https://imgur.com/Z7cE6xc.jpeg',desc:"descrição Chevrolet Impala",},
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
      <Box>{list}</Box>
    </div>
  );
}
export default Home;
