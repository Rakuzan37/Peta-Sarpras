var size = 0;
var placement = 'point';

var style_UMKMdanSaranaPrasarana_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "20.8px \'Arial Black\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_UMKMdanSaranaPrasarana_2(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_UMKMdanSaranaPrasarana_2rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.015,
                  anchor: [6, 6],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/working-tools-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_UMKMdanSaranaPrasarana_2rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.015,
                  anchor: [6, 6],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/device-smartphone-handphone-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_UMKMdanSaranaPrasarana_2rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.01375,
                  anchor: [5, 5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/machine-printer-printing-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_UMKMdanSaranaPrasarana_2rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0175,
                  anchor: [7, 7],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/hospital-building-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_UMKMdanSaranaPrasarana_2rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.015,
                  anchor: [6, 6],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/food-restaurant-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_UMKMdanSaranaPrasarana_2rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0125,
                  anchor: [5, 5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/mosque-svgrepo-com (1).svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_UMKMdanSaranaPrasarana_2rule6_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.01375,
                  anchor: [5, 5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/fishing-rod-fish-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_UMKMdanSaranaPrasarana_2rule7_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.015,
                  anchor: [6, 6],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/market-purchase-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_UMKMdanSaranaPrasarana_2rule8_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.0225,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/coin-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_UMKMdanSaranaPrasarana_2(feature, value);
        ;

    return style;
};
