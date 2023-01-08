import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from '@mui/material/Button'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

//get no carro pelo id
//card de fotos
// descrição

function Product() {
  const props = useLocation();
  const car = props.state.car;
  const items = [
    <img src={car.img} alt="err" onDragStart={handleDragStart} />,
    <img src={car.img} alt="err" onDragStart={handleDragStart} />,
    <img src={car.img} alt="err" onDragStart={handleDragStart} />,
  ];
  return (
    <React.Fragment>
       <Link to="/home" className="back-btn">
      <Button 
        sx={{mt: 1}}
        size="large" startIcon={<KeyboardBackspaceIcon />} >
         voltar
      </Button>
      </Link>
      <Card
        sx={{
          ml: 1,
          width: "95%",
          my: 1,
        }}
      >
        <AliceCarousel mouseTracking items={items} />
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 600,
            fontSize: 20,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {car.brand + " " + car.name}
        </Typography>

        <Typography
        align="left"
          sx={{
            fontFamily: "monospace",
            fontWeight: 500,
            fontSize: 15,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {car.desc}
        </Typography>
       
      </Card>
    </React.Fragment>
  );
}
export default Product;
