// import React from "react";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import useOnclickOutside from "react-cool-onclickoutside";

// const PlacesAutocomplete = () => {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       /* Define search scope here */
//     },
//     debounce: 300,
//   });
//   const ref = useOnclickOutside(() => {
//     // When user clicks outside of the component, we can dismiss
//     // the searched suggestions by calling this method
//     clearSuggestions();
//   });

//   const handleInput = (e) => {
//     // Update the keyword of the input element
//     setValue(e.target.value);
//   };

//   const handleSelect = ({ description }) => () => {
//     // When user selects a place, we can replace the keyword without request data from API
//     // by setting the second parameter as "false"
//     setValue(description, false);
//     clearSuggestions();

//     // Get latitude and longitude via utility functions
//     getGeocode({ address: description })
//       .then((results) => getLatLng(results[0]))
//       .then(({ lat, lng }) => {
//         console.log("📍 Coordinates: ", { lat, lng });
//       })
//       .catch((error) => {
//         console.log("😱 Error: ", error);
//       });
//   };

//   const renderSuggestions = () =>
//     data.map((suggestion) => {
//       const {
//         id,
//         structured_formatting: { main_text, secondary_text },
//       } = suggestion;

//       return (
//         <li key={id} onClick={handleSelect(suggestion)}>
//           <strong>{main_text}</strong> <small>{secondary_text}</small>
//         </li>
//       );
//     });

//   return (
//     <div ref={ref}>
//       <input
//         value={value}
//         onChange={handleInput}
//         disabled={!ready}
//         placeholder="Where are you going?"
//       />
//       {/* We can use the "status" to decide whether we should display the dropdown or not */}
//       {status === "OK" && <ul>{renderSuggestions()}</ul>}
//     </div>
//   );
// };

// export default PlacesAutocomplete;

import * as React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";

import "@reach/combobox/styles.css";
// import "./styles.scss";

export default function App() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
  };

  const renderSuggestions = () => {
    const suggestions = data.map(({ place_id, description }) => (
      <ComboboxOption key={place_id} value={description} />
    ));

    return (
      <>
        {suggestions}
        <li className="logo">
          <img
            src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
            alt="Powered by Google"
          />
        </li>
      </>
    );
  };

  return (
    <div className="App">
      <h1 className="title">USE-PLACES-AUTOCOMPLETE</h1>
      <p className="subtitle">
        React hook for Google Maps Places Autocomplete.
      </p>
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          style={{ width: 300, maxWidth: "90%" }}
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
