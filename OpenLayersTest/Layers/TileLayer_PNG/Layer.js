// ----------------------------------------------------
// Слой подложки карты в растровом формате
// ----------------------------------------------------


import {Tile as TileLayer} from 'ol/layer';
import OSM from 'ol/source/OSM.js'; // нельзя импортировать весь модуль, т.е. с ним тащистся внешний geotiff, который не грузится

//import * as configJSON from '../../config/config.json';
const configJSON = await fetch('../../config/config.json').then(response => response.json());

export const layer = new TileLayer({
    source: new OSM({
        url: configJSON.tileserver_host + configJSON.tileserver_png_url
        //'http://localhost:8081/styles/test-style/512/{z}/{x}/{y}.png',
    })
});