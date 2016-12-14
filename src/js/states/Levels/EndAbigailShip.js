var Player = require("../../models/player.js");
var Textboxs = require ('../../models/textbox')

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 

Jail.prototype = {


  create: function () {
          var style = { font: "32px Arial", fill: "#00FFFF", align: "center" };
             var t = this.game.add.text(60, 200, "   You abandon Elizabeth, and Salem in whole\n You run off to start a new life\n with just Elizabeth and you. you live\n the guilt of knowing you abandoned \n your wife and chlidren", style);
          this.game.time.events.add(Phaser.Timer.SECOND * 4, this.startstate, this);
  },


  


  startstate: function(){
  this.game.state.start("End")
}


};