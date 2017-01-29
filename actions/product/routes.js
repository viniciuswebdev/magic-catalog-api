var express = require('express');
var product = require('./index');

module.exports = {
    register(router) {
        router.get('/api/product/:category', function (req, res) {
            product.get(req.params.category, function (items) {
                res.json(items);
            });
        });
    }
}