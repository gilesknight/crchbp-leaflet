// IBRA SUB-REGION LEAFLET MAP

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

//ESRI tiles attribution and URL
var esriLink = '<a href="http://www.esri.com/">ESRI</a>';
var esriURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
var esriAttrib = '&copy; ' + esriLink;

//ESRI Places tiles attribution and URL
var esriPlacesLink = '<a href="http://www.esri.com/">ESRI</a>';
var esriPlacesURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
var esriPlacesAttrib = '&copy; ' + esriPlacesLink;

//OSM tiles attribution and URL
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy; ' + osmLink;

//ibra tiles
var burnLink = '<a href="https://catalogue.data.wa.gov.au/dataset/dbca-fire-history">DBCA</a>';
var burn2021URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2021/{z}/{x}/{y}.png';
var burn2020URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2020/{z}/{x}/{y}.png';
var burn2019URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2019/{z}/{x}/{y}.png';
var burn2018URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2018/{z}/{x}/{y}.png';
var burn2017URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2017/{z}/{x}/{y}.png';
var burn2016URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2016/{z}/{x}/{y}.png';
var burn2015URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2015/{z}/{x}/{y}.png';
var burn2014URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2014/{z}/{x}/{y}.png';
var burn2013URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2013/{z}/{x}/{y}.png';
var burn2012URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2012/{z}/{x}/{y}.png';
var burn2011URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2011/{z}/{x}/{y}.png';
var burn2010URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2010/{z}/{x}/{y}.png';
var burn2009URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2009/{z}/{x}/{y}.png';
var burn2008URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2008/{z}/{x}/{y}.png';
var burn2007URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2007/{z}/{x}/{y}.png';
var burn2006URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2006/{z}/{x}/{y}.png';
var burn2005URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2005/{z}/{x}/{y}.png';
var burn2004URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2004/{z}/{x}/{y}.png';
var burn2003URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2003/{z}/{x}/{y}.png';
var burn2002URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2002/{z}/{x}/{y}.png';
var burn2001URL = 'https://bspatial.blob.core.windows.net/burnscar-tiles/mbutil/AUS_2001/{z}/{x}/{y}.png';

var burnAttrib = '&copy; ' + burnLink;

// Create map tiles
var esriMap = L.tileLayer(esriURL, {attribution: esriAttrib});
var esriPlaceMap =  L.tileLayer(esriPlacesURL, {attribution: esriPlacesAttrib});
var osmMap = L.tileLayer(osmURL, {attribution: osmAttrib});
var burn2021Map = L.tileLayer(burn2021URL,{attribution: burnAttrib, time: "2021", maxNativeZoom: 15});
var burn2020Map = L.tileLayer(burn2020URL, {attribution: burnAttrib, time: "2020", maxNativeZoom: 15});
var burn2019Map = L.tileLayer(burn2019URL, {attribution: burnAttrib, time: "2019", maxNativeZoom: 15});
var burn2018Map = L.tileLayer(burn2018URL, {attribution: burnAttrib, time: "2018", maxNativeZoom: 15});
var burn2017Map = L.tileLayer(burn2017URL, {attribution: burnAttrib, time: "2017", maxNativeZoom: 15});
var burn2016Map = L.tileLayer(burn2016URL, {attribution: burnAttrib, time: "2016", maxNativeZoom: 15});
var burn2015Map = L.tileLayer(burn2015URL, {attribution: burnAttrib, time: "2015", maxNativeZoom: 15});
var burn2014Map = L.tileLayer(burn2014URL, {attribution: burnAttrib, time: "2014", maxNativeZoom: 15});
var burn2013Map = L.tileLayer(burn2013URL, {attribution: burnAttrib, time: "2013", maxNativeZoom: 15});
var burn2012Map = L.tileLayer(burn2012URL, {attribution: burnAttrib, time: "2012", maxNativeZoom: 15});
var burn2011Map = L.tileLayer(burn2011URL, {attribution: burnAttrib, time: "2011", maxNativeZoom: 15});
var burn2010Map = L.tileLayer(burn2010URL, {attribution: burnAttrib, time: "2010", maxNativeZoom: 15});
var burn2009Map = L.tileLayer(burn2009URL, {attribution: burnAttrib, time: "2009", maxNativeZoom: 15});
var burn2008Map = L.tileLayer(burn2008URL, {attribution: burnAttrib, time: "2008", maxNativeZoom: 15});
var burn2007Map = L.tileLayer(burn2007URL, {attribution: burnAttrib, time: "2007", maxNativeZoom: 15});
var burn2006Map = L.tileLayer(burn2006URL, {attribution: burnAttrib, time: "2006", maxNativeZoom: 15});
var burn2005Map = L.tileLayer(burn2005URL, {attribution: burnAttrib, time: "2005", maxNativeZoom: 15});
var burn2004Map = L.tileLayer(burn2004URL, {attribution: burnAttrib, time: "2004", maxNativeZoom: 15});
var burn2003Map = L.tileLayer(burn2003URL, {attribution: burnAttrib, time: "2003", maxNativeZoom: 15});
var burn2002Map = L.tileLayer(burn2002URL, {attribution: burnAttrib, time: "2002", maxNativeZoom: 15});
var burn2001Map = L.tileLayer(burn2001URL, {attribution: burnAttrib, time: "2001", maxNativeZoom: 15});

