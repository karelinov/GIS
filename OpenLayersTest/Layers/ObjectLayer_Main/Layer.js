// ----------------------------------------------------
// Слой карты с (векторными) объектами системы
// ----------------------------------------------------

import {Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector.js'; // нельзя импортировать весь модуль, т.е. с ним тащистся внешний geotiff, который не грузится
import {GeoJSON} from 'ol/format';
import {styles} from './Style.js';


export const layer = new VectorLayer({
    source: new VectorSource({
        format: new GeoJSON(),
        url: './Layers/ObjectLayer_Main/data/mh.geojson',
        /* 
        features: new GeoJSON().readFeatures(geojsonObject)
        */
    }),
    style: function (feature) {
        if (feature.getProperties()['highway'] === 'motorway' && feature.getProperties()['toll'] === 'yes') {
            return styles['highway-motorway-toll'];
        }
        else
            return styles[feature.getGeometry().getType()];
    }
});
