import React from "react";
import { Link } from "react-router-dom";

import "@scss/components/layout/navbar/PageLinks.scss";

const PageLinks: React.FC = () => {
    return (
        <div className="nav-page-links-container">
            <Link className="btn-link" to="/">
                Home
            </Link>
            <Link className="btn-link" to="/gallery">
                Gallery
            </Link>
            <Link className="btn-link btn-link-contact" to="/contact">
                Contact Us
            </Link>
        </div>
    );
};

export default PageLinks;
