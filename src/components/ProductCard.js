import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const car = props.product;
  const height = 100;
  const backgroundStyle = {
    color: "black",
    backgroundImage: `url(${car.img})`,
    backgroundPosition: 'center',
    
  };

  return (
    <Link to="/product" state={{ id: car.id }} key={car.id}>
      <Card 
       sx={{ height: { height } ,mt: 1 }} elevation={4} 
        style={backgroundStyle}>
        <List sx={{ width: "100%" }} className="upperContent">
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
  );
}

export default ProductCard;
