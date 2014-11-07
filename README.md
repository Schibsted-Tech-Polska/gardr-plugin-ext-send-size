# Gardr Send Size Plugin (Ext)

Gardr plugin for sending size of an iframe content to host at any given time.

## Install

```
npm install gardr-plugin-ext-send-size --save
```

## Bundle

In your ext bundle file:
```javascript
    var gardrExt = require('gardr-ext');
    var sendSize = require('gardr-plugin-ext-send-size');

    gardrExt.plugin(sendSize);

    module.exports = gardrExt;
```

## Usage

This plugin uses [cross-domain-events](https://github.com/finn-no/cross-domain-events) to communicate between frames with "plugin:send-size" namespace.

To trigger it in host:
```javascript
var xde = require('cross-domain-events');

xde.on('plugin:send-size', function(response) { // listen for plugin:send-size response
    console.log(response.data.id); // id of an gardr iframe
    console.log(response.data.size); // object containing width and height of iframe contents
});

xde.sendTo(document.querySelector('#banner').contentWindow, 'plugin:send-size'); // send plugin:send-size trigger to iframe inside div#banner
```
