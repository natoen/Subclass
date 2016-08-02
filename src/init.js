$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerName = $(this).attr('class').split(' ')[1];

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

     // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000,
      dancerName
      
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    stayAway(); // see stayAway function below
  });

  var stayAway = function() {
    for (var i = window.dancers.length - 1; i > -1; i--) {
      var dancer = window.dancers[i]; // the dancer we are comparing

      for (var j = window.dancers.length - 1; j > -1; j--) {
        var compareDancers = window.dancers[j]; // the dancers that we'll compare above
        var xSquared = Math.pow(dancer.$node.position().left - compareDancers.$node.position().left, 2);
        var ySquared = Math.pow(dancer.$node.position().top - compareDancers.$node.position().top, 2);

        // We will compare if the distance of the dancers is higher
        // than a 100 and then we'll animate them to a random position
        if (Math.sqrt(xSquared + ySquared) > 100 && dancer.$node.attr('class') === 'saraDancer' &&
            compareDancer.$node.attr('class') === 'saraDancer') {
          dancer.$node.animate({
            top: dancer.$node.position().top * Math.random(), 
            left: dancer.$node.position().left * Math.random()
          }, 1000);
          compareDancers.$node.animate({
            top: compareDancers.$node.position().top * Math.random(), 
            left: compareDancers.$node.position().left * Math.random()
          }, 1000);
        }
      }
    }  
  };

  $('.lineUp').on('click', function(event) {
    var top = 125;
    var left = 25;
    $('.dancer').stop(true, true).fadeOut(4000);
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(top, left);
      top += 25;
      left += 25;
    }
  });
});