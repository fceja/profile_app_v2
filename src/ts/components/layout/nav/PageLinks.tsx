import React from "react";
import { Link } from "react-router-dom";

import "@scss/components/layout/nav/PageLinks.scss";

const PageLinks: React.FC = () => {
    return (
        <div className="nav-page-links-container">
            <Link className="btn-link" to="/">HOME</Link>
            <span className="separator">|</span>
            <Link className="btn-link" to="/gallery">GALLERY</Link>
            <span className="separator">|</span>
            <Link className="btn-link btn-link-contact" to="/contact">CONTACT US</Link>
        </div>
    );
};

export default PageLinks;
