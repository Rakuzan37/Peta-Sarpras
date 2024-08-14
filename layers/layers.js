var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AdministrasiJanti_1 = new ol.format.GeoJSON();
var features_AdministrasiJanti_1 = format_AdministrasiJanti_1.readFeatures(json_AdministrasiJanti_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiJanti_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiJanti_1.addFeatures(features_AdministrasiJanti_1);
var lyr_AdministrasiJanti_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiJanti_1, 
                style: style_AdministrasiJanti_1,
                popuplayertitle: "Administrasi Janti",
                interactive: true,
                title: '<img src="styles/legend/AdministrasiJanti_1.png" /> Administrasi Janti'
            });
var format_UMKMdanSaranaPrasarana_2 = new ol.format.GeoJSON();
var features_UMKMdanSaranaPrasarana_2 = format_UMKMdanSaranaPrasarana_2.readFeatures(json_UMKMdanSaranaPrasarana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMdanSaranaPrasarana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMdanSaranaPrasarana_2.addFeatures(features_UMKMdanSaranaPrasarana_2);
var lyr_UMKMdanSaranaPrasarana_2 = new ol.layer.Vector({
    declutter: false,
    source:jsonSource_UMKMdanSaranaPrasarana_2, 
    style: style_UMKMdanSaranaPrasarana_2,
    popuplayertitle: "UMKM dan Sarana Prasarana",
    interactive: true,
title: 'UMKM dan Sarana Prasarana<br />\
<img src="styles/working-tools-svgrepo-com.svg" /> (Bengkel)<br />\
<img src="styles/device-smartphone-handphone-svgrepo-com.svg" /> (Counter HP)<br />\
<img src="styles/machine-printer-printing-svgrepo-com.svg" /> (Fotocopy)<br />\
<img src="styles/hospital-building-svgrepo-com.svg" /> (Kesehatan)<br />\
<img src="styles/food-restaurant-svgrepo-com.svg" /> (Kuliner)<br />\
<img src="styles/mosque-svgrepo-com (1).svg" /> (Masjid)<br />\
<img src="styles/fishing-rod-fish-svgrepo-com.svg" /> (Pemancingan)<br />\
<img src="styles/market-purchase-svgrepo-com.svg" /> (Toko Kelontong)<br />\
<img src="styles/coin-svgrepo-com.svg" /> (UMKM)<br />'
});

lyr_OpenStreetMap_0.setVisible(true);lyr_AdministrasiJanti_1.setVisible(true);lyr_UMKMdanSaranaPrasarana_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AdministrasiJanti_1,lyr_UMKMdanSaranaPrasarana_2];
lyr_AdministrasiJanti_1.set('fieldAliases', {'Desa': 'Desa', 'Kec': 'Kec', 'Kab': 'Kab', 'Prov': 'Prov', });
lyr_UMKMdanSaranaPrasarana_2.set('fieldAliases', {'Foto': 'Foto', 'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Keterangan': 'Keterangan', 'Jam_operas': 'Jam_operas', 'CP': 'CP', 'Fasilitas': 'Fasilitas', 'Metode_Pem': 'Metode_Pem', 'Daerah': 'Daerah', });
lyr_AdministrasiJanti_1.set('fieldImages', {'Desa': 'TextEdit', 'Kec': 'TextEdit', 'Kab': 'TextEdit', 'Prov': 'TextEdit', });
lyr_UMKMdanSaranaPrasarana_2.set('fieldImages', {'Foto': 'ExternalResource', 'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Keterangan': 'CheckBox', 'Jam_operas': 'TextEdit', 'CP': 'TextEdit', 'Fasilitas': 'TextEdit', 'Metode_Pem': 'TextEdit', 'Daerah': 'TextEdit', });
lyr_AdministrasiJanti_1.set('fieldLabels', {'Desa': 'no label', 'Kec': 'no label', 'Kab': 'no label', 'Prov': 'no label', });
lyr_UMKMdanSaranaPrasarana_2.set('fieldLabels', {'Foto': 'no label', 'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Jam_operas': 'inline label - visible with data', 'CP': 'inline label - visible with data', 'Fasilitas': 'inline label - visible with data', 'Metode_Pem': 'inline label - visible with data', 'Daerah': 'inline label - visible with data', });
lyr_UMKMdanSaranaPrasarana_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});