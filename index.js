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
  var i = this.vals.indexOf(val);
  if (~i) this.vals.splice(i, 1);
  return !! ~i;
};

module.exports = Set;
