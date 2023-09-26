import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="div1">
        <img src="src/assets/footerimg.png" alt="logotipo principal" />
      </div>
      <div className="div2">
        <div className="divContatos">
          <div>
            <i class="fas fa-globe-americas"></i>
          </div>
          <div>
            <span>Rua Codelândia, 1367</span>
            <br />
            <span>Cafelândia, SP</span>
          </div>
        </div>
        <div className="divContatos">
          <div>
            <i class="fas fa-phone-alt"></i>
          </div>
          <div>
            <p>+55 14 9999-9999</p>
          </div>
        </div>
        <div className="divContatos">
          <div>
            <i class="far fa-envelope"></i>
          </div>
          <div>
            <p>centropaulasouza@etec.sp.gov.br</p>
          </div>
        </div>
      </div>
      <div className="div3">
        <h4>Sobre a Etec Cafelândia</h4>
        <p>
          Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
          Moreira Martins Aguiar se destaca no ensino médio e técnico, recebendo
          constantemente menções e congratulações em todo o estado de São Paulo.{" "}
        </p>
        <div className="redesociais">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="div4">
        <p>
          Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os
          direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
