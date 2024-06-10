import "@scss/components/layout/nav/Navbar.scss";
import HamburgerMenu from "@components/layout/nav/HamburgerMenu";
import PageLinks from "@components/layout/nav/PageLinks";

const NavBar = () => {
  return (
    <nav className="nav-bar-container mt-4" id="id-nav-bar">
      <div className="nav-logo-container">
        <img className="nav-logo" src="src/assets/PopsAndSonsElectricLogo.png" alt="pops-and-sons-logo" />
      </div>
      <HamburgerMenu />
      <PageLinks />
    </nav>
  );
};

export default NavBar;
