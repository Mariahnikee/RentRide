import React from "react";
import "./Services.css";

const Services = () => {
  const cards = [
    {
      id: 1,
      title: "Best Price",
      icon: <i class="fa fa-camera-retro" aria-hidden="true"></i>,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      link: "Learn More",
    },
    {
      id: 2,
      title: "Fast and Safe",
      icon: <i class="fa fa-address-card" aria-hidden="true"></i>,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      link: "Learn More",
    },
    {
      id: 3,
      title: "Experience Drivers",
      icon: <i class="fa fa-address-book" aria-hidden="true"></i>,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      link: "Learn More",
    },
  ];

  return (
    <div className="services">
      <h2>why choose Us</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#">{card.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
