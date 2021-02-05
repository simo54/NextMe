import { NAME, TECH_TITLE } from "../../utils/dictionary";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <h1>{NAME}</h1>
        <p>
          <code>{TECH_TITLE}</code>
        </p>
      </header>
    </div>
  );
};

export default Header;
