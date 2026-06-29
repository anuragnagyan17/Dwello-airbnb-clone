
// Grab the map element and its hidden data coordinates
const mapElement = document.getElementById('map');
const coordinates = JSON.parse(mapElement.dataset.coordinates);

// Initialize the map
const map = L.map('map').setView([coordinates[1], coordinates[0]], 13);

// Load the OpenStreetMap 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for the listing
L.marker([coordinates[1], coordinates[0]]).addTo(map)
    .bindPopup(`<b>${locationName}</b><br>Exact location provided after booking.`)
    .openPopup();