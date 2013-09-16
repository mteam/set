function Set() {
  this.vals = [];
}

Set.prototype.add = function(val) {
  if (!this.has(val)) {
    this.vals.push(val);
  }
};

Set.prototype.has = function(val) {
  return !! ~this.vals.indexOf(val);
};

Set.prototype.values = function() {
  return this.vals;
};

Set.prototype.clear = function() {
  this.vals.length = 0;
};

Set.prototype.remove = function(val) {
  var index = this.vals.indexOf(val);

  if (~index) {
    for (var i = index, len = this.vals.length - 1; i < len; i++) {
      this.vals[i] = this.vals[i + 1];
    }

    this.vals.length = len;
  }

  return !! ~index;
};

module.exports = Set;
