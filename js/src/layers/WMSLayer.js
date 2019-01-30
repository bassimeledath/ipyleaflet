var widgets = require('@jupyter-widgets/base');
var _ = require('underscore');
var L = require('leaflet')


var tilelayer = require('./TileLayer.js');
var LeafletTileLayerView = tilelayer.LeafletTileLayerView;
var LeafletTileLayerModel = tilelayer.LeafletTileLayerModel;


//Model

var LeafletWMSLayerModel = LeafletTileLayerModel.extend({
    defaults: _.extend({}, LeafletTileLayerModel.prototype.defaults, {
        _view_name : 'LeafletWMSLayerView',
        _model_name : 'LeafletWMSLayerModel',
        service: 'WMS',
        request: 'GetMap',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: false,
        version: '1.1.1',
        crs : null,
        uppercase : false
    })
});

//View

var LeafletWMSLayerView = LeafletTileLayerView.extend({

    create_obj: function () {
        this.obj = L.tileLayer.wms(
            this.model.get('url'),
            this.get_options()
        );
    },
});

module.exports = {
  //views
  LeafletWMSLayerView : LeafletWMSLayerView,

  //models
  LeafletWMSLayerModel : LeafletWMSLayerModel,
};
