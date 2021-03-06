'use strict';

var xde = require('cross-domain-events');
var childrenSize = require('../gardr-ext/lib/childrensize.js');

var gardrSendSize = function() {

    xde.on('plugin:send-size', function() {
        var size = childrenSize(global.gardr.container);
        xde.sendTo(global.parent, 'plugin:send-size', {
            id: global.gardr.id,
            size: size
        });
    });

};

module.exports = gardrSendSize;
