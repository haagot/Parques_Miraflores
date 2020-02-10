var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_parques_1 = new ol.format.GeoJSON();
var features_parques_1 = format_parques_1.readFeatures(json_parques_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parques_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parques_1.addFeatures(features_parques_1);
var lyr_parques_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parques_1, 
                style: style_parques_1,
                interactive: true,
                title: '<img src="styles/legend/parques_1.png" /> parques'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_parques_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_parques_1];
lyr_parques_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', '__gid': '__gid', 'catastral': 'catastral', 'parque': 'parque', 'descriptio': 'descriptio', 'plano': 'plano', 'cuadrante': 'cuadrante', 'areas': 'areas', 'descripc': 'descripc', 'nombre': 'nombre', 'id': 'id', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_parques_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', '__gid': 'TextEdit', 'catastral': 'TextEdit', 'parque': 'TextEdit', 'descriptio': 'TextEdit', 'plano': 'TextEdit', 'cuadrante': 'TextEdit', 'areas': 'TextEdit', 'descripc': 'TextEdit', 'nombre': 'TextEdit', 'id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_parques_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', '__gid': 'no label', 'catastral': 'no label', 'parque': 'header label', 'descriptio': 'header label', 'plano': 'no label', 'cuadrante': 'no label', 'areas': 'no label', 'descripc': 'no label', 'nombre': 'no label', 'id': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_parques_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});