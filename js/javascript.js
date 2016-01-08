var charmander = {
  name: "Billy",
  health: 100,
  lvl: 12,
  effect: null,
  moves: [{
    name: "Ember",
    type: "Attack",
    power: 20,
    accuracy: .80
  }, 
  {
    name: "Scratch",
    type: "Attack",
    power: 10,
    accuracy: .90
  },
  {
    name: "Leer",
    type: "Defense",
    power: .20,
    accuracy: 1.0
  },
  {
    name: "Growl",
    type: "Defense",
    power: .65,
    accuracy: .65
  }]

};

var pikachu = {
  name: "Pikachu",
  health: 100,
  lvl: 11,
  effect: null,
  moves: [{
    name: "Thunder Shock",
    type: "Attack",
    power: 10,
    accuracy: .95
  }, 
  {
    name: "Thunder Wave",
    type: "Attack",
    power: 25,
    accuracy: .60
  },
  {
    name: "Tail Whip",
    type: "Defense",
    power: .15,
    accuracy: 1.0
  },
  {
    name: "Growl",
    type: "Defense",
    power: .55,
    accuracy: .65
  }]

};

var currentState;
var cpuPokemon;
var userPokemon;

var cpuTurn = {
  play: function() {
    var randomMove = Math.floor(Math.random() * 4);
    var currentCPUMove = cpuPokemon.moves[randomMove];

    var setUpCPUField = function() {
      $("#chat-text").text("What will " + cpuPokemon.name + " do?");
      prepareToAttack();
    };

    var prepareToAttack = function() {
      $("#pikachu-img").animate({
        top: "-=25",
      }, 200, function() {
        $("#pikachu-img").animate({
          top: "+=25",
        }, 200)
      });
      getAccuracy();
    };

    var getAccuracy = function() {
      var setAccuracy = Math.random();
      if (setAccuracy <= currentCPUMove.accuracy) {
        $("#chat-text").text(cpuPokemon.name + " used " + currentCPUMove.name + "!")
        getMoveType();
      } else {
        $("#chat-text").text(cpuPokemon.name + " missed with " + currentCPUMove.name + "!")
        currentState = playerTurn;
        setTimeout(loop, 1500)
      }
    };

    var getMoveType = function() {
      showMoveAnimation();

      if (currentCPUMove.type == "Attack") {
        setTimeout(attackingMove, 1500);
      } else {
        setTimeout(defensiveMove, 1500);
      }
    };

    var showMoveAnimation = function () {
      $("#attack-img").addClass("cpu-attack-img");
      $("#attack-img").removeClass("hide");
      $("#attack-img").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
    };

    var attackingMove = function() {
      $("#attack-img").addClass("hide");
      $("#attack-img").removeClass("cpu-attack-img");
      if (!cpuPokemon.effect) {
        userPokemon.health -= currentCPUMove.power;
      } else {
        userPokemon.health -= (currentCPUMove.power) - (currentCPUMove.power * cpuPokemon.effect)
        cpuPokemon.effect = null;
      }
      $("#user-health-bar").css("width", userPokemon.health + "%");
      currentState = playerTurn
      loop();
    };

    var defensiveMove = function() {
      $("#attack-img").addClass("hide");
      $("#attack-img").removeClass("cpu-attack-img");
      userPokemon.effect = currentCPUMove.power;
      currentState = playerTurn;
      loop();
    };

    setUpCPUField();
  }
};

var playerTurn = {
  play: function() {

    var setUpUserField = function () {
      var moveButtons = ["move1-text", "move2-text", "move3-text", "move4-text"]

      $("#user-buttons").removeClass("hide");
      $("#chat-text").text(""What will " + userPokemon.name + " do?"");

      for (var i = moveButtons.length - 1; i >= 0; i--) {
        $(moveButtons[i]).text(userPokemon.moves[i].name);
      };
    };
    setUpUserField();
  }
};

var loop = function() {
  if (cpuPokemon.health <= 0 || userPokemon.health <= 0) {
    $("#game-over").removeClass("hide");
  } else {
    currentState.play();
  }
};

var init = function() {
  cpuPokemon = pikachu;
  userPokemon = charmander;
  $("#cpu-name").text(cpuPokemon.name);
  $("#cpu-lvl").text("lvl " + cpuPokemon.lvl);
  $("#user-name").text(userPokemon.name);
  $("#user-lvl").text("lvl " + userPokemon.lvl);
  currentState = cpuTurn;
  loop();
};

init();














