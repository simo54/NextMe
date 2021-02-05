import { Layout } from "antd";
import { BLOG, PROJECTS } from "../../utils/dictionary";
import styles from "./style/Navigation.module.css";

const NavigationBar = () => {
  return (
    <div>
      <Layout>
        <nav className={styles.menuBar}>
          <div className={styles.logo}>
            <a href="/blog">{BLOG}</a>
            <a href="/projects">{PROJECTS}</a>
          </div>
        </nav>
      </Layout>
    </div>
  );
};

export default NavigationBar;
