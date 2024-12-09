import "./index.css";
import logo from "/Users/sam/Documents/Portfolio-react/Portefolio/src/assets/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="nav">
        <li>
          <a href="#presentation">Présentation</a>
        </li>
        <li>
          <a href="#competence">Compétence</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
