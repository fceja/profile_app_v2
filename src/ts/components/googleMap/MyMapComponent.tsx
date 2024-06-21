import { useEffect, useRef } from "react";

const MyMapComponent = ({
  center,
  zoom,
  styles,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  styles: Object;
}) => {
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
