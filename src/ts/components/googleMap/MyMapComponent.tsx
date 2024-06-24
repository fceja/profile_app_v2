import { useEffect, useRef } from "react";

import { GoogleMapContent } from "@content/GoogleMapContent";

const center = {
  lat: GoogleMapContent.latitude,
  lng: GoogleMapContent.longitude,
};

const zoom = GoogleMapContent.zoom;

const styles = {
  width: "100%",
  height: "300px",
};

const MyMapComponent = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={styles} />;
};

export default MyMapComponent;
