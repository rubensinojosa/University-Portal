import React from "react";
import "./NoticiasComponent.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const NoticiasComponent = () => {
  return (
    <>
      <h3>Noticias</h3>
      <div className="NoticiasComponent">
        <div className="div1">
          <Col>
            <Card>
              <Card.Img className="cardImg" variant="top" src="" />
              <Card.Body className="cardBody">
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="div2">
          <Col>
            <Card>
              <Card.Img className="cardImg" variant="top" src="" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="div3">
          <Col>
            <Card>
              <Card.Img className="cardImg" variant="top" src="" />
              <Card.Body className="cardBody">
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
      <div className="btn">
        <Button className="btnCard" variant="danger">
          Ver mais notícias
        </Button>
      </div>
    </>
  );
};

export default NoticiasComponent;
