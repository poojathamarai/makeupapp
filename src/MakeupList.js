import React from 'react';
import { useEffect, useState } from 'react';
import { Makeup } from './Makeup.js';

export function MakeupList() {
  const [items, setItemsList] = useState([]);
  const getItems = () => {
    fetch(`https://625fc2a153a42eaa07fa6be9.mockapi.io/makeup`, { method: "GET" }).then((data) => data.json()).then((db) => setItemsList(db));
  };
  useEffect(getItems, []);
  console.log(items);
  return (
    <div className="makeup-list">
      {items.map(({ name, brand, price, price_sign, image_link }) => (
        <Makeup
          brand={brand}
          name={name}
          price={price}
          price_sign={price_sign}
          image_link={image_link} />
      ))}
    </div>
  );
}
