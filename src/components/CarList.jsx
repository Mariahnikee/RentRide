import React from "react";
import './CarList.css'

function CarList() {
  const products = [
    {
      id: 1,
      speed: "12km",
      image: "car1",
      name: "bmw",
      price: "100",
      link: "Details",
    },
    {
      id: 2,
      speed: "23km",
      image: "car1",
      name: "benz",
      price: "100",
      link: "Details",
    },
    {
      id: 1,
      speed: "18km",
      image: "car1",
      name: "range",
      price: "100",
      link: "Details",
    },
  ];

  return (
    <div className="carlist">
      <h2>rtrwyukjue uuiu yujdiu</h2>
      <p>
        ee ddddhhhh Lorem ipsum dolor sit amet consectetur adipisicing
        elit.Ratione veritatis explicabo quibusdam quae reprehenderit ab eeee
      </p>

      <div className="product-container">
        {products.map((product) => (
          <div key ={product.id} className="product-card">
            <h3>{product.speed}</h3>
            <div className="productimg">{product.image}</div>
            <p className="car-name">{product.name}</p>
            <p>${product.price}/Day</p>
            <a href="#">{product.link}</a>
          </div>
        ))}
        
      </div>
      <div className="carlist-button">
          <button className="button-two">Get Started</button>
        </div>
    </div>
  );
}

export default CarList;
