

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 

Jail.prototype = {


  create: function () {
          var style = { font: "22px Arial", fill: "#00FFFF", align: "center" };
             var t = this.game.add.text(30, 200, "You are John Proctor, a man stuck\n in the middle of a rivalry between Abigail and Elizabeth\n Elizabeth wants to help revive the marrige,\n while Abigail wants to end your marrige, and take you for herself\n Will you survive, and stay married, or fall to Abigail", style);
             
             var ButtonBack= this.game.add.button(30, 90, 'BackButton', function() {
    this.game.state.start("Menu");
   }, this, 1, 2, 1);
                 ButtonBack.scale.x = 1.6;
              ButtonBack.scale.y = 1.6

  },


  


  


};