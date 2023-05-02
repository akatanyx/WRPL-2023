// import React from 'react';
// import MapboxMap from 'react-map-gl';

// export const Map: React.FC = () => {
//   return (
//     <MapboxMap
//       initialViewState={{
//         longitude: -100,
//         latitude: 40,
//         zoom: 10
//       }}
//       style={{width: '100%', height: '100vh'}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//     />
//   );
// }

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const MapboxMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZmFkeWFuYWJpbGEiLCJhIjoiY2xnejE3NDhlMDIwbzNwcW05N3Y5amN3bSJ9.RbAj5RXryWCsPpjlvrosTg";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-122.4194, 37.7749],
        zoom: 12,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div
      className="map-container"
      ref={(el) => (mapContainer.current = el)}
    ></div>
  );
};

export default MapboxMap;
