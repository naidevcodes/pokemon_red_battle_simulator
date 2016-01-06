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

  }
};

var playerTurn = {
  play: function() {

  }
};

var init = function() {
  cpuPokemon = pikachu;
  userPokemon = charmander;
  $("#cpu-name").text(cpuPokemon.name);
  $("#cpu-lvl").text("lvl " + cpuPokemon.lvl);
  $("#user-name").text(userPokemon.name);
  $("#user-lvl").text("lvl " + userPokemon.lvl);
};

init();














