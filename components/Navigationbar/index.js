import { Layout } from "antd";
import { BLOG, PROJECTS } from "../../utils/dictionary";
import { Row, Col } from "antd";
import styles from "./Navigation.module.css";

const NavigationBar = () => {
  return (
    <div>
      <Layout>
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col align="center">
            <a span={5} href="/blog">
              {BLOG}
            </a>
            <a span={5} href="/projects">
              {PROJECTS}
            </a>
          </Col>
        </Row>
        {/* <nav className={styles.menuBar}>
          <div className={styles.logo}>
            <a href="/blog">{BLOG}</a>
            <a href="/projects">{PROJECTS}</a>
          </div>
        </nav> */}
      </Layout>
    </div>
  );
};

export default NavigationBar;
