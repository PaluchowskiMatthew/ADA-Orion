var ajaxRequest;
var plotlist;
var plotlayers=[];
var geojsonLausanne;
var geoJsonZurich;
var mapL;
var mapZ;

lausanne = {
    name: 'map-lausanne',
    startPos: [46.5522464,6.6528379],
    zoom: 13,
    quartiers: "js/quartiers_lausanne.json",
};

zurich = {
    name: 'map-zurich',
    startPos: [47.379991,8.530877],
    zoom: 13,
    quartiers: "js/quartiers_zurich.json",
};

function osmLayer() {
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

    return osm
}

function style(feature) {
    return {
        //fillColor: getColor(feature.properties.density),
        fillColor: '#FEB24C',
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}

function initmap(map, city){
    map = L.map(city.name).setView(city.startPos, city.zoom);
	
    // Add OpenStreetMap layer
    map.addLayer(osmLayer());

    // EventHandlers
    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 3,
            color: '#666',
            dashArray: '',
            fillOpacity: '0.5'
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }

        info.update(layer.feature.properties);
    }

    function resetHighlight(e) {
        quartiersLayer.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function clickFeature(e) {
        zoomToFeature(e);

        // Do whatever you want here, when the polygon is clicked.
        confirm('Polygon ready to take orders!');
        console.log(feature);
        layer.setStyle({fillColor: '#ff0000'});
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: clickFeature
        });
    }

    // Add quartiers overlay
    quartiersLayer = L.geoJson.ajax(city.quartiers, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

    console.log(quartiersLayer)

    // Custom info control
    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };

    info.update = function (props) {
        this._div.innerHTML = '<h4>Quartier: </h4>' + (props ? '<b>' + props.Quartiername + '</b>' : 'Hoover over a quartier')
    }

    info.addTo(map);
}

initmap(mapL, lausanne);
initmap(mapZ, zurich);
