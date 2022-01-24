// IBRA SUB-REGION LEAFLET MAP

//ESRI tiles attribution and URL
var esriLink = '<a href="http://www.esri.com/">ESRI</a>';
var esriURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
var esriAttrib = '&copy; ' + esriLink;

//OSM tiles attribution and URL
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy; ' + osmLink;

//ibra tiles
var burnLink = '<a href="https://catalogue.data.wa.gov.au/dataset/dbca-fire-history">DBCA</a>';
var burn2021URL = '/data/burnScar2021/{z}/{x}/{y}.png';
var burn2020URL = '/data/burnScar2020/{z}/{x}/{y}.png';
var burn2019URL = '/data/burnScar2019/{z}/{x}/{y}.png';
var burn2018URL = '/data/burnScar2018/{z}/{x}/{y}.png';
var burn2017URL = '/data/burnScar2019/{z}/{x}/{y}.png';
var burnAttrib = '&copy; ' + burnLink;

// Create map tiles
var esriMap = L.tileLayer(esriURL, {attribution: esriAttrib});
var osmMap = L.tileLayer(osmURL, {attribution: osmAttrib});
var burn2021Map = L.tileLayer(burn2021URL, {attribution: burnAttrib, time: "2021"});
var burn2020Map = L.tileLayer(burn2020URL, {attribution: burnAttrib, time: "2020"});
var burn2019Map = L.tileLayer(burn2019URL, {attribution: burnAttrib, time: "2019"});
var burn2018Map = L.tileLayer(burn2018URL, {attribution: burnAttrib, time: "2018"});
// var burn2017Map = L.tileLayer(burn2017URL, {attribution: burnAttrib, time: "2017"});

// create map and set view
var map = L.map('map',{layers: [esriMap]}).setView({lon: 133.7751, lat: -25.2744}, 5);

var baseLayers = {
    "ESRI Satellite": esriMap,
    "OSM Mapnik": osmMap
};

// var burnScars = {
//     "2021": burn2021Map,
//     "2020": burn2020Map,
//     "2019": burn2019Map
// };

L.control.layers(baseLayers).addTo(map);


var burnScars = [burn2021Map, burn2020Map, burn2019Map, burn2018Map];
layerGroup = L.layerGroup(burnScars);
var sliderControl = L.control.sliderControl({
    layer: layerGroup,
    follow: true
  });
map.addControl(sliderControl);
sliderControl.startSlider();


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

var gridStyle = {
    "color": "orange",
    "weight": 0,
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

// function onEachBurnFeature(feature, layer) {
//     layer.on({
//         mouseover: function(e) {
//             layer.setStyle({weight: 1});
//         },
//         mouseout: function(e) {
//             layer.setStyle({weight: 0});
//         }
//     });
// }

// var burnScarLayer = L.geoJSON(
//     burnScar, {
//         style: burnScarStyle,
//         onEachFeature: onEachBurnFeature
//     }
// ).bindPopup( function (layer) {
//     var year =  layer.feature.properties.fih_year1;
//     var type =  layer.feature.properties.type;
//     return "<b>Type:</b> " + type + "<br><b>Year:</b> " + year;
// });


// function onEachGridFeature(feature, layer) {
//     layer.on({
//         mouseover: function(e) {
//             layer.setStyle({weight: 1});
//         },
//         mouseout: function(e) {
//             layer.setStyle({weight: 0});
//         }
//     });
// }


// var grid = L.geoJSON(grid, {
//     style: gridStyle,
//     onEachFeature: onEachGridFeature
// });

// grid.addTo(map);


// data layers for control
// var dataLayers = {
//     "Burn scar data": burnScarLayer
//     // "Burn grid": grid
// };

// // add control to map
// L.control.layers(dataLayers).addTo(map);





// var oneoneoneone = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
//   layers: 'map:1111',
//   transparent: true,
//   version: '1.1.0',
//   format: 'image/png',
//   time: '1111'
// });

// var oneoneonetwo = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
//   layers: 'map:1112',
//   transparent: true,
//   version: '1.1.0',
//   format: 'image/png',
//   time: '1112'
// });

// var years = [oneoneoneone, oneoneonetwo];
// layerGroup = L.layerGroup(years);
// var sliderControl = L.control.sliderControl({
//   layer: layerGroup,
//   follow: true
// });
// map.addControl(sliderControl);
// sliderControl.startSlider();