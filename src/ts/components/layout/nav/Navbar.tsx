import "@scss/components/layout/nav/Navbar.scss";
import HamburgerMenu from "@components/layout/nav/HamburgerMenu";
import PageLinks from "@components/layout/nav/PageLinks";

const NavBar = () => {
  return (
    <nav className="nav-bar-container" id="id-nav-bar">
      <HamburgerMenu />
      <span className="company-name">POPS & SONS ELECTRIC</span>
      <PageLinks />
    </nav>
  );
};

export default NavBar;
