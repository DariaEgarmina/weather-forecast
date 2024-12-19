import { getCityId } from './utils.js';
import { selectActiveCard, deselectActiveCard, findActiveCityId } from './interaction.js';

const DefaultLocationForMap = {
  LAT: 59.538,
  LNG: 31.448,
};

const OPACITY_INACTIVE = 0.5;
const OPACITY_ACTIVE = 1.0;

const markers = [];
const mapBounds = [];

const map = L.map('map')
  .setView({
    lat: DefaultLocationForMap.LAT,
    lng: DefaultLocationForMap.LNG,
  }, 8);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const onMarkerMouseOver = (evt) => {
  const markerTitle = getCityId(evt.target.options.title);
  evt.target.setOpacity(OPACITY_ACTIVE);
  selectActiveCard(markerTitle);
};

const onMarkerMouseOut = (evt) => {
  const markerTitle = getCityId(evt.target.options.title);
  const activeCardId = findActiveCityId();
  if (markerTitle !== activeCardId) {
    evt.target.setOpacity(OPACITY_INACTIVE);
  }
  deselectActiveCard(markerTitle);
};

const createMarker = (city) => {
  const marker = L.marker(
    {
      lat: city.coordinates.latitude,
      lng: city.coordinates.longitude
    },
    {
      title: city.city
    },
  );

  marker.addTo(markerGroup)
    .setOpacity(OPACITY_INACTIVE)
    .on('mouseover', onMarkerMouseOver)
    .on('mouseout', onMarkerMouseOut);

  return marker;
};

const renderMarkers = (favoritesCities) => favoritesCities.forEach((favoriteCity) => {
  const marker = createMarker(favoriteCity);
  markers.push(marker);
});

const removeMarkers = () => {
  markerGroup.clearLayers();

  markers.length = 0;
};

const changeMapView = (city) => {
  map.setView({
    lat: parseFloat(city.coordinates.latitude.toFixed(3)),
    lng: parseFloat(city.coordinates.longitude.toFixed(3)),
  }, 6);
};

const setDefaultMapView = () => {
  map.setView({
    lat: DefaultLocationForMap.LAT,
    lng: DefaultLocationForMap.LNG,
  }, 8);
};

const selectActiveMarker = (activeCityId) => {
  const activeMarker = markers.find((marker) => getCityId(marker.options.title) === activeCityId);
  activeMarker.setOpacity(OPACITY_ACTIVE);
};

const deselectActiveMarker = () => {
  markers.forEach((marker) => {
    if (marker.options.opacity === OPACITY_ACTIVE) {
      marker.setOpacity(OPACITY_INACTIVE);
    }
  });
};

const deselectActiveMarkerWhenHoverCity = (activeCityId) => {
  markers.forEach((marker) => {
    if (getCityId(marker.options.title) === activeCityId) {
      marker.setOpacity(OPACITY_INACTIVE);
    }
  });
};

const createMapBounds = () => {
  mapBounds.length = 0;

  markers.forEach((marker) => {
    const markerCoordinates = [];
    markerCoordinates.push(marker.getLatLng().lat);
    markerCoordinates.push(marker.getLatLng().lng);
    mapBounds.push(markerCoordinates);
  });

  return mapBounds;
};

const fitMapBoundsToAllMarkers = () => {
  const bounds = createMapBounds();
  map.fitBounds(
    bounds,
    {
      maxZoom: 8
    },
  );
};

export { renderMarkers, removeMarkers, changeMapView, setDefaultMapView, selectActiveMarker, deselectActiveMarker, deselectActiveMarkerWhenHoverCity, fitMapBoundsToAllMarkers };
