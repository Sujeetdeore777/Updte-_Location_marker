import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importing the marker icon image
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fixing the marker icon path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow
});

function App() {
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState([20.5937, 78.9629]); // Center of India
  const [searchQuery, setSearchQuery] = useState('');
  const zoomLevel = 4; // Adjust the zoom level as needed

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/location/")
      .then(response => {
        setMarkers(response.data);
        if (response.data.length > 0) {
          // Set map center to the first location fetched
          const firstMarker = response.data[0];
          setCenter([firstMarker.latitude, firstMarker.longitude]);
        }
      })
      .catch(error => {
        console.error('Error fetching markers:', error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMarkers = markers.filter(marker =>
    marker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
     <input
    type="text"
    placeholder="Search for state..."
    value={searchQuery}
    onChange={handleSearch}
    style={{
      marginBottom: '20px', // Adding margin to the bottom
      marginTop: '20px', // Adding margin to the top
      borderRadius: '20px', // Rounded corners
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow
      padding: '8px 19px', // Adjust padding as needed
      border: '1px solid #ccc', // Border
      marginLeft: '50%', // Corrected margin-left
      transform: 'translateX(-50%)', // Centering trick
    }}
  />
      <MapContainer center={center} zoom={zoomLevel} style={{ height: "calc(100vh - 50px)" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredMarkers.map(marker => (
          <Marker key={marker.id} position={[marker.latitude, marker.longitude]}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
