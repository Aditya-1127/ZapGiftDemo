import React from 'react'
import { GoogleMap, LoadScript ,InfoWindow, Marker} from '@react-google-maps/api';
 
const containerStyle = {
  width: '1000px',
  height: '1000px'
};
 
const center = {
  lat: 28.500565,
  lng: 77.095831
};
 
function MyComponent() {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCw7pE51M5kpnfVyMJvp5qU6IP3rbtGqZU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
      
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default React.memo(MyComponent)