// IBRA SUB-REGION LEAFLET MAP

//ESRI tiles attribution and URL
var esriLink = '<a href="http://www.esri.com/">Esri</a>';
var esriURL = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
var esriAttrib = '&copy; ' + osmLink;

//OSM tiles attribution and URL
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy; ' + osmLink;

// Create map tiles
var esriMap = L.tileLayer(esriURL, {attribution: esriAttrib});
var osmMap = L.tileLayer(osmURL, {attribution: osmAttrib});

// create map and set view
var map = L.map('map',{layers: [esriMap]}).setView({lon: 133.7751, lat: -25.2744}, 5);

var baseLayers = {
    "ESRI Satellite": esriMap,
    "OSM Mapnik": osmMap
};
L.control.layers(baseLayers).addTo(map);


// show the scale bar on the lower left corner
L.control.scale({imperial: false, metric: true}).addTo(map);

// Styles for ibra regions when selected/unselected
var unselectedStyle = {
    "color": "white",
    "weight": 1,
    "opacity": 1,
    fillOpacity: 0
};

var selectedStyle = {
    "color": "red",
    "weight": 2,
    "opacity": 1,
    fillOpacity: 0
};

// Update style when sub-region selected by mouse click
var prevLayerClicked = null;
function onEachFeature(feature, layer) {
    //bind click
    layer.on({
        click: function(e) {
            if (prevLayerClicked !== null) {
                prevLayerClicked.setStyle(
                    unselectedStyle
                );
            }
            var layerClicked = e.target;
            layerClicked.bringToFront();
            layerClicked.setStyle(
                selectedStyle
            );
            console.log("IBRA Sub-region: " + layerClicked.feature.properties.SUB_CODE_7);  // print selected sub code to console
            prevLayerClicked = layerClicked;
        }
    });
}

var ibraLayer = L.geoJSON(
    ibra, {
        style: unselectedStyle,
        onEachFeature: onEachFeature
    }
    ).bindTooltip(
        function (layer) {
            return layer.feature.properties.SUB_NAME_7;
        },
        { sticky: true, offset: [10, 0] }
    );

// load ibra regions to map
ibraLayer.addTo(map);

// update ibra region boundary colour on basemap change
map.on('baselayerchange', function(e, layer) {
    if (e.layer.options.attribution == "&copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a>") {
        ibraLayer.setStyle({color :'#5a5a61'});
        unselectedStyle.color = '#5a5a61';

    } else {
        ibraLayer.setStyle({color :'white'});
        unselectedStyle.color = 'white';
    }
});





