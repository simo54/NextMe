import React from "react";
import "antd/dist/antd.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
