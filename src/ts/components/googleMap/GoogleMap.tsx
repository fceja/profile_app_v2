import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Error from "@common/components/Error"
import MyMapComponent from "@components/googleMap/MyMapComponent";
import Loading from "@common/components/Loading"

const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY ?? "";

const render = (status: Status): React.ReactElement => {
  switch (status) {
    case Status.LOADING:
      return <Loading className="google-map" />
    case Status.FAILURE:
      return <Error />
    case Status.SUCCESS:
      return <MyMapComponent />
  }
};

const GoogleMap = () => <Wrapper apiKey={apiKey} render={render} />

export default GoogleMap;
