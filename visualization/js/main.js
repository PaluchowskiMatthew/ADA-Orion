var mapLausanne;
var mapZurich;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function initmaps() {
    console.log("Hello, Westworld!")
    // set up the maps
    mapLausanne = new L.map('map-lausanne');
    mapZurich = new L.map('map-zurich');

	// Set start positions
	mapLausanne.setView([46.5522464,6.6528379], 13);
    mapZurich.setView([47.379991,8.530877], 13);

    zh_to_laus = [7, 14,  8,  8,  5, 15,  5,  5, 15,  7,  8,  5,  8, 10,  1,  0,  2, 5, 11,  1, 13,  0,  0,  7,  7, 11, 11,  3,  0, 13, 13, 13,  4,  4]
    laus_to_zh = [28, 19, 19, 27,  7, 19, 23,  9,  2, 19, 19, 19, 11, 29,  1, 26,  7, 29]

    // Add openstreetmap layer
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osmLausanne = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		
    var osmZurich = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

	mapLausanne.addLayer(osmLausanne);
    mapZurich.addLayer(osmZurich);

    // Reference carrier for layers
    laus_idx = []
    zh_idx = []

    function resetPolygons(){ 
    all_layers = zh_idx.concat(laus_idx);
    for(var lref in all_layers){
        all_layers[lref].setStyle({fillColor: '#FFFFFF'});
        }
    }


    // Add quartiers overlay
    var quartiersLausanne = new L.GeoJSON.AJAX("js/quartiers_lausanne.geojson", 
        { onEachFeature: function(feature, layer) {
            laus_idx.push(layer);

            layer.on('click', function(e) {
                resetPolygons()

                origin = laus_idx.indexOf(layer);
                target = laus_to_zh[origin];
                leaf_target = zh_idx[target];
                layer.setStyle({fillColor: '#00ff00'});
                leaf_target.setStyle({fillColor: '#ff0000'});
            });
        }
    });
    quartiersLausanne.addTo(mapLausanne);

   
    // Add quartiers overlay
    var quartiersZurich = new L.GeoJSON.AJAX("js/quartiers_zurich.geojson", 
        { onEachFeature: function(feature, layer) {
            zh_idx.push(layer);

            layer.on('click', function(e) {
                resetPolygons()

                origin = zh_idx.indexOf(layer)
                target = zh_to_laus[origin]
                leaf_target = laus_idx[target]
                layer.setStyle({fillColor: '#00ff00'});
                leaf_target.setStyle({fillColor: '#ff0000'});
            });
        }
    });
    quartiersZurich.addTo(mapZurich);

}

initmaps()