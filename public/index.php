<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>OpenLayers</title>
    <style>
        html,
        body,
        #map-container {
            margin: 0;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: #04041b;
        }

        #tools {
            position: absolute;
            z-index: 1;
            top: 1rem;
            right: 1rem;
        }

        #tools button {
            display: inline-block;
            padding: 0.5rem;
            margin-left: 5px;
            background: white;
            cursor: pointer;
            border: 1px #fffeef solid;
            border-radius: 2px;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        }
        #tools button:hover, #tools button.active{
            background-color:rgb(0 60 136 / 70%);
            color: #ffffff;
        }
    </style>
  <script type="module" crossorigin src="/assets/index.8f759d96.js"></script>
  <link rel="modulepreload" href="/assets/vendor.308814b4.js">
  <link rel="stylesheet" href="/assets/index.2beb60fa.css">
</head>

<body>
    <div id="tools">
        <button type="button" id="reload">重新載入</button>
        <button type="button" id="change" data-type="XYZ">切換地圖</button>
        <button type="button" id="draw">畫圖</button>
        <button type="button" id="save" disabled>儲存</button>
        <button type="button" id="show">顯示上一筆</button>
    </div>
    <div id="map-container"></div>
    
</body>

</html>