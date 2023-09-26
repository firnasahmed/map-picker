# Getting Started with MapPicker React App

This project was bootstrapped with [MapPicker React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

.

# @firnas/map-picker - NPM Library

A versatile React component for picking a location on Google Maps and displaying the address as text.

- You can see the demo here https://youtu.be/gcF4ACea_fk

## Installation

You can install `@firnas/map-picker` via npm or yarn:

```sh
npm install @firnas/map-picker
```
or
```sh
yarn add @firnas/map-picker
```

## Usage
Here's how you can use `@firnas/map-picker` in your React application:

```sh
import React from 'react';
import MapPicker from '@firnas/map-picker';

function MyComponent() {
  const handleLocationPick = (location) => {
    console.log('Map Picker Example:', location);
  };

  return (
    <div>
      <h1>Map Picker Example</h1>
      <MapPicker onLocationPick={handleLocationPick} />
    </div>
  );
}

export default MyComponent;
```

### Props
`onLocationPick` (function): A callback function that is called when a location is picked on the map. It receives the picked location as a parameter.


## Configuration
You can customize the behavior of `@firnas/map-picker` by passing configuration options as props. For example:

```sh
<MapPicker
  onLocationPick={handleLocationPick}
  initialLocation={{ lat: 123, lng: 456 }}
  zoom={15}
  apiKey="google-maps-api-key"
/>
```

### Available Props
- `onLocationPick` (function): Callback function for location picking.
- `initialLocation` (object): The initial location to display on the map.
- `zoom` (number): The initial zoom level of the map.
- `apiKey` (string): Your Google Maps API key (required for map functionality).


### Acknowledgments
Thanks for evryone.


Developed by [Firnas Ahamed](https://firnasahmed.github.io/me)

