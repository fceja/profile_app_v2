import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "@scss/components/googleMap/GoogleMap.scss";
import Error from "@common/components/Error"
import { GoogleMapContent } from "@content/GoogleMapContent";
import MyMapComponent from "@components/googleMap/MyMapComponent";
import Loading from "@common/components/Loading"

// return loading or failure div
const render = (status: Status): React.ReactElement => {
  if (status === Status.FAILURE) return <Error />;
  return (
    <Loading className="google-map" />
  );
};

const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY ?? "";

const center = {
  lat: GoogleMapContent.latitude,
  lng: GoogleMapContent.longitude,
};

const zoom = GoogleMapContent.zoom;

const styles = {
  width: "100%",
  height: "300px",
};

const GoogleMap = () => {
  return (
    <div className="map-container">
      <Wrapper apiKey={apiKey} render={render}>
        <MyMapComponent center={center} zoom={zoom} styles={styles} />
      </Wrapper>
    </div>
  );
};

export default GoogleMap;
