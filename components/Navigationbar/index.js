import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const NavigationBar = () => {
  return (
    <div>
      <Layout>
        <nav className="menuBar">
          <div className="logo">
            <a href="">logo</a>
          </div>
        </nav>
      </Layout>
    </div>
  );
};

export default NavigationBar;
