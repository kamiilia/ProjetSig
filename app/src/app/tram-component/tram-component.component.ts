import { Component, OnInit } from '@angular/core';

import Feature from 'ol/Feature';

import Geolocation from 'ol/Geolocation';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource, TileWMS} from 'ol/source';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {fromLonLat} from 'ol/proj';

@Component({
  selector: 'app-arrets-tram',
  templateUrl: './tram-component.component.html',
  styleUrls: ['./tram-component.component.scss'],
})
export class TramComponentComponent implements OnInit {

  map: Map;

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const view = new View({
      center: fromLonLat([1.900361, 47.831579]),
      zoom: 10
    });

    const geolocation = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true
      },
      projection: view.getProjection()
    });
    geolocation.setTracking(true);

    const accuracyFeature = new Feature();
    geolocation.on('change:accuracyGeometry', () => {
      accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    const positionFeature = new Feature();
    positionFeature.setStyle(new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({
          color: '#3399CC'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2
        })
      })
    }));

    geolocation.on('change:position', () => {
      const coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ?
          new Point(coordinates) : null);
    });

    const osm = new TileLayer({
      source: new OSM()
    });
    const arretsTramB = new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/sigdb/wms',
        params: {layers: 'sigdb:arrets_tram_B'},
        serverType: 'geoserver'
      })
    });
    const arretsTramA = new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/sigdb/wms',
        params: {layers: 'sigdb:arrets_tram_A'},
        serverType: 'geoserver'
      })
    });


    this.map = new Map({
      layers: [osm, arretsTramB,arretsTramA],
      target: 'arrets-tram',
      view
    });

    new VectorLayer({
      map: this.map,
      source: new VectorSource({
        features: [accuracyFeature, positionFeature]
      })
    });

    setTimeout(() => {
      this.map.updateSize();
    }, 500);
  }

}
