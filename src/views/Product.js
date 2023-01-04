import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
//get no carro pelo id
//card de fotos
// descrição
//carrossel de fotos

function Product() {
 const props = useLocation()
 //get car
  const imgs = []
  return (
  <React.Fragment >
    
    <Card 
    sx={{ 
    ml:1,
    width:"95%",
    my:5}}>

   {props.state.id}
    </Card>
  </React.Fragment>
      )}
export default Product;
