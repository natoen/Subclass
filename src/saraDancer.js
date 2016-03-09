var saraDancer = function(top, left, timeBetweenSteps, dancerName){
  makeDancer.call(this, top, left, timeBetweenSteps, dancerName);
};

saraDancer.prototype = Object.create(makeDancer.prototype);
saraDancer.prototype.constructor = saraDancer;

saraDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  this.$node.animate({'top': this.top * Math.random(), 
    'left': this.left * Math.random()}, 1000);
};