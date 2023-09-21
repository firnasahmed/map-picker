import React, { Component } from 'react';

class LocationPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: null,
    };
  }

  componentDidMount() {
    // Initialize the Google Maps map
    // AIzaSyARvJewxRJX9BLfJo3CsZXFBOz8ZI7AKWM
    const google = window.google; // Accessing the Google Maps API from the window object
    const mapOptions = {
      center: { lat: 8.00, lng: 81.00 }, // We are setting an initial center point in Sri Lanka
      zoom: 8, // We are setting an initial zoom level as 8
    };
    const map = new google.maps.Map(this.mapContainer, mapOptions);

    // Adding a click event listener to the map
    map.addListener('click', (event) => {
      // Getting the clicked location's coordinates
      const selectedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };

      // Update the state with the selected location
      this.setState({ selectedLocation });
    });
  }

  render() {
    return (
      <div>             
        <div
            ref={(div) => (this.mapContainer = div)}
            style={{ width: '100%', height: '800px' }}
            />
            {/* Display the selected address here */}
            {this.state.selectedLocation && (
            <p>
                Selected Location: Lat: {this.state.selectedLocation.lat}, Lng: {this.state.selectedLocation.lng}
            </p>
            )}
      </div>
    );
  }
}

export default LocationPicker;
