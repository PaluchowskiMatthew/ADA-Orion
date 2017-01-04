var mapLausanne;
var mapZurich;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function initmaps() {
    console.log("Hello, world!")
    // set up the maps
    mapLausanne = new L.map('map-lausanne');
    mapZurich = new L.map('map-zurich');

	// Set start positions
	mapLausanne.setView([46.5522464,6.6528379], 13);
    mapZurich.setView([47.379991,8.530877], 13);

    // Add openstreetmap layer
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osmLausanne = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		
    var osmZurich = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

	mapLausanne.addLayer(osmLausanne);
    mapZurich.addLayer(osmZurich);

    // Add quartiers overlay
    var quartiersLausanne = new L.GeoJSON.AJAX("js/quartiers_lausanne.geojson", 
        { onEachFeature: function(feature, layer) {
            layer.on('click', function(e) {
                // Do whatever you want here, when the polygon is clicked.
                confirm('Polygon ready to take orders!');
                console.log(feature);
            });
        }
    });
    quartiersLausanne.addTo(mapLausanne);

    // Add quartiers overlay
    var quartiersZurich = new L.GeoJSON.AJAX("js/quartiers_zurich.geojson");       
    quartiersZurich.addTo(mapZurich);

}

initmaps()