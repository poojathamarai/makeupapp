import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export function Makeup({ brand, name, price, price_sign, image_link, }) {
  return (
    <Card className="makeup-container">
      <CardMedia component="img" image={image_link} alt={name} className="makeup-img" />
      <CardContent>
        <div className="makeup-specs">
          <p className="makeup-name">Name : <span>{name}</span></p>
          <p className="makeup-brand">Brand: <span>{brand}</span></p>
          <p className="makeup-price">Price: {price} <span>{price_sign}</span></p>
        </div>
      </CardContent>
    </Card>
  );
}
