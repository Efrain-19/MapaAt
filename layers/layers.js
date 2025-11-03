var wms_layers = [];


        var lyr_WazeIsrael_0 = new ol.layer.Tile({
            'title': 'Waze (Israel)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://il-livemap-tiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_Concepcincomuna_1 = new ol.format.GeoJSON();
var features_Concepcincomuna_1 = format_Concepcincomuna_1.readFeatures(json_Concepcincomuna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concepcincomuna_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concepcincomuna_1.addFeatures(features_Concepcincomuna_1);
var lyr_Concepcincomuna_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Concepcincomuna_1, 
                style: style_Concepcincomuna_1,
                popuplayertitle: 'Concepción — comuna',
                interactive: false,
                title: '<img src="styles/legend/Concepcincomuna_1.png" /> Concepción — comuna'
            });
var format_Cortado_2 = new ol.format.GeoJSON();
var features_Cortado_2 = format_Cortado_2.readFeatures(json_Cortado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cortado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cortado_2.addFeatures(features_Cortado_2);
var lyr_Cortado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cortado_2, 
                style: style_Cortado_2,
                popuplayertitle: 'Cortado',
                interactive: false,
                title: '<img src="styles/legend/Cortado_2.png" /> Cortado'
            });
var format_Atropellos_Concepcin_3 = new ol.format.GeoJSON();
var features_Atropellos_Concepcin_3 = format_Atropellos_Concepcin_3.readFeatures(json_Atropellos_Concepcin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atropellos_Concepcin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atropellos_Concepcin_3.addFeatures(features_Atropellos_Concepcin_3);
var lyr_Atropellos_Concepcin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Atropellos_Concepcin_3, 
                style: style_Atropellos_Concepcin_3,
                popuplayertitle: 'Atropellos_Concepción',
                interactive: true,
    title: 'Atropellos_Concepción<br />\
    <img src="styles/legend/Atropellos_Concepcin_3_0.png" /> Fallecidos<br />\
    <img src="styles/legend/Atropellos_Concepcin_3_1.png" /> Graves<br />\
    <img src="styles/legend/Atropellos_Concepcin_3_2.png" /> Menos Graves<br />\
    <img src="styles/legend/Atropellos_Concepcin_3_3.png" /> Leves<br />\
    <img src="styles/legend/Atropellos_Concepcin_3_4.png" /> Ilesos<br />' });

lyr_WazeIsrael_0.setVisible(true);lyr_Concepcincomuna_1.setVisible(true);lyr_Cortado_2.setVisible(true);lyr_Atropellos_Concepcin_3.setVisible(true);
var layersList = [lyr_WazeIsrael_0,lyr_Concepcincomuna_1,lyr_Cortado_2,lyr_Atropellos_Concepcin_3];
lyr_Concepcincomuna_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'NOM_REGION': 'NOM_REGION', 'NOM_PROVIN': 'NOM_PROVIN', 'NOM_COMUNA': 'NOM_COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Cortado_2.set('fieldAliases', {'fid': 'fid', 'shape_leng': 'shape_leng', 'st_length_': 'st_length_', 'Nom_Ruta': 'Nom_Ruta', 'Rol_Mop': 'Rol_Mop', 'Clase_Ruta': 'Clase_Ruta', 'Tipo_Carpe': 'Tipo_Carpe', 'Catego': 'Catego', 'Cod_Region': 'Cod_Region', });
lyr_Atropellos_Concepcin_3.set('fieldAliases', {'fid': 'fid', 'Ano': 'Ano', 'Cod_Region': 'Cod_Region', 'Cod_Comuna': 'Cod_Comuna', 'Comuna': 'Comuna', 'TipoAccdte': 'TipoAccdte', 'Zona': 'Zona', 'Fallecidos': 'Fallecidos', 'Graves': 'Graves', 'Menos_Grav': 'Menos_Grav', 'Leves': 'Leves', 'Ilesos': 'Ilesos', 'CalleUno': 'CalleUno', 'CalleDos': 'CalleDos', 'Numero': 'Numero', 'lat': 'lat', 'lng': 'lng', 'Atropellos': 'Atropellos', });
lyr_Concepcincomuna_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'NOM_REGION': 'TextEdit', 'NOM_PROVIN': 'TextEdit', 'NOM_COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Cortado_2.set('fieldImages', {'fid': 'TextEdit', 'shape_leng': 'TextEdit', 'st_length_': 'TextEdit', 'Nom_Ruta': 'TextEdit', 'Rol_Mop': 'TextEdit', 'Clase_Ruta': 'Range', 'Tipo_Carpe': 'TextEdit', 'Catego': 'TextEdit', 'Cod_Region': 'Range', });
lyr_Atropellos_Concepcin_3.set('fieldImages', {'fid': 'TextEdit', 'Ano': 'Range', 'Cod_Region': 'Range', 'Cod_Comuna': 'Range', 'Comuna': 'TextEdit', 'TipoAccdte': 'Range', 'Zona': 'TextEdit', 'Fallecidos': 'Range', 'Graves': 'Range', 'Menos_Grav': 'Range', 'Leves': 'Range', 'Ilesos': 'Range', 'CalleUno': 'TextEdit', 'CalleDos': 'TextEdit', 'Numero': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'Atropellos': 'Range', });
lyr_Concepcincomuna_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'NOM_REGION': 'no label', 'NOM_PROVIN': 'no label', 'NOM_COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_Cortado_2.set('fieldLabels', {'fid': 'no label', 'shape_leng': 'no label', 'st_length_': 'no label', 'Nom_Ruta': 'no label', 'Rol_Mop': 'no label', 'Clase_Ruta': 'no label', 'Tipo_Carpe': 'no label', 'Catego': 'no label', 'Cod_Region': 'no label', });
lyr_Atropellos_Concepcin_3.set('fieldLabels', {'fid': 'hidden field', 'Ano': 'hidden field', 'Cod_Region': 'hidden field', 'Cod_Comuna': 'hidden field', 'Comuna': 'hidden field', 'TipoAccdte': 'hidden field', 'Zona': 'hidden field', 'Fallecidos': 'inline label - always visible', 'Graves': 'inline label - always visible', 'Menos_Grav': 'inline label - always visible', 'Leves': 'inline label - always visible', 'Ilesos': 'inline label - always visible', 'CalleUno': 'inline label - always visible', 'CalleDos': 'inline label - always visible', 'Numero': 'inline label - always visible', 'lat': 'inline label - always visible', 'lng': 'inline label - always visible', 'Atropellos': 'inline label - always visible', });
lyr_Atropellos_Concepcin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});