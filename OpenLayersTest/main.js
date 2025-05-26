import Map from './node_modules/ol/Map.js';
import View from './node_modules/ol/View.js';
import TileLayer from './node_modules/ol/layer/Tile.js';
import OSM from './node_modules/ol/source/OSM.js';
import VectorTileLayer from './node_modules/ol/layer/VectorTile.js';
import MVT from './node_modules/ol/format/MVT.js';
import VectorTileSource from './node_modules/ol/source/VectorTile.js';
import {fromLonLat} from './node_modules/ol/proj.js';
import {applyStyle} from './node_modules/ol-mapbox-style/src/index.js';
import {applyBackground} from './node_modules/ol-mapbox-style/src/index.js';
import Fill from 'ol/style/Fill.js';
import Icon from 'ol/style/Icon.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';
import Text from 'ol/style/Text.js';

const startLonLat = [37.689134,55.951649];
const startMercator = fromLonLat(startLonLat);

const style = await fetch('http://localhost:8081/styles/maptiler-basic/style.json').then(response => response.text());

var layer = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: 'http://localhost:8081/data/openmaptiles/{z}/{x}/{y}.pbf',
      }),
      //style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)
      //style: style

    });
applyStyle(layer, 'http://localhost:8081/styles/maptiler-basic/style.json');
//applyStyle(layer, 'mapbox://styles/mapbox/bright-v9');


const map = new Map({
  target: 'map',
  view: new View({
    // 37.689134,55.951649,7
    center: startMercator,
    zoom: 7,
  }),
  layers: [
    layer,
  ],
});
//var layer = map.getLayers().array_[0];
//applyStyle(layer, 'http://localhost:8081/styles/maptiler-basic/style.json', {accessToken: 'YOUR_MAPBOX_TOKEN'});
//applyBackground(layer, 'http://localhost:8081/styles/maptiler-basic/style.json', {accessToken: 'YOUR_MAPBOX_TOKEN'});
