

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 

Jail.prototype = {


  create: function () {
          var style = { font: "32px Arial", fill: "#00FFFF", align: "center" };
             var t = this.game.add.text(30, 200, "Arrow keys to move around your character\nFind the main character to start the story \n You have 5 seconds to answer the question \n Your answer determines your fate", style);
             
             var ButtonBack= this.game.add.button(30, 90, 'BackButton', function() {
    this.game.state.start("Menu");
   }, this, 1, 2, 1);
                 ButtonBack.scale.x = 1.6;
              ButtonBack.scale.y = 1.6

  },


  


  


};