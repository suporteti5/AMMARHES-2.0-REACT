import React, { useState } from "react";

/* Images */
import Agenda from "../Assets/Logos/LogoAgenda.png";
import Casa from "../Assets/Logos/LogoCasa.png";
import Saude10 from "../Assets/Logos/LogoSaude10.png";
import LogoAmmarhesBlue from "../Assets/Logos/LogoAmmarhesBlue.png";
import LogoAmmarhesWrite from "../Assets/Logos/LogoAmmarhesWrite.png";

/* LIBS */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/* ICONS */
import { FaRegUser } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const About = () => {
  const ButtonsMessage = [
    {
      title: "Quem Somos",
      icon: <FaRegUser />,
      message: `Somos a empresa líder de um grupo sólido, atuando há mais de 30 anos em todos os segmentos de Segurança e Saúde Ocupacional. Nossa grande ferramenta, 
      que incrementa nosso diferencial, é um sistema próprio de Gestão de SST chamado AGENDA TÉCNICA, que facilita todos os mecanismos de trabalho, reduzindo custos 
      e garantindo ao cliente resultados de qualidade e financeiros. Oferecemos uma ampla gama de serviços disponíveis por meio de uma rede de clínicas próprias, 
      respaldados por solidez financeira. Além disso, somos registrados no CREA, com emissão de ART (Anotação de Responsabilidade Técnica) nas atividades de Engenharia,
       com ênfase em Segurança do Trabalho e Meio Ambiente. Também possuímos registro no CRM, com médico-coordenador.`,
    },
    {
      title: "Nossa História",
      icon: <FaCalendarCheck />,
      message: `A Ammarhes nasceu como uma equipe de consultores especializados em Saúde Ocupacional, Meio Ambiente e Segurança do Trabalho. Inicialmente, éramos um 
      grupo multidisciplinar que expandiu suas atividades em direção ao desenvolvimento de SISTEMAS DE GESTÃO, agregando ao nosso portfólio a assessoria na aplicação 
      de diversas normas, tais como ISO 14001, ISO 9001, NBR 16001 e SA 8000.`,
    },
    {
      title: "Nosso Diferencial",
      icon: <IoDiamondOutline />,
      message: `Somos um grupo composto por quatro empresas no segmento de Engenharia de Segurança do Trabalho (Ammarhes); Software de Gestão SST (Agenda Técnica);
       Saúde Ocupacional (Casa Ocupacional) e Marketplace do Segmento (Saúde 10).`,
    },
    {
      title: "Software, Marketplace e Atendimento nacional",
      icon: <IoIosSettings />,
      message: `Nossa plataforma, a Agenda Técnica, assegura agilidade e acessibilidade por meio da nossa rede Casa Ocupacional, possibilitando atendimento em todo o
       Brasil, abrangendo quase uma centena de cidades, e garantindo simultaneamente preço e qualidade.`,
    },
  ];

  const [openDialogs, setOpenDialogs] = useState(
    Array(ButtonsMessage.length).fill(false)
  );

  const handleClickOpen = (index) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = true;
    setOpenDialogs(newOpenDialogs);
  };

  const handleClose = (index) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = false;
    setOpenDialogs(newOpenDialogs);
  };

  return (
    <>
      <section className="section-about">
        <div className="about">
          <img src={LogoAmmarhesBlue} alt="Logo Ammarhes" />
          <h4>Ammarhes Consultores em QSMS e Tecnologia</h4>
          <p>
            Oferecemos uma gama completa de serviços, abrangendo clínica de
            saúde ocupacional e consultoria de segurança do trabalho. Nosso
            compromisso inclui o gerenciamento integral da documentação de
            Segurança e Saúde no Trabalho (SST), visando atender aos requisitos
            do eSocial. Além disso, disponibilizamos serviços de avaliações
            ambientais, treinamentos especializados e locação de equipamentos
            para atender às diversas necessidades de nossos clientes.
          </p>
          <h4>Conheça mais abaixo</h4>
          <div className="about-buttons">
            {ButtonsMessage.map((item, i) => (
              <React.Fragment key={i}>
                <Button
                  variant="outlined"
                  className="button-open-alert"
                  onClick={() => handleClickOpen(i)}
                >
                  {item.icon} {item.title}
                </Button>

                <Dialog
                  open={openDialogs[i]}
                  onClose={() => handleClose(i)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle className="alert-dialog-title">
                    {item.icon} - {item.title}
                  </DialogTitle>

                  <DialogContent>
                    <DialogContentText className="alert-dialog-description">
                      {item.message}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => handleClose(i)}
                      className="alert-dialog-close-button"
                    >
                      Fechar
                    </Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            ))}{" "}
          </div>
        </div>

        <div className="other-companies">
          <h3 className="other-companies-h3">Conheça nossas empresas</h3>
          <div className="other-companies-logos">
            <div className="div-link">
              <a target="_blank" href="https://ammarhes.com.br/">
                <img
                  className="other-companies-logos-Imgs"
                  src={LogoAmmarhesWrite}
                  alt="Logo Ammarhes"
                />
              </a>
              <a target="_blank" href="https://ammarhes.com.br/" className="a-buttons">
                Clique e Acesse
              </a>
            </div>

            <div className="div-link">
              <a target="_blank" href="https://casaocupacional.com.br/">
                <img
                  className="other-companies-logos-Imgs"
                  src={Casa}
                  alt="Logo Casa Ocupacional"
                />
              </a>
              <a target="_blank" href="https://casaocupacional.com.br/" className="a-buttons">
                Clique e Acesse
              </a>
            </div>
            <div className="div-link">
              <a target="_blank" href="https://www.agendatecnica.com.br/">
                <img
                  className="other-companies-logos-Imgs"
                  src={Agenda}
                  alt="Logo Agenda Técnica"
                />
              </a>
              <a target="_blank" href="https://www.agendatecnica.com.br/" className="a-buttons">
                Clique e Acesse
              </a>
            </div>
            <div className="div-link">
              <a target="_blank" href="https://saude10clinica.com.br/">
                <img
                  className="other-companies-logos-Imgs"
                  src={Saude10}
                  alt="Logo Saúde 10"
                  id="saude10"
                />
              </a>
              <a target="_blank" href="https://saude10clinica.com.br/" className="a-buttons">
                Clique e Acesse
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
