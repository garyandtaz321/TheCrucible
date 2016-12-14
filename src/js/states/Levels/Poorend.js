var Player = require("../../models/player.js");
var Textboxs = require ('../../models/textbox')

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 

Jail.prototype = {


  create: function () {
          var style = { font: "32px Arial", fill: "#00FFFF", align: "center" };
             var t = this.game.add.text(60, 120, "\n You lie to save your life,\n along with others. You lose all of your property, \nwhich is eventually bought by Mr.Putnum.\n Your whole family becomes poor, and homeless.\n At least, you have each other. ", style);
          this.game.time.events.add(Phaser.Timer.SECOND * 4, this.startstate, this);
  },


  


  startstate: function(){
  this.game.state.start("End")
}


};