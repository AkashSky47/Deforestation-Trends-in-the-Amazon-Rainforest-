
// Load the Hansen Global Forest Change dataset as an Image
var dataset = ee.Image('UMD/hansen/global_forest_change_2023_v1_11');

// Select the forest loss year band
var forestLossYear = dataset.select('lossyear');

// Define the coordinates for your new Area of Interest (AOI)
var aoi = ee.Geometry.Polygon([
  [
    [-60.18796207235581, -3.2557682921982174],
    [-59.82815982626206, -3.2557682921982174],
    [-59.82815982626206, -2.9211724598231332],
    [-60.18796207235581, -2.9211724598231332],
    [-60.18796207235581, -3.2557682921982174]  
  ]
]);

// Center the map on the new AOI
Map.centerObject(aoi, 6);  
Map.addLayer(aoi, {color: 'blue'}, 'New Area of Interest');

// Clip the forest loss year data to your new AOI
var lossYearInNewAOI = forestLossYear.clip(aoi);

// Display the clipped forest loss data on the map
Map.addLayer(lossYearInNewAOI, {min: 0, max: 23, palette: ['white', 'red']}, 'Forest Loss Year in New AOI');

// Export the forest loss year data for the new AOI to Google Drive as a GeoTIFF
Export.image.toDrive({
  image: lossYearInNewAOI,
  description: 'ForestLossYear_NewAOI',
  scale: 30, 
  region: aoi,
  fileFormat: 'GeoTIFF'
});
