import React from "react";

const OtherServices = () => {
  const servicesData = [
    {
      title: "Segurança do Trabalho",
      listItem: [
        "Assessoria na Elaboração de Mapa de Riscos;",
        " Consultoria em todas as NRs do Mtb;",
        " Elaboração de PGR, PCA e PCMAT;",
        " Gestão do FAP/NTEP;",
        " Gestão do Risco Ocupacional e do RAT;",
        " Laudos de Insalubridade e Periculosidade;",
        " Laudos de Aposentadoria Especial;",
        " Perícias;",
        " Treinamentos;",
        " Medições Ambientais;",
        " Fornecimento de mão de Obra (Tec. Seg, Enf. Seg, e afins);",
      ],
    },
    {
      title: "Saúde Ocupacional",
      listItem: [
        "Convênios e franquias;",
        "Exames diversos (clínicos e complementares);",
        "Fornecimento de mão-de-obra (equipe de enfermagem, médicos, socorristas);",
        "Gestão de ambulatório de saúde;",
        "Gestão de Atestado de Saúde Ocupacional (ASO);",
        "Gestão de PCMSO;",
        "PCA (Programa de Controle Auditivo);",
        "Perícia Médica.;",
      ],
    },
    {
      title: "Meio Ambiente",
      listItem: [
        "Auditoria da DZ-56;",
        "Certificação e consultoria de passivo Ambiental;",
        "Elaboração e desenvolvimento de Programa 3R;",
        "Estudos de contaminação de solo e água;",
        "Gestão de Cadre e Manifesto Ambiental;",
        "Gestão de Reciclados e de destino de Lixo comum;",
        "Licenciamento Ambiental e Auditoria de Terceiros;",
      ],
    },
  ];

  return (
    <>
      <section className="other-service">
        <h3>Outros serviços</h3>

        <div className="other-service-container">
          <div className="other-service-item">
            {servicesData.map((item, i) => (
              <div key={i} className="other-service-item-content">
                <h2>{item.title}</h2>
                <ul>
                  {servicesData[i].listItem.map((listItem, j) => (
                    <li key={j}>{listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherServices;
