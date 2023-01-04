import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
const cars = [
  { id: 1, brand: "Ford", name: "Ka", type: "Sedan", img:'https://imgur.com/tBxkATh.png'},
  // { id: 2, brand: "Fiat", name: "Uno", type: "Hatch" },
  { id: 3, brand: "Chevrolet", name: "Impala", type: "Sedan" ,img:'https://imgur.com/Z7cE6xc.jpeg'},
];
//TODO: mover o componente da lista de card pra outro arquivo pra renderizar o background separadamente
// botao de deletar fora do LINK
// funcionalidade de deletar item
const card = cars.map((car) => (
    <Link to="/product" state={{id:car.id}} key={car.id}>
      <Card elevation={4} style={{backgroundImage:car.img}}>
     
        <List sx={{ width: "100%" }}>
          <ListItem 
            secondaryAction={
              <IconButton edge="end" sx={{ color: red[500] }}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <DirectionsCarIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={car.brand + " " + car.name}
              secondary={car.type}
            />
          </ListItem>
        </List>
      </Card>
    </Link>
));

function Home() {
  return (
    <div>
      {" "}
      <Box>{card}</Box>{" "}
    </div>
  );
}
export default Home;
