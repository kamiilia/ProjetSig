import 'v6.1.1-dist/ol.css';
import Map from 'v6.1.1-dist/Map';
import View from 'v6.1.1-dist/View';
import TileLayer from 'v6.1.1-dist/layer/Tile';
import OSM from 'v6.1.1-dist/source/OSM';
import TileWMS from 'v6.1.1-dist/source/TileWMS';

var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: view
});

var arretsTramA = new TileLayer({
  extent: ol.proj.transformExtent([1.900361,47.831579,1.937069,47.92927],'EPSG:4326','EPSG:3857'),
  source: new TileWMS({
    url: 'http://geoserver:8080/geoserver/sigdb/wms',
    params: {'LAYERS': 'sigdb:arrets_tram_A'},
    serverType: 'geoserver'
  })
});

var arretsTramB = new TileLayer({
  extent: ol.proj.transformExtent([1.854195, 47.896812,1.976329,47.911011],'EPSG:4326','EPSG:3857'),
  source: new TileWMS({
    url: 'http://geoserver:8080/geoserver/sigdb/wms',
    params: {'LAYERS': 'sigdb:arrets_tram_B'},
    serverType: 'geoserver'
  })
});


var map = new Map({
  target: 'map',
  layers: [osm,arretsTramA,arretsTramB],
  view: new View({
    center: ol.proj.fromLonLat([0,0]),
    zoom: 10
  })
});
