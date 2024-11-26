// Wait for the DOM to load before executing JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the map and set its view to a geographical point and zoom level
  const map = L.map('map').setView([51.505, -0.09], 13);

  // Add the OpenStreetMap tiles to the map
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // // Add a marker to the map
  // const marker = L.marker([51.505, -0.09]).addTo(map);

  // // Add a popup to the marker
  // marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

  // // Add a circle to the map
  // const circle = L.circle([51.508, -0.11], {
  //   color: 'red',
  //   fillColor: '#f03',
  //   fillOpacity: 0.5,
  //   radius: 500
  // }).addTo(map);

  // // Add a polygon to the map
  // const polygon = L.polygon([
  //   [51.509, -0.08],
  //   [51.503, -0.06],
  //   [51.51, -0.047]
  // ]).addTo(map);

  // // Popup for the circle
  // circle.bindPopup('I am a circle.');
  // polygon.bindPopup('I am a polygon.');

  // // Popup on map click
  // map.on('click', function (e) {
  //   alert(`You clicked the map at ${e.latlng}`);
  // });
});
