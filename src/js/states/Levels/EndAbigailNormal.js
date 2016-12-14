var Player = require("../../models/player.js");
var Textboxs = require ('../../models/textbox')

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 

Jail.prototype = {


  create: function () {
          var style = { font: "32px Arial", fill: "#00FFFF", align: "center" };
             var t = this.game.add.text(20, 200, "You go with Abigail, abandoning your \n dying marriage with Elizabeth. \n You see Elizabeth hanged, then go to live with Abigail.\n You live with the guilt\nknowing that innocent Elizabeth died because\n of your lust", style);
          this.game.time.events.add(Phaser.Timer.SECOND * 4, this.startstate, this);
  },


  
startstate: function(){
  this.game.state.start("End")
}

  


};