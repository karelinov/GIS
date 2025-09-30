import {Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector.js'; // нельзя импортировать весь модуль, т.е. с ним тащистся внешний geotiff, который не грузится
import {Feature} from 'ol';
import {Point} from 'ol/geom';

// ----------------------------------------------------
// Слой карты с временными (векторными) объектами для интерактивного взаимодействия
// Объекты на данном слое являются копиями объектов системы 
// с другими стилями и дополненные представлениями / информацией
// ----------------------------------------------------


export const layer = new VectorLayer({
  source: new VectorSource(),
  style: {
    'stroke-color': 'blue',
    'stroke-width': 4,
    'text-value': ['coalesce', ['get', 'layers'], ''],
    'text-padding': [2, 2, 2, 2],
    'text-offset-y': -15,
    'text-font': '16px sans-serif',
    'text-background-fill-color': 'gray',
  },
});

export function onPointerMove(event, features) {
  layer.getSource().clear();

  if (features.length > 0) {
    layer.getSource().addFeatures(features);
    //! [layers-label]
    var layers ='';// = features.map((feature) => feature.get('layer'));
    for (var i=0; i< features[0].getProperties().length; i++) {
      if (features[0].getProperties()[features[0].getKeys()[i]] !=='geometry') {
        layers = layers +' '+features[0].getKeys()[i]+'='+features[0].getProperties()[features[0].getKeys()[i]];
      }
    }
    layer.getSource().addFeature(
      new Feature({
        geometry: new Point(event.coordinate),
        layers: layers
      })
    );
  }
}