import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import LogoAmmarhes from "../Assets/Logos/LogoAmmarhesWrite.png";

const FooterPage = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <img src={LogoAmmarhes} alt="Logo Ammarhes" />
          <p>
            Av.João Cabral de Melo Neto 850 Bloco 3 Sala 1601. Barra da Tijuca
            <br /> CNPJ: 08.218.809/0001-04
          </p>
        </div>
        <div className="footer-content1">
          <p>
            <FaPhoneAlt />
            <a className="span-footer" href="tel:+55213549-1640">
              +55 (21) 3549-1640
            </a>
          </p>
          <p>
            <FaPhoneAlt />
            <a className="span-footer" href="tel:+55212026-0011">
              +55 (21) 2026-0011
            </a>
          </p>
          <p>
            <FaPhoneAlt />
            <a className="span-footer" href="tel:+55212262-9752">
              +55 (21) 2262-9752
            </a>
          </p>
          <p>
            <IoIosMail />
            <a href="mailto:comercial@ammarhes.com.br">
              Comercial:
              <span className="span-footer"> comercial@ammarhes.com.br</span>
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="bottom-footer">
        <div className="socialMedias">
          <a
            href="https://www.facebook.com/Ammarhesconsultoria/"
            aria-label="https://www.facebook.com/Ammarhesconsultoria/"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/ammarhesconsultoria/"
            aria-label="https://www.linkedin.com/in/ammarhesconsultoria/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ammarhesconsultoria/"
            aria-label="https://www.instagram.com/ammarhesconsultoria/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
        &copy; {new Date().getFullYear()} Copyright:
        <p>Ammarhes: </p>
      </div>
    </footer>
  );
};

export default FooterPage;
