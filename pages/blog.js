import React, { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <>
          <Spin indicator={antIcon} />
        </>
      ) : (
        <>
          <MainLayout>he</MainLayout>
        </>
      )}
    </div>
  );
};

export default blog;
