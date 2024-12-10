const DefaultLocationForMap = {
  LAT: 59.538,
  LNG: 31.448,
};

const OPACITY_INACTIVE = 0.5;
const OPACITY_ACTIVE = 1.0;

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
  evt.target.setOpacity(OPACITY_ACTIVE);
};

const onMarkerMouseOut = (evt) => {
  evt.target.setOpacity(OPACITY_INACTIVE);
};

const createMarker = (city) => {
  const marker = L.marker(
    {
      lat: city.coordinates.latitude,
      lng: city.coordinates.longitude
    },
  );

  marker.addTo(markerGroup)
    .setOpacity(OPACITY_INACTIVE)
    .on('mouseover', onMarkerMouseOver)
    .on('mouseout', onMarkerMouseOut);
};

const renderMarkers = (favoritesCities) => favoritesCities.forEach((favoriteCity) => createMarker(favoriteCity));

const removeMarkers = () => {
  markerGroup.clearLayers();
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

export { renderMarkers, removeMarkers, changeMapView, setDefaultMapView };
