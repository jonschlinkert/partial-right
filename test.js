/*!
 * partial-right <https://github.com/jonschlinkert/partial-right>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var path = require('path');
var assert = require('assert');
var should = require('should');
var partial = require('./');

describe('partial', function () {
  it('should partially apply arguments from the right:', function () {
    function resolve(dir, filename) {
      return path.join.apply(path, [].slice.call(arguments));
    }

    var fn = partial(resolve, 'index.html');
    fn('site', 'blog', 'posts').should.equal('site/blog/posts/index.html');
  });


  it('should partially apply arguments from the right:', function () {
    var data = {dirname: 'posts', basename: 'index.html'};

    var resolve = function (dir, filename) {
      var args = [].slice.call(arguments);
      args.push(this.dirname);
      args.push(this.basename);
      return path.join.apply(path, args);
    };

    var fn = partial(data, resolve);
    fn('site', 'blog').should.equal('site/blog/posts/index.html');
  });
});
