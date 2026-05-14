import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const WorldMap = ({ cities, onSelect }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={true}
      className="h-[90vh] w-full z-0"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cities.map((city) => (
        <Marker
          key={city._id}
          position={[
            city.coordinates.lat,
            city.coordinates.lon,
          ]}
          eventHandlers={{
            click: () => onSelect(city),
          }}
        >
          <Popup>{city.city}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;