import Navigation from "../Navigationbar/index";
import Footer from "../Footer/index";
import HeadContainer from "../HeadContainer/index";

const MainLayout = (props) => {
  return (
    <div>
      <HeadContainer />
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
