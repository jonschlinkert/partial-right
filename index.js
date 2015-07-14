'use strict';

/**
 * Partially apply arguments that are appended to the arguments provided
 * to the returned function.
 *
 * @param  {Function|Object} `thisArg` Optionally pass a `this` argument to use as the invocation context.
 * @param  {Function} `fn`
 * @return {Function}
 */

module.exports = function partialRight(fn) {
  var rightArgs = [].slice.call(arguments, 1);
  var thisArg = null;

  if (typeof fn !== 'function') {
    thisArg = fn;
    fn = rightArgs.shift();
  }

  return function () {
    var args = [].slice.call(arguments).concat(rightArgs);
    return fn.apply(thisArg, args);
  };
};
