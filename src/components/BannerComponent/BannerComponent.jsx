import React from "react";
import "./BannerComponent.scss";
import { Card, Col } from "react-bootstrap";

const BannerComponent = () => {
  return (
    <div className="BannerComponent">
      <div className="banner">
        <div className="div1">
          <Col>
            <Card>
              <Card.Img className="bannerCardImg" variant="top" src="" />
              <Card.Body className="bannerCardBody">
                <Card.Text className="bannerP">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  expedita nihil commodi odit at.
                </Card.Text>
                <Card.Text>
                Postado em Julho 2, 2000
                </Card.Text>
                <Card.Text>
                  Hey! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sunt excepturi nulla dicta quo, provident quaerat quidem modi
                  error nostrum a vitae reprehenderit voluptate blanditiis
                  deserunt recusandae alias omnis vero. Et! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Porro expedita nihil
                  commodi odit at. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sunt excepturi nulla dicta quo, provident
                  quaerat quidem modi error nostrum a vitae reprehenderit
                  voluptate blanditiis deserunt recusandae alias omnis vero. Et!
                  Thanks!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="div2">
          <h3>Outras notícias</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
