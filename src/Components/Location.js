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
      link: "https://www.google.com/maps/place/Edificio+CEO+Corporate/@-22.9849673,-43.3612986,17z/data=!3m1!4b1!4m6!3m5!1s0x9bda24c9259043:0x73e986b060ebd40a!8m2!3d-22.9849673!4d-43.3587183!16s%2Fg%2F11clwq2sk8?entry=ttu",
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
      link: "https://www.google.com/maps/place/Shopping+Nova+Am%C3%A9rica/@-22.8778046,-43.2740671,17z/data=!3m1!4b1!4m6!3m5!1s0x997d18e80c4569:0xc62bd5a1dabb0de5!8m2!3d-22.8778046!4d-43.2714868!16s%2Fg%2F1238mfs0?entry=ttu",
    },
    {
      title: "Centro",
      image: img004,
      text: "Av.  Presidente  Vargas   435, SALA 1502,  Centro,  Rio de Janeiro  -  RJ,  20071-904, (Próximo a estação uruguaina do metro)",
      link: "https://www.google.com/maps/place/Av.+Pres.+Vargas,+435+-+Centro,+Rio+de+Janeiro+-+RJ,+20071-003/@-22.9019041,-43.1822075,17z/data=!3m1!4b1!4m6!3m5!1s0x997f5ea098bd19:0xd2cdeada4c0ca880!8m2!3d-22.9019041!4d-43.1796272!16s%2Fg%2F11bw4471j1?entry=ttu",
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
