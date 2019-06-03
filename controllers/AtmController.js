'use strict';

var utils = require('../utils/writer.js');
var AtmController = require('../service/AtmControllerService');

module.exports.adad = function adad (req, res, next) {
  var asda = req.swagger.params['asda'].value;
  var asda2 = req.swagger.params['asda'].value;
  AtmController.adad(asda,asda2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_1 = function post_1 (req, res, next) {
  var name = req.swagger.params['name'].value;
  var id = req.swagger.params['id'].value;
  AtmController.post_1(name,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
