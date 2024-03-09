import React, { useState } from "react";

/* LIBS */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

/* IMAGES */

import img0 from "../Assets/Images/img0.jpg";
import img1 from "../Assets/Images/img1.jpg";
import img2 from "../Assets/Images/img2.jpg";

/* ICONS */

import { FaFolder } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaEnvira } from "react-icons/fa";

const Services = () => {
  const CardsMessage = [
    {
      icon: <FaFolder />,
      title: "Controle legal de Terceiros e Quarteirizados",
      content:
        "Gerenciamos todos os documentos essenciais para os trabalhos de risco de seus terceirizados e .",
      contentFull:
        "Gerenciamos todos os documentos essenciais para os trabalhos de risco de seus terceirizados e quarteirizados, proporcionando-lhe tranquilidade. Reforçamos a recomendação de evitar a terceirização ou quarteirização em sua empresa, negócio ou condomínio sem a realização prévia de estudos e monitoramento adequados. Essa abordagem é crucial para identificar quais documentos e treinamentos são necessários, garantindo uma operação segura e em conformidade com as normas vigentes.",
    },
    {
      icon: <FaStethoscope />,
      title: "Exames e Consultas",
      content:
        "Realizamos consultas clínicas e com especialistas em diversas modalidades. Para mais informações sobre.",
      contentFull:
        "Realizamos consultas clínicas e com especialistas em diversas modalidades. Para mais informações sobre uma clínica específica ou consultório, recomendamos consultar a página dedicada a cada um deles.",
    },
    {
      icon: <FaAmbulance />,
      title: "Ambulatório Médico",
      content:
        "Realizamos a Gestão de Ambulatório dentro das empresas, através de práticas e procedimentos modernos.",
      contentFull:
        "Realizamos a gestão de ambulatório dentro das empresas, empregando práticas e procedimentos modernos com o objetivo de reduzir o absenteísmo. Oferecemos essa gestão com ou sem fornecimento de mão de obra, proporcionando soluções adaptadas às necessidades específicas de cada cliente.",
    },
    {
      icon: <FaEnvira />,
      title: "Monitoramento Ambiental",
      content:
        "Realizamos todos os tipos de monitoramentos ambientais e Ocupacionais.",
      contentFull:
        "Realizamos todos os tipos de monitoramentos ambientais e Ocupacionais.",
    },
    {
      icon: <FaFolder />,
      title: "PCMSO",
      content:
        "Realizamos Exames Admissionais, Periódicos e Demissionais em todos os estados do Brasil seja por meio.",
      contentFull:
        "Realizamos Exames Admissionais, Periódicos e Demissionais em todos os estados do Brasil, seja por meio de clínicas próprias ou convênios. Oferecemos a opção de administração por vida, assegurando responsabilidade técnica, ou elaboramos apenas os documentos necessários, conforme a preferência do cliente.",
    },
    {
      icon: <FaFolder />,
      title: "PPP, LTCAT, Perícias",
      content:
        "Oferecemos o gerenciamento completo de todos os documentos essenciais para os trabalhos de .",
      contentFull:
        "Oferecemos o gerenciamento completo de todos os documentos essenciais para os trabalhos de risco de seus terceirizados e quarteirizados, proporcionando-lhe tranquilidade. Reforçamos a recomendação de evitar a terceirização ou quarteirização em sua empresa, negócio ou condomínio sem a realização prévia de estudos e monitoramento adequados. Essa abordagem é crucial para identificar os documentos e treinamentos necessários, garantindo uma operação segura e em conformidade com as normas vigentes.",
    },
    ,
  ];

  const [openDialogs, setOpenDialogs] = useState(
    Array(CardsMessage.length).fill(false)
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
      <section className="section-service">
        <div className="services">
          <h3>Principais Serviços</h3>
          <div className="grid-container">
            {CardsMessage.map((item, i) => (
              <div className="grid-items" key={i}>
                <i href="#"> {item.icon}</i>
                <div className="content">
                  <h5>{item.title}</h5>
                  <p>
                    {item.content}...
                    <React.Fragment key={i}>
                      <Button
                        className="button-open-alert2"
                        onClick={() => handleClickOpen(i)}
                      >
                        Ver mais
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
                            {item.contentFull}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => handleClose(i)}
                            id="alert-dialog-close-button"
                          >
                            Fechar
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </React.Fragment>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-service">
          <h3>Outros serviços</h3>
          <div className="other-services-container">
            <div className="item-container">
              <h4>Segurança do Trabalho</h4>
              <img src={img0} alt="Img-Segurança" />
              <ul>
                <li>Assessoria na Elaboração de Mapa de Riscos;</li>
                <li>Consultoria em todas as NRs do Mtb;</li>
                <li>Elaboração de PGR, PCA e PCMAT;</li>
                <li>Gestão do FAP/NTEP;</li>
                <li>Gestão do Risco Ocupacional e do RAT;</li>
                <li>Laudos de Insalubridade e Periculosidade;</li>
                <li>Laudos de Aposentadoria Especial;</li>
                <li>Perícias;</li>
                <li>Treinamentos;</li>
                <li>Medições Ambientais;</li>
                <li>
                  Fornecimento de mão de Obra (Tec. Seg, Enf. Seg, e afins)
                </li>
              </ul>
            </div>
            {/* img 2  */}
            <div className="item-container">
              <h4>Saúde Ocupacional</h4>
              <img src={img1} alt="Img-Saúde" />
              <ul>
                <li>Convênios e franquias;</li>
                <li>Exames diversos (clínicos e complementares);</li>
                <li>
                  Fornecimento de mão-de-obra (equipe de enfermagem, médicos,
                  socorristas);
                </li>
                <li>Gestão de ambulatório de saúde;</li>
                <li>Gestão de Atestado de Saúde Ocupacional (ASO);</li>
                <li>Gestão de PCMSO;</li>
                <li>PCA (Programa de Controle Auditivo).</li>
                <li>Perícia Médica.</li>
              </ul>
            </div>
            {/* img3 */}
            <div className="item-container">
              <h4>Meio Ambiente</h4>
              <img src={img2} alt="Img-Ambiente" />
              <ul>
                <li>Auditoria da DZ-56;</li>
                <li>Certificação e consultoria de passivo Ambiental;</li>
                <li>Elaboração e desenvolvimento de Programa 3R;</li>
                <li>Estudos de contaminação de solo e água.</li>
                <li>Gestão de Cadre e Manifesto Ambiental;</li>
                <li>Gestão de Reciclados e de destino de Lixo comum;</li>
                <li>Licenciamento Ambiental e Auditoria de Terceiros;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
