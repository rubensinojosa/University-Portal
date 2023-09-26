import React from "react";
import { Form } from "react-bootstrap";
import './FormComponent.scss'

const FormComponent = () => {
  return (
    <div className="FormComponent d-flex">
      <div className=" form w-50">
        <Form className="formulario">
          <div class="mb-3 formInput">
            <input
              type="text"
              class="form-control"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div class="mb-3 formInput">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Digite seu email"
            />
          </div>
          <div class="mb-3 formInput">
            <input
              type="text"
              class="form-control"
              id="sobre"
              placeholder="Sobre o que você quer falar?"
            />
          </div>
          <select class="form-select mb-3 formInput" aria-label="Default select example">
            <option selected>
              Escolha qual departamento você quer conversar
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="mb-3 formInput">
            <textarea
              class="form-control"
              id="comentario"
              rows="10"
              placeholder=" Digite aqui a mensagem..."
            ></textarea>
          </div>
          <div class="d-flex mb-3 formInput formbtn">
            <button className="btn btn-danger">Enviar</button>
            <button className="btn btn-warning">Limpar campos</button>
          </div>
        </Form>
      </div>
      <div className="departamento w-50">
        <h3>Departamento</h3>
        <table class="table table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Administrativo</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
            <tr>
              <td className="text-danger">Biblioteca</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
            <tr>
              <td className="text-danger">Diretoria</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
            <tr>
              <td className="text-danger">Secretaria</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
            <tr>
              <td className="text-danger">Biblioteca</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
            <tr>
              <td className="text-danger">Coordenadoria</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
            <tr>
              <td className="text-danger">TI</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
            <tr>
              <td className="text-danger">Almoxarifado</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
            <tr>
              <td className="text-danger">Estágio</td>
              <td className="text-end">loremipsum@gmail.com</td>
            </tr>
          </tbody>
        </table>
          <div className="maps">
              <h3>Google maps</h3>
          </div>
      </div>
    </div>
  );
};

export default FormComponent;
