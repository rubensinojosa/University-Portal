import React from "react";
import "./CursosComponent.scss";

const CursosComponent = () => {
  return (
    <div className="CursosComponet">
      <h3>Cursos técnicos</h3>
      <div className="Cursos">
        <div className="div1">
          <img src="src/assets/vacina.png" alt="vacina" />
          <p>ENFERMAGEM</p>
        </div>
        <div className="div2">
          <img src="src/assets/computador.png" alt="" />
          <p>DESENVOLVIMENTO DE SISTEMAS</p>
        </div>
        <div className="div3">
          <img src="src/assets/processo.png" alt="" />
          <p>RECURSOS HUMANOS</p>
        </div>
        <div className="div4">
          <img src="src/assets/despesas.png" alt="" />
          <p>ADMINISTRAÇÃO</p>
        </div>
        <div className="div5">
          <img src="src/assets/cana-de-acucar.png" alt="" />
          <p>AÇUCAR E ALCOOL</p>
        </div>
        <div className="div6">
          <img src="src/assets/agricultura.png" alt="" />
          <p>AGROPECUÁRIA</p>
        </div>
        <div className="div7">
          <img src="src/assets/vaca.png" alt="" />
          <p>ZOOTECNIA</p>
        </div>
        <div className="div8">
          <img src="src/assets/financeiro.png" alt="" />
          <p>AGRONEGOCIO</p>
        </div>
      </div>
    </div>
  );
};

export default CursosComponent;
