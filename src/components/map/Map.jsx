import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

const Map = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Hackerspace</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }} // could not get the google map API key
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <locationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
