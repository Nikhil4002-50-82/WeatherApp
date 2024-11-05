import React, { useContext, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatitudeContext } from './context/LatitudeContext';
import { LongitudeContext } from './context/LongitudeContext';

const ChangeView = ({ lat, lon }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], map.getZoom()); // Adjust the view to the new lat/lon
  }, [lat, lon, map]);

  return null; // This component does not render anything to the DOM
};

const MapComponent = () => {
  const { lat } = useContext(LatitudeContext);
  const { lon } = useContext(LongitudeContext);

  const mapTilerUrl = `https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=3it6zBNIgXMHRh7Tz012`;

  return (
    <MapContainer className='h-[20em] w-full rounded-2xl' center={[lat, lon]} zoom={14}>
      <TileLayer
        url={mapTilerUrl}
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; OpenStreetMap contributors'
      />
      {/* Add Marker at the specified latitude and longitude */}
      <Marker position={[lat, lon]}>
        <Popup>
          Latitude: {lat}, Longitude: {lon}
        </Popup>
      </Marker>
      <ChangeView lat={lat} lon={lon} /> {/* Component to change view */}
    </MapContainer>
  );
};

export default MapComponent;
