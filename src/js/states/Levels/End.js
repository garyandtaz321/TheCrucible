

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 

Jail.prototype = {


  create: function () {
          var style = { font: "32px Arial", fill: "#00FFFF", align: "center" };
             var t = this.game.add.text(30, 200, "Coding: Adam Kuhn\n Story: Zach Smith\n Paragraph: Alex Malburg", style);
             
             var ButtonBack= this.game.add.button(30, 90, 'RestartButton', function() {
    this.game.state.start("Menu");
   }, this, 1, 2, 1);
                 ButtonBack.scale.x = 1.6;
              ButtonBack.scale.y = 1.6

  },


  


  


};