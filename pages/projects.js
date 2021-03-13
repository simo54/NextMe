import MainLayout from "../components/layouts/MainLayout";
import { Card, Col, Row } from "antd";

const { Meta } = Card;
const projects = () => {
  return (
    <MainLayout>
      <div className="site-card-wrapper">
        <Row>
          <Col xs={24} sm={16} md={10} lg={6} xl={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta title="Card title" description="This is the description" />
            </Card>
          </Col>
          <Col xs={24} sm={16} md={10} lg={6} xl={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta title="Card title" description="This is the description" />
            </Card>
          </Col>
          <Col xs={24} sm={16} md={10} lg={6} xl={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta title="Card title" description="This is the description" />
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default projects;
