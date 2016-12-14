var Menu = function () {
  this.text = null;
};


module.exports = Menu;

Menu.prototype = {

  create: function () {
var Title = this.game.add.sprite( 0, 5,"TitleM");
Title.scale.x = .95
Title.scale.y = .95

    var style = { font: "65px Arial", fill: "#ffffff", align: "center" };

var ButtonPlay= this.game.add.button(30, 90, 'PlayButton', function() {
    this.game.state.start("House");
   }, this, 1, 2, 1);
                 ButtonPlay.scale.x = 1.6;
              ButtonPlay.scale.y = 1.6
var ButtonRestart = this.game.add.button(30, 190 , 'RestartButton', function() {
    this.game.state.start("Boot");
   }, this, 1, 2, 1);
                 ButtonRestart.scale.x = 1.6;
              ButtonRestart.scale.y = 1.6;
              
var ButtonStory = this.game.add.button(30, 290 , 'StoryButton', function() {
    this.game.state.start("Story");
   }, this, 1, 2, 1);
                 ButtonStory.scale.x = 1.6;
              ButtonStory.scale.y = 1.6;
var ButtonInstuction = this.game.add.button(30, 390 , 'InstructionButton', function() {
    this.game.state.start("Instructions");
   }, this, 1, 2, 1);
                 ButtonInstuction.scale.x = 1.6;
              ButtonInstuction.scale.y = 1.6;

  },

 

  
  

  update: function () {

  },

};
 