import { useState } from "react";
import "./NavbarComponent.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Noticias from "../../pages/Noticias/Noticias";
import Vagas from "../../pages/Vagas/Vagas";
import Cursos from "../../pages/Cursos/Cursos";
import Contatos from "../../pages/Contatos/Contatos";
import Footer from "../../components/Footer/Footer";

function NavbarComponent() {
  const [expand, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expand);
  const [activePage, setActivePage] = useState("Inicio"); // inicializa com a página "Inicio"

  return (
    <>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <div className="imgNav">
              <img src="src/assets/logo-nav.png" alt="logotipo principal" />
            </div>
            <Navbar.Toggle
              onClick={handleToggle}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="imgNav">
                    <img
                      src="src/assets/logo-nav.png"
                      alt="logotipo principal"
                    />
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navContainer">
                  <Nav>
                    <Nav.Link
                      as={Link}
                      to={"/"}
                      active={activePage === "Inicio"}
                      onClick={() => setActivePage("Inicio")}
                    >
                      Início
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={"/cursos"}
                      active={activePage === "Cursos"}
                      onClick={() => setActivePage("Cursos")}
                    >
                      Cursos
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={"/vagas"}
                      active={activePage === "Vagas"}
                      onClick={() => setActivePage("Vagas")}
                    >
                      Vagas
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={"/noticias"}
                      active={activePage === "Noticias"}
                      onClick={() => setActivePage("Noticias")}
                    >
                      Notícias
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={"/contatos"}
                      active={activePage === "Contatos"}
                      onClick={() => setActivePage("Contatos")}
                    >
                      Contatos
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#">
                      <i className="fab fa-instagram redesociais"></i>
                    </Nav.Link>
                    <Nav.Link href="#">
                      <i className="fab fa-facebook redesociais"></i>
                    </Nav.Link>
                    <Nav.Link href="#">
                      <i className="fab fa-linkedin redesociais"></i>
                    </Nav.Link>
                  </Nav>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/contatos" element={<Contatos />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default NavbarComponent;
