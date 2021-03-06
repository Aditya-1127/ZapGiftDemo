import {GoogleApiWrapper,Map, InfoWindow, Marker} from 'google-maps-react';
import React,{Component} from 'react'
import './Maps.css'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
const style = {
  width: '100%',
  height: '2000%'
}
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
     };
  }

  

  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render() {
    return (
      <div>
        <h1>Google Maps</h1>
        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {/* {loading && <div>Loading...</div>} */}
              { 
                suggestions.map(suggestion => {
                console.log("Suggestions")
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <Map 
          style={style}
          google={this.props.google}
          initialCenter={{
            lat: 28.500565,
            lng: 77.095831
          }}
        >
        <Marker 
                name={'Current location'} />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCw7pE51M5kpnfVyMJvp5qU6IP3rbtGqZU')
})(MapContainer)