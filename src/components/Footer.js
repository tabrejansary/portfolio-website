import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/finallogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* MailchimpForm - centered on mobile */}
          <Col xs={12} className="text-center mb-4 mb-md-0">
            <MailchimpForm />
          </Col>
          
          {/* Logo - centered on mobile */}
          <Col xs={12} sm={6} className="text-center mb-4 mb-sm-0">
            <img src={logo} alt="Logo" style={{ maxWidth: '200px' }} />
          </Col>
          
          {/* Social icons and text - centered on mobile */}
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon d-flex justify-content-center justify-content-sm-end mb-3">
              <a href="https://www.linkedin.com/in/tabrej-ansari/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://x.com/KhanTbrz"><img src={navIcon2} alt="Twitter" /></a>
              <a href="https://www.instagram.com/itstbrz/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p className="text-center text-sm-end">Handcrafted with ❤️ by Tabrej | © 2025 All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}