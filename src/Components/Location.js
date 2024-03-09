import React from "react";
import { UserCard } from "react-ui-cards";

/* images */

import img001 from "../Assets/Images/ceo.jpg";
import img002 from "../Assets/Images/dimension.jpg";
import img003 from "../Assets/Images/nova-america.jpg";
import img004 from "../Assets/Images/uruguaiana.jpg";

const Location = () => {
  const cardsLocationItens = [
    {
      title: "Edificio Ceo",
      image: img001,
      text: "Av. João Cabral de Mello Neto 850, bl. 3, sl. 1601. Rio de Janeiro, RJ. (Prox. Ao Shopping Via Parque)",
      link: "https://www.google.com/maps/place/Av.+Pres.+Vargas,+542+-+1315+-+Centro,+Rio+de+Janeiro+-+RJ,+20071-000/@-22.9014949,-43.183466,17z/data=!3m1!4b1!4m5!3m4!1s0x997f5c68e5d6b1:0x39c0154b5b313b5d!8m2!3d-22.9014949!4d-43.1812773s",
    },
    {
      title: "Barra da Tijuca",
      image: img002,
      text: "Av. Abelardo Bueno, 1 - loja 108 , Barra da Tijuca,  22790-703. (Em frente a Estação Centro-Metropolitano do BRT)",
      link: "https://www.google.com/maps/place/Cl%C3%ADnica+Sa%C3%BAde+10/@-22.9738475,-43.3679368,17z/data=!3m1!4b1!4m5!3m4!1s0x9bd980fbb4ed03:0x5dd84404fb5975c2!8m2!3d-22.9738475!4d-43.3657481",
    },
    {
      title: "Nova America",
      image: img003,
      text: "Av. Pastor Martin Luther King Júnior, 126 Shopping Nova América Office 3000, Sl. 801, Rio de Janeiro - RJ",
      link: "https://www.google.com/maps/place/Av.+Pres.+Vargas,+542+-+1315+-+Centro,+Rio+de+Janeiro+-+RJ,+20071-000/@-22.9014949,-43.183466,17z/data=!3m1!4b1!4m5!3m4!1s0x997f5c68e5d6b1:0x39c0154b5b313b5d!8m2!3d-22.9014949!4d-43.1812773s",
    },
    {
      title: "Centro",
      image: img004,
      text: "Av.  Presidente  Vargas   435, SALA 1502,  Centro,  Rio de Janeiro  -  RJ,  20071-904, (Próximo a estação uruguaina do metro)",
      link: "https://www.google.com/maps/place/Av.+Pres.+Vargas,+542+-+1315+-+Centro,+Rio+de+Janeiro+-+RJ,+20071-000/@-22.9014949,-43.183466,17z/data=!3m1!4b1!4m5!3m4!1s0x997f5c68e5d6b1:0x39c0154b5b313b5d!8m2!3d-22.9014949!4d-43.1812773s",
    },
  ];

  return (
    <>
      <section id="location-section">
        <h3>Conheça nossas unidades</h3>
        <div className="location">
          {cardsLocationItens.map((item, i) => (
            <UserCard
              key={i}
              float
              href={item.link}  target="_blank"
              header={item.image}
              positionName={item.text}
              name={item.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Location;
