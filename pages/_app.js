import React from "react";
import "../components/Navigationbar/style/index.css";
const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
