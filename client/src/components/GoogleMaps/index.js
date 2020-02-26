import React, {useState} from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";

function Map(){
    const [selectedPlace, setSelectedPlace] =useState(null);
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: 39.106667,
        lng: -94.676392
    });
    const [placeId, setplaceId] = React.useState("");
    
    const center = coordinates
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        setplaceId(results[0].place_id)
        console.log(results[0].place_id)
       
    }; 
    const map = [];
    const request = {
        placeId: placeId,
        fields: ['name', 'formatted_address', 'rating', 'formatted_phone_number','geometry']
    }  
    const service = new window.google.maps.places.PlacesService(map)

    function handlePlacesDetails() {
        service.getDetails(request, function(place, status) {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              var marker = new window.google.maps.Marker({
                map: map,
                position: place.geometry.location
              });
              window.google.maps.event.addListener(marker, 'click', function() {
                window.infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                  'Place ID: ' + place.place_id + '<br>' +
                  place.formatted_address + '</div>');
                window.infowindow.open(map, this);
              });
            }
          });
       
      }   
    return(
        <div>
            <PlacesAutocomplete 
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
                >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                    {/* <p>Latitude: {coordinates.lat}</p>
                    <p>Longitude: {coordinates.lng}</p> */}
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

            <GoogleMap 
                defaultZoom={10} 
                center={center}
            >
                    <Marker 
                        position={
                        new window.google.maps.LatLng(coordinates.lat, coordinates.lng)} 
                        onClick={()=>{
                            setSelectedPlace(address);
                        }}
                    />
                    {selectedPlace && (
                        <InfoWindow
                        position ={{
                            lat: coordinates.lat,
                            lng: coordinates.lng
                        }}
                        onCloseClick={() => {
                            setSelectedPlace(null);
                        }}
                        onClick={handlePlacesDetails}
                        >
                            <div>{address}</div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>
    );
}

const WrappedMap = withScriptjs (withGoogleMap(Map))

export default WrappedMap;
