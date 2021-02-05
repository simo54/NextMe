import { Layout } from "antd";
import { BLOG, PROJECTS } from "../../utils/dictionary";
import { Row, Col } from "antd";
import styles from "./Navigation.module.css";

const NavigationBar = () => {
  return (
    <div>
      <Layout>
        <Row justify="center" className={styles.navRow}>
          <Col align="center">
            <a href="/blog" className={styles.linkBox}>
              {BLOG}
            </a>
            <a href="/projects" className={styles.linkBox}>
              {PROJECTS}
            </a>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default NavigationBar;
