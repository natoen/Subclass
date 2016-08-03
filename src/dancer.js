// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, dancerName) {
  this.$node = $('<span class="dancer ' + dancerName + '"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
};
