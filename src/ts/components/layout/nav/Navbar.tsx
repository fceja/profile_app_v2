import "@scss/components/layout/nav/Navbar.scss";
import HamburgerMenu from "@components/layout/nav/HamburgerMenu";
import PageLinks from "@components/layout/nav/PageLinks";

const NavBar = () => {
  return (
    <nav className="nav-bar-container" id="id-nav-bar">
      <span className="company-name">POPS & SONS ELECTRIC</span>
      <HamburgerMenu />
      <PageLinks />
    </nav>
  );
};

export default NavBar;
