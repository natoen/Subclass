var saraDancer = function(top, left, timeBetweenSteps, dancerName) {
  makeDancer.call(this, top, left, timeBetweenSteps, dancerName);
};

saraDancer.prototype = Object.create(makeDancer.prototype);
saraDancer.prototype.constructor = saraDancer;

saraDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

saraDancer.prototype.lineUp = function(top, left) {
  makeDancer.prototype.lineUp.call(this, top, left);
  var top = this.$node.parent().height() * Math.random();
  var left = this.$node.parent().width() * Math.random();

  setTimeout(function() {
    this.setPosition(top, left);
  }.bind(this), 2000);
};