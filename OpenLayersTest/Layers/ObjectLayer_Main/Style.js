import {Style} from 'ol/style';
import {Circle as CircleStyle} from 'ol/style';
import {Stroke as StrokeStyle} from 'ol/style';
import {Fill as FillStyle} from 'ol/style';


const image = new CircleStyle({
    radius: 5,
    fill: null,
    stroke: new StrokeStyle({color: 'red', width: 1}),
  });    
  
  export const styles = {
    // ------------------------------------------------------  
    // стили для features
    // ------------------------------------------------------
    'highway-motorway-toll': new Style({
        stroke: new StrokeStyle({
          color: 'red',
          width: 3,
        }),
      }),  
    // ------------------------------------------------------  
    // обычные стили по умолчанию для геометрических объектов  
    // ------------------------------------------------------
    'Point': new Style({
      image: image,
    }),
    'LineString': new Style({
      stroke: new StrokeStyle({
        color: 'green',
        width: 1,
      }),
    }),
    'MultiLineString': new Style({
      stroke: new StrokeStyle({
        color: 'green',
        width: 1,
      }),
    }),
    'MultiPoint': new Style({
      image: image,
    }),
    'MultiPolygon': new Style({
      stroke: new StrokeStyle({
        color: 'yellow',
        width: 1,
      }),
      fill: new FillStyle({
        color: 'rgba(255, 255, 0, 0.1)',
      }),
    }),
    'Polygon': new Style({
      stroke: new StrokeStyle({
        color: 'blue',
        lineDash: [4],
        width: 3,
      }),
      fill: new FillStyle({
        color: 'rgba(0, 0, 255, 0.1)',
      }),
    }),
    'GeometryCollection': new Style({
      stroke: new StrokeStyle({
        color: 'magenta',
        width: 2,
      }),
      fill: new FillStyle({
        color: 'magenta',
      }),
      image: new CircleStyle({
        radius: 10,
        fill: null,
        stroke: new StrokeStyle({
          color: 'magenta',
        }),
      }),
    }),
    'Circle': new Style({
      stroke: new StrokeStyle({
        color: 'red',
        width: 2,
      }),
      fill: new FillStyle({
        color: 'rgba(255,0,0,0.2)',
      }),
    }),
  };

