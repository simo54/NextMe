import { Col, Row } from "antd";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <Row>
        <Col>
          <footer>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Footer
            </a>
          </footer>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
