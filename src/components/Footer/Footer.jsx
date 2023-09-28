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
            <span>Rua Lorem Ipsum, 1234</span>
            <br />
            <span>Lorem Ipsum, PE</span>
          </div>
        </div>
        <div className="divContatos">
          <div>
            <i class="fas fa-phone-alt"></i>
          </div>
          <div>
            <p>+55 81 9999-9999</p>
          </div>
        </div>
        <div className="divContatos">
          <div>
            <i class="far fa-envelope"></i>
          </div>
          <div>
            <p>xxxxxxxxxxx@com.br</p>
          </div>
        </div>
      </div>
      <div className="div3">
        <h4>Sobre Lorem Ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum        </p>
        <div className="redesociais">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="div4">
        <p>
          Lorem Ipsum - 2023 © Todos os
          direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
