import React from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

function Map() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  // let request = {
  //   placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
  //   fields: ['name', 'formatted_address', 'place_id', 'geometry']
  // };

  // var infowindow = new google.maps.InfoWindow();
  // var service = new google.maps.places.PlacesService(map);

  // service.getDetails(request, function(place, status) {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     var marker = new google.maps.Marker({
  //       map: map,
  //       position: place.geometry.location
  //     });
  //     google.maps.event.addListener(marker, 'click', function() {
  //       infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
  //         'Place ID: ' + place.place_id + '<br>' +
  //         place.formatted_address + '</div>');
  //       infowindow.open(map, this);
  //     });
  //   }
  // });
  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
          <input {...getInputProps({ placeholder: "Type address" })} />
          <div>
            {loading ? <div>...loading</div> : null}

            {suggestions.map(suggestion => {
              const style = {
                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
              };
              console.log(suggestions);

              return (
                <div {...getSuggestionItemProps(suggestion, { style })}>
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
export default Map;
