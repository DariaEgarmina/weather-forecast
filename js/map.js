const DefaultLocationForMap = {
  LAT: 59.538,
  LNG: 31.448,
};

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

const createMarker = (city) => {
  const marker = L.marker(
    {
      lat: city.coordinates.latitude,
      lng: city.coordinates.longitude
    },
  );

  marker.addTo(markerGroup);
};

const renderMarkers = (favoritesCities) => favoritesCities.forEach((favoriteCity) => createMarker(favoriteCity));

const removeMarkers = (favoritesCities) => {
  markerGroup.clearLayers();
  renderMarkers(favoritesCities);
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
