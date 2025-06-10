import {Map} from 'ol';
import {View} from 'ol';
import {Feature} from 'ol';
import * as olProj from 'ol/proj';

const configJSON = await fetch('../../config/config.json').then(response => response.json());

import {layer as tileLayer_PNG} from './Layers/TileLayer_PNG/Layer.js';
import {layer as tileLayer_PBF} from './Layers/TileLayer_PBF/Layer.js';
import {layer as ObjectLayer_Main} from './Layers/ObjectLayer_Main/Layer.js';
import {layer as ObjectLayer_Selection} from './Layers/ObjectLayer_Selection/Layer.js';
import {onPointerMove} from './Layers/ObjectLayer_Selection/Layer.js';

const map = new Map({
  target: 'map',
  view: new View({
    // 37.689134,55.951649,7
    center: olProj.fromLonLat(configJSON.startLonLat),
    zoom: 7,
  }),
  layers: [
    tileLayer_PNG,
    tileLayer_PBF,
    ObjectLayer_Main,
    ObjectLayer_Selection
  ],
});

map.on('pointermove', function (event) {
  ObjectLayer_Selection.getSource().clear();
  //! [get-features]
  const features = map.getFeaturesAtPixel(event.pixel, {
    layerFilter: (layer) => layer === ObjectLayer_Main,
  });
  onPointerMove(event, features);
});

