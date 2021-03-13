import React from "react";
import "antd/dist/antd.css";
import "./globalstyle.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
