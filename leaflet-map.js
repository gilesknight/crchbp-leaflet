// IBRA SUB-REGION LEAFLET MAP

//ESRI tiles attribution and URL
var esriLink = '<a href="http://www.esri.com/">ESRI</a>';
var esriURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
var esriAttrib = '&copy; ' + esriLink;

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

// Styles for layers
var unselectedStyle = {
    "color": "#ededed",
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

// var hoverStyle = {
//     "color": "red",
//     "weight": 3,
//     "opacity": 0.5,
//     fillOpacity: 0
// };

var burnScarStyle = {
    "color": "orange",
    "weight": 0,
    "opacity": 1,
    fillOpacity: 0.5
};



// Update style when sub-region selected by mouse click
var prevLayerClicked = null;

function onEachFeature(feature, layer) {
    //bind click
    layer.on({
        click: function(e) {
            if (prevLayerClicked !== null) {
                 map.removeLayer(group);
            }

            group = L.featureGroup().addTo(map);
            var layerClicked = e.target;

            var selected = L.geoJSON(e.target.feature, {style: selectedStyle, interactive: false});
            selected.addTo(group);

            console.log("IBRA Sub-region: " + layerClicked.feature.properties.SUB_CODE_7);  // print selected sub code to console
            prevLayerClicked = layerClicked.feature;
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

// data layers

// burns scar layer

function onEachBurnFeature(feature, layer) {
    layer.on({
        mouseover: function(e) {
            layer.setStyle({weight: 1});
        },
        mouseout: function(e) {
            layer.setStyle({weight: 0});
        }
    });
}

var burnScarLayer = L.geoJSON(
    burnScar, {
        style: burnScarStyle,
        onEachFeature: onEachBurnFeature
    }
).bindPopup( function (layer) {
    var year =  layer.feature.properties.fih_year1;
    var type =  layer.feature.properties.type;
    return "<b>Type:</b> " + type + "<br><b>Year:</b> " + year;
});

// data layers for control
var dataLayers = {
    "Burn scar data": burnScarLayer
};

// add control to map
L.control.layers(null,dataLayers).addTo(map);

