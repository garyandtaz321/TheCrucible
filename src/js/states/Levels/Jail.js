var Player = require("../../models/player.js");
var Textboxs = require ('../../models/textbox')

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 var sprite
var Locked = false;
var tBox
var player
var map;
var tileset;
var layer;
Jail.prototype = {

tBox: null,
  create: function () {
          this.game.world.setBounds(0 ,0 , 320, 320);
    player = new Player(this.game);
    console.log(player)

this.game.physics.startSystem(Phaser.Physics.ARCADE);




        map = this.game.add.tilemap('Jail');
        map.addTilesetImage('tielset' , 'tielset.png');
        layer = map.createLayer('Tile Layer 1');

        player.create(30 , 30);
        sprite = this.game.add.sprite(100, 200, 'Girl');
        this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.body.collideWorldBounds=true;
        sprite.body.moves = false;
        sprite.animations.add('left' , [9 , 10, 11] , 10 , true)
        sprite.frame=9;


            this.tBox = new Textboxs(this.game);
            console.log(this.tBox)


  },

  update: function () {
player.update(0);
if(Locked == false){
    this.game.physics.arcade.collide(player.getSprite(), sprite, this.storystart, null, this);
}else if(Locked == true){
    console.log("NO MORE FUNCTION FOR YOU")
    player.update(1);
}

  },
  
 storystart: function () {
    Locked = true
    this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "Abigail" , "John, come with me, we can run away\n We can escape all this mayhem" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "John" , "Abigail, why should I go with you, \n you created this mess" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "John" , "I never meant any of this John \n I just wanted you to be with me" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
this.tBox.CreateTextBox(300 , 1420 , "Abigail" , "John, come with me please \n I beg of it" , "N" , " " , " ");
this.tBox.createButtons(100 ,100, "Leave", "Stay");
    this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
this.tBox.destroyandLog
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(300 , 1420 , "John" , "I will go with you, only\n To save my life" , "N" , " " , " ");
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(300 , 1420 , "John" , "No Abigail, see you in hell!" , "N" , " " , " ");
}
 this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(300 , 1420 , "Abigail" , "Thank gosh John, the ship leaves soon, \n we must make haste!" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.collideplz, this)
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(300 , 1420 , "Danforth" , "You idiot!, you could be safe, but stay\n You derserve to be hung mad man!" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story3, this)
}
      
  });
      
  });


  });
  });
  });


},

  collideplz: function () {
this.game.state.start("EndAbigailShip")
  },
  
  story3: function () {
      this.game.state.start("Confession")
  }
  


};