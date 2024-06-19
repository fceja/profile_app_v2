import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "@scss/components/googleMap/GoogleMap.scss";
import { GoogleMapData as GoogleMapContent } from "@content/GoogleMapContent";
import Loading from "@common/components/Loading"
import MyMapComponent from "@components/googleMap/MyMapComponent";

const errorDiv = <div>Error</div>

const render = (status: Status) => {
  if (status === Status.FAILURE) return errorDiv;

  return <Loading className='google-map' />;
};

const center = {
  lat: GoogleMapContent.latitude,
  lng: GoogleMapContent.longitude,
};

const zoom = GoogleMapContent.zoom;

const styles = {
  width: GoogleMapContent.width,
  height: GoogleMapContent.height,
};

const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;

const GoogleMap = () => {
  if (!apiKey) return errorDiv;

  return (
    <div className="gmap-container">
      <Wrapper apiKey={apiKey} render={render}>
        <MyMapComponent center={center} zoom={zoom} styles={styles} />
      </Wrapper>
    </div>
  );
};

export default GoogleMap;
