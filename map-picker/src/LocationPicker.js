import React, { Component } from 'react';

class LocationPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: null, // To store place details
    };
  }

  componentDidMount() {
    // Initialize the Google Maps map
    // Google map api AIzaSyARvJewxRJX9BLfJo3CsZXFBOz8ZI7AKWM
    const google = window.google; // Accessing the Google Maps API from the window object
    const mapOptions = {
      center: { lat: 8.00, lng: 81.00 }, // We are setting an initial center point in Sri Lanka
      zoom: 8, // We are setting an initial zoom level as 8
    };
    const map = new google.maps.Map(this.mapContainer, mapOptions);

    // Adding a click event listener to the map
    map.setOptions({ draggableCursor: 'crosshair' }); // Set cursor to crosshair
    map.addListener('click', (event) => {
      // Getting the clicked location's coordinates
      const selectedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };

      console.log(selectedLocation);

      // Update the state with the selected location
      this.setState({ selectedLocation });

      // Update the iframe's src attribute with the new coordinates
    const iframe = document.getElementById('embeddedMap');
    iframe.src = `https://www.google.com/maps/embed/v1/place?q=${selectedLocation.lat},${selectedLocation.lng}&key=AIzaSyARvJewxRJX9BLfJo3CsZXFBOz8ZI7AKWM`;
    });
  }

   // Function to update the embedded Google Map with new coordinates
   updateEmbeddedMap = (latitude, longitude) => {
    // Get a reference to the embedded map iframe
    const iframe = document.getElementById('embeddedMap');

    // Generate the URL for the embedded map using the coordinates
    const embeddedMapUrl = `https://www.google.com/maps/@${latitude},${longitude},15z`;

    // Set the iframe's src attribute to the new URL
    iframe.src = embeddedMapUrl;
  };
  render() {
    return (
        <div>
        <div
          ref={(div) => (this.mapContainer = div)}
          style={{ width: '100%', height: '400px' }}
        />
        <div>
          {/* Display place details if available */}
          {this.state.selectedLocationDetails ? (
            <div>
              <h2>Place Details</h2>
              <p>Name: {this.state.selectedLocationDetails.name}</p>
              <p>Address: {this.state.selectedLocationDetails.formatted_address}</p>
              {/* Add more details as needed */}
            </div>
          ) : (
            // Display latitude and longitude if no place details available
            <div>
              <h2>Coordinates</h2>
              <p>Latitude: {this.state.selectedLocation?.lat}</p>
              <p>Longitude: {this.state.selectedLocation?.lng}</p>
            </div>
          )}
        </div>
        {/* Embedded Google Map */}
        <iframe
          id="embeddedMap"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default LocationPicker;
