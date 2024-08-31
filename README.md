# Manaus-Amazon-Brazil Deforestation

## Objective
- **Visualize Deforestation**: Create a map showing areas affected by deforestation between 2000-2023 using Tableau.
- **Quantify Deforestation**: Analyze the degree of deforestation in the Amazon rainforest.

## Project Components

- **Google Earth Engine (GEE) Script**: Processes and downloads forest loss data as a GeoTIFF file.
  - [View the GEE Script](https://code.earthengine.google.com/?accept_repo=users/akashs23/Manaus-Amazon_deforestation)

- **Data Conversion**: Python script to convert the GeoTIFF file into a CSV format for further analysis.
  - `geotiff_to_csv.py`: Converts the GeoTIFF file (ForestLossYear_NewAOI.tif) into a CSV file (output_file.csv).

- **Data Visualization**: Tableau workbook for visualizing the processed data and analyzing deforestation patterns.
  - `Manaus-Amazon_deforestation.twbx`: Tableau workbook with visualizations of the deforestation analysis.

## Files Included

- `Manaus-Amazon_deforestation_GEE.js`: Google Earth Engine script for processing and downloading forest loss data as a GeoTIFF.
- `ForestLossYear_NewAOI.tif`: GeoTIFF file of forest loss data downloaded using GEE.
- `geotiff_to_csv.py`: Python script for converting the GeoTIFF file to CSV.
- `output_file.csv`: CSV file with processed data from the GeoTIFF file.
- `Manaus-Amazon_deforestation.twbx`: Tableau workbook for data visualization.
- `README.md`: This file, containing project details and instructions.
- `LICENSE`: MIT License for the project.

## How to Use

1. **Google Earth Engine**: Access and run the GEE script using the provided link. This will generate and download the GeoTIFF file.
2. **Python Script**: Execute the `geotiff_to_csv.py` script to convert the downloaded GeoTIFF file (`ForestLossYear_NewAOI.tif`) into a CSV file (`output_file.csv`).
   ```bash
   python geotiff_to_csv.py
3. **Tableau**: Open the `Manaus-Amazon_deforestation.twbx` file in Tableau Desktop or Tableau Public to view and interact with the data visualizations.

## Additional Information
Data Source: The GeoTIFF data is derived from the Global Forest Change dataset provided by Hansen et al., accessed via Google Earth Engine.

## Dependencies:
Google Earth Engine: Required to run the GEE script.
Python: Necessary for running the `geotiff_to_csv.py` script. Ensure that `rasterio` and `pandas` libraries are installed.
Tableau: Needed to open and analyze the `.twbx` file.

## License:
This project is licensed under the MIT License. See the `LICENSE` file for details.
