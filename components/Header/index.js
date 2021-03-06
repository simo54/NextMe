import { Row, Col } from "antd";
import { NAME, TECH_TITLE } from "../../utils/dictionary";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <header className={styles.headerMainTitle} align="center">
            <h1>{NAME}</h1>
            <p>
              <code>{TECH_TITLE}</code>
            </p>
          </header>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
