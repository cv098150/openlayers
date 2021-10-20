import "./style.css";
import GeoJSON from "ol/format/GeoJSON";
import OSM from 'ol/source/OSM';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Draw from "ol/interaction/Draw";
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import XYZ from 'ol/source/XYZ.js';

// 按鈕
let changeBtn = document.getElementById('change');
let drawBtn = document.getElementById('draw');
let reloadBtn = document.getElementById('reload');
let saveBtn = document.getElementById('save');
let showBtn = document.getElementById('show');

// 地圖
let source = new OSM();
let layer = new TileLayer({ source: source });

const map = new Map({
  layers: [layer],
  target: 'map-container',
  view: new View({
    center: fromLonLat([0, 0]),
    zoom: 2,
  }),
});

// 重新載入
reloadBtn.addEventListener('click', function () {
  window.location.reload();
});

// 切換底圖
changeBtn.addEventListener("click", function (event) {
  let type = changeBtn.getAttribute('data-type');

  if (type == 'XYZ') {

    const key = 'xa04PgV20nbT2LNRdFnA';
    const attributions =
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
      '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

    source = new XYZ({
      url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' + key,
      attributions: attributions,
      crossOrigin: 'anonymous',
      tileSize: 512,
    });
    layer.setSource(source);
    changeBtn.setAttribute('data-type', 'OSM');
  } else {
    source = new OSM();

    layer.setSource(source);
    changeBtn.setAttribute('data-type', 'XYZ');
  }
});

// 畫圖
drawBtn.addEventListener("click", function (event) {

  drawBtn.classList.add("active");
  source = new VectorSource();
  layer = new VectorLayer({
    source: source,
  });
  map.addLayer(layer);
  map.addInteraction(
    new Draw({
      type: 'Polygon',
      source: source,
    })
  );
  changeBtn.setAttribute('disabled', 'true');
  drawBtn.setAttribute('disabled', 'true');
  saveBtn.removeAttribute('disabled');
});

// 儲存
let format = new GeoJSON({ featureProjection: 'EPSG:3857' });
saveBtn.addEventListener("click", function (event) {

  drawBtn.classList.remove("active");
  let features = source.getFeatures();
  let json = format.writeFeatures(features);
  postData(json);

  drawBtn.setAttribute('disabled', 'true');
  saveBtn.setAttribute('disabled', 'true');
});

// 顯示
showBtn.addEventListener("click", function () {
  getData();
});


/**
 * 儲存地圖
 */
function postData(data) {

  let mapJson = JSON.stringify(data);

  fetch('api/index.php', {
    method: 'POST',
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    body: mapJson
  })
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(function name(response) {
    alert(response.msg);
  });
}

/**
 * 顯示地圖
 */
function getData() {
  fetch('api/index.php')
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(function name(response) {
    let geojsonObject = response;
    source = new VectorSource({
      features: new GeoJSON().readFeatures(geojsonObject, { featureProjection: 'EPSG:3857' }),
    });
    layer = new VectorLayer({
      source: source,
    });
    
    map.addLayer(layer);
    
  });

}