var ibraLayer = L.geoJSON(
    ibra, {
        style: unselectedStyle
        // onEachFeature: onEachFeature
    }
    ).bindTooltip(
        function (layer) {
            return layer.feature.properties.SUB_NAME_7;
        },
        { sticky: true, offset: [10, 0] }
    );
// create map and set view
var map = L.map('map',{layers: [esriMap]}).setView({lon: 133.7751, lat: -25.2744}, 5);

var placesOverlay = {
    "Place names": esriPlaceMap,
    "IBRA": ibraLayer
}

var baseLayers = {
    "ESRI Satellite": esriMap
};



L.control.layers(baseLayers,placesOverlay).addTo(map);



var burnScars = [burn2021Map, burn2020Map, burn2019Map, burn2018Map, burn2017Map, burn2016Map, burn2015Map, burn2014Map, burn2013Map, burn2012Map, burn2011Map, burn2010Map, burn2009Map, burn2008Map, burn2007Map, burn2006Map, burn2005Map, burn2004Map, burn2003Map, burn2002Map, burn2001Map];
layerGroup = L.layerGroup(burnScars);
var sliderControl = L.control.sliderControl({
    layer: layerGroup,
    follow: true
  });
map.addControl(sliderControl);
sliderControl.startSlider();


L.control.Legend({
    position: "bottomright",
    title:'Burn Scar Legend',
    symbolWidth: 348,
    symbolHeight: 200,
    legends: [{
        label:null,
        type: "image",
        url: "img/burnScar.png",
    }]
}).addTo(map);








// Update style when sub-region selected by mouse click
// var prevLayerClicked = null;

// function onEachFeature(feature, layer) {
//     //bind click
//     layer.on({
//         click: function(e) {
//             if (prevLayerClicked !== null) {
//                  map.removeLayer(group);
//             }

//             group = L.featureGroup().addTo(map);
//             var layerClicked = e.target;

//             var selected = L.geoJSON(e.target.feature, {style: selectedStyle, interactive: false});
//             selected.addTo(group);

//             console.log("IBRA Sub-region: " + layerClicked.feature.properties.SUB_CODE_7);  // print selected sub code to console
//             prevLayerClicked = layerClicked.feature;
//         }
//     });
// }



// load ibra regions to map
// ibraLayer.addTo(map);

// update ibra region boundary colour on basemap change
// map.on('baselayerchange', function(e, layer) {
//     if (e.layer.options.attribution == "&copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a>") {
//         ibraLayer.setStyle({color :'#5a5a61'});
//         unselectedStyle.color = '#5a5a61';

//     } else {
//         ibraLayer.setStyle({color :'white'});
//         unselectedStyle.color = 'white';
//     }
// });
