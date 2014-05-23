var L=require('leaflet');
L.Icon.Default.imagePath='node_modules/leaflet/dist/images/';
var map=L.map('map');
map.setView([47.63,-122.32],11);
var attribution='Map data ';

var tiles='http://{s}.tiles.mapbox.com/v3/mattpayneorg.iafgphf3/{z}/{x}/{y}.png';

L.tileLayer(tiles,{maxZoom:18,attribution:attribution}).addTo(map);

