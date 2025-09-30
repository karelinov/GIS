// ----------------------------------------------------
// Слой подложки карты в векторном формате
// ----------------------------------------------------


import {VectorTile as VectorTileLayer} from 'ol/layer';
import VectorTileSource from 'ol/source/VectorTile.js'; // нельзя импортировать весь модуль, т.е. с ним тащистся внешний geotiff, который не грузится
import {MVT} from 'ol/format';

//import * as configJSON from '../../config/config.json';
const configJSON = await fetch('../../config/config.json').then(response => response.json());

export const layer = new VectorTileLayer({
    declutter: true,
    source: new VectorTileSource({
        format: new MVT(),
        url: configJSON.tileserver_host + configJSON.tileserver_pbf_url
    }),
    //style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)
    //style: style

});
