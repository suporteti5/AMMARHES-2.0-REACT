import React, { useState } from "react";

/* IMAGES */
import Logo from "../Assets/Logos/LogoAmmarhesBlue.png";

/* LIBS */

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/* ICONS */

import { IconContext } from "react-icons";
import { GrSystem } from "react-icons/gr";
import { FaCalendarCheck } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <HomeIcon />
        </IconContext.Provider>
      ),
      link: "#",
    },
    {
      text: "Sobre",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <InfoIcon />
        </IconContext.Provider>
      ),
      link: "#about",
    },
    {
      text: "Serviços",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <MdMedicalServices />
        </IconContext.Provider>
      ),
      link: "#services-section",
    },
    {
      text: "Contato",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <PhoneRoundedIcon />
        </IconContext.Provider>
      ),
      link: "#contact-section",
    },
    {
      text: "Unidades",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <FaLocationDot />
        </IconContext.Provider>
      ),
      link: "#Location-h3",
    },
    {
      text: "Agende seu exame",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <FaCalendarCheck />
        </IconContext.Provider>
      ),
      link: "https://asoonline.com.br/sistema/hub.asp",
    },
    {
      text: "Acesse o Sistema",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <GrSystem />
        </IconContext.Provider>
      ),
      link: "https://www.agendatecnica.com.br/v2/login.asp",
    },
  ];
  return (
    <>
      <div className="top-menu">
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <span className="text-top-menu-span">Funcionamento: </span> Seg -
              Sex : 08:00 - 18:00
            </p>
          </div>
        </div>
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <span className="text-top-menu-span">Contato: </span>
              <a href="mailto:contato@saude10clinica.com.br">
                comercial@ammarhes.com.br
              </a>
            </p>
          </div>
        </div>
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <span className="text-top-menu-span">Ligar para: </span>
              <a href="tel:+552122629752"> +55(21)2262-9752</a>
            </p>
          </div>
        </div>
      </div>
      <nav>
        <div className="nav-logo-container">
          <a href="#">
            <img src={Logo} alt="Logo Ammarhes" className="nav-logo" />
          </a>
        </div>
        <div className="navbar-links-container">
          <a href="#">Home</a>
          <a href="#about">Sobre</a>
          <a href="#services-section">Serviços</a>
          <a href="#Location-h3">Unidades</a>
          <a href="#contact-section">Contato</a>
          <a
            href="https://www.agendatecnica.com.br/v2/login.asp"
            target="_blank"
          >
            Acesso ao sistema
          </a>
          <a
            href="https://asoonline.com.br/sistema/hub.asp"
            id="agende"
            target="_blank"
          >
            Agende seu exame
          </a>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <a href={item.link} className="navbar-menu-link">
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
            <Divider />
            <div className="infos-mobile">
              <div className="text-top-menu-mobile">
                <p>
                  <span className="text-top-menu-span">Funcionamento:</span>
                  Seg - Sex : 07:00h - 17:00h
                </p>
              </div>
              <div className="text-top-menu-mobile">
                <p>
                  <span className="text-top-menu-span">Contato:</span>
                  <a href="mailto:contato@saude10clinica.com.br">
                    comercial@ammarhes.com.br
                  </a>
                </p>
              </div>
              <div className="text-top-menu-mobile">
                <p>
                  <span className="text-top-menu-span">Ligar para:</span>
                  <a href="tel:+55213549-1640"> +55 (21) 3549-1640</a>
                </p>
              </div>
            </div>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
