var hiroshiDancer = function(top, left, timeBetweenSteps, dancerName) {
  makeDancer.call(this, top, left, timeBetweenSteps, dancerName);
};

hiroshiDancer.prototype = Object.create(makeDancer.prototype);
hiroshiDancer.prototype.constructor = hiroshiDancer;

hiroshiDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  console.log(this.$node.parent());
  this.$node.animate({
    top: (this.$node.parent().height() || 600) * Math.random(),
    left: (this.$node.parent().width() || 600) * Math.random()
  }, 700);
};