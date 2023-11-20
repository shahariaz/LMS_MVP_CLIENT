import logo from "../../public/logo.png";
import "./header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo_row">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </nav>
  );
};

export default Header;
