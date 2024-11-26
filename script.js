// Wait for the DOM to load before executing JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the map and set its view to a geographical point and zoom level
  const map = L.map('map').setView([43.599787, -79.64447], 13);

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

  // Add a polygon to the map
  const High_Building_Footprint = L.polygon(
      [
        [43.558625, -79.707104],
        [43.535483, -79.73321],
        [43.582505, -79.79727],
        [43.595809, -79.782303],
        [43.598295, -79.763411]
      ],
      {
        color: 'black',        // Outline color
        fillColor: 'black',  // Fill color
        fillOpacity: 0.5,     // Fill transparency
        weight: 3             // Outline thickness
      }
    ).addTo(map);

    // Add a polygon to the map
  const Natural_Area = L.polygon(
      [
        [43.559807, -79.61678],
        [43.556324, -79.620859],
        [43.554613, -79.614462],
        [43.558034, -79.61064],
        [43.557381, -79.613431]
      ],
      {
        color: 'Green',        // Outline color
        fillColor: 'Green',  // Fill color
        fillOpacity: 0.5,     // Fill transparency
        weight: 3             // Outline thickness
      }
    ).addTo(map);

  // // Popup for the circle
  // circle.bindPopup('I am a circle.');
  // polygon.bindPopup('I am a polygon.');

  High_Building_Footprint.bindPopup('I am a zone with a high building footprint! I have low biodiversity,\
      so I would benefit from green rooftops! My data comes from the Building_Footprints dataset!');

  Natural_Area.bindPopup('I am natural zone sanctioned by the city! I already am very green, so I do not really need \
      any green rooftops nearby. Instead cheaper white or blue rooftops can be installed to save money. My data comes from the Natural_Area_System_(NAS) Dataset');

  // Popup on map click
  map.on('click', function (e) {
      alert(`You clicked the map at ${e.latlng}`);
  });
});
