import React, { useRef, useEffect, useState, use } from "react";
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFpc2luamkiLCJhIjoiY2xpYWNla2cyMDF5dTNmczRlNnBnZDJvbiJ9.mOsPO-w3z9xJVFh7vZ36FQ";

interface MapContainerProps {
  children?: React.ReactNode;
  keywordProp?: string;
  onSearch?: (keyword: string) => void;
  getCenterHandler?: (center: number[]) => void;
  setMapCoordinates?: (coordinates: string) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({
  children,
  keywordProp = "",
  getCenterHandler = () => {},
  setMapCoordinates = () => {},
}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [keyword, setKeyword] = useState("Yogyakarta");

  useEffect(() => {
    const fetchAPI = async () => {
      setKeyword(keywordProp != "" ? keywordProp : "Yogyakarta");
      const result = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${keyword}.json?access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const data = await result.json();
      console.log(data);
      setLng(data.features[0].center[0]);
      setLat(data.features[0].center[1]);
      setMapCoordinates(`${lng},${lat}`);
      map.current?.jumpTo({
        center: [data.features[0].center[0], data.features[0].center[1]],
        zoom: 15,
      });
      getCenterHandler([
        data.features[0].center[0],
        data.features[0].center[1],
      ]);
    };
    fetchAPI();
  }, [keywordProp]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat, zoom]);


  return (
    <div className="relative">
      <div ref={mapContainer} className="h-[600px] w-[360px] md:w-screen" />
    </div>
  );
};

export default MapContainer;