import { useContext } from "react";
import Navbar2 from "./Navbar2";
import { themeDataContext } from "../Context/ThemeContext";

const Navbar = () => {
  const [theme] = useContext(themeDataContext)
  
  return (
    <div className={theme}>
      <h2>Fabrooh</h2>
      <Navbar2 />
    </div>
  );
};

export default Navbar;
