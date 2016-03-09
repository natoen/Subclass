$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancerName = "hiroshiDancer";

    if($(".saraDancer").on("click")) {
      dancerName = $(this).attr("class");
    }

     // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      dancerName
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);

    move();
  });

  var move = function() {
    for (var i = window.dancers.length - 1; i > 0; i--) {
      var xSquared = Math.pow(window.dancers[i].left - window.dancers[i-1].left, 2);
      var ySquared = Math.pow(window.dancers[i].top - window.dancers[i-1].top, 2);

      if (Math.sqrt(xSquared + ySquared) > 100) {
        window.dancers[i].$node.animate({'top': window.dancers[i].top * Math.random(), 
          'left': window.dancers[i].left * Math.random()}, 1000);
        window.dancers[i-1].$node.animate({'top': window.dancers[i-1].top * Math.random(), 
          'left': window.dancers[i-1].left * Math.random()}, 1000);
      }
    }     
  };

  $(".lineUp").on("click", function(event){
    var height = 200;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(height);
      height += 40;
    }
  });
});