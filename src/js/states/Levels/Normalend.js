var Player = require("../../models/player.js");
var Textboxs = require ('../../models/textbox')

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 

Jail.prototype = {


  create: function () {
          var style = { font: "32px Arial", fill: "#00FFFF", align: "center" };
             var t = this.game.add.text(30, 200, "You refuse to feed into the lies that everyone believes\n After your death, the towns begins to end the trials \n not out of sorrow, but high ranking officals\n wives were being accused", style);
          this.game.time.events.add(Phaser.Timer.SECOND * 4, this.startstate, this);
  },


  


  startstate: function(){
  this.game.state.start("End")
}


};