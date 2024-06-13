import { lazy, Suspense } from "react";

import "@scss/components/contact/ContactInfoMap.scss";
import Loading from "@common/components/Loading"

const GoogleMap = lazy(() => import("@components/googleMap/GoogleMap"))

const ContactInfoMap = () => {
  return (
    <div className="map-container">
      <div className="map-icon-title">
        <span className="map-icon-text">Serving California</span>
      </div>
      < Suspense fallback={<Loading />}>
        <GoogleMap />
      </Suspense>
    </div>
  );
};

export default ContactInfoMap;
