'use strict';


/**
 * asd
 * adad
 *
 * asda String dadad (optional)
 * asda2 String dasdad (optional)
 * returns String
 **/
exports.adad = function(asda,asda2) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * summary
 * details of post
 *
 * name String name  (optional)
 * id List id of user (optional)
 * no response value expected for this operation
 **/
exports.post_1 = function(name,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

