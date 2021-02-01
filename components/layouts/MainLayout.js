import Navigation from "../Navigationbar/index";
import HeadContainer from "../Head/index";
import Footer from "../Footer/index";

const MainLayout = (props) => {
  return (
    <div>
      <Navigation />
      <HeadContainer />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
