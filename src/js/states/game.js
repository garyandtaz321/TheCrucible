var Player = require("../models/player.js");
var Textboxs = require ('../models/textbox')

var Game = function () {
  this.testentity = null;
};
var sprite
module.exports = Game;
var tBox
var player
var map
var map2
var layer
var layer2
var Locked = false;
Game.prototype = {

tBox: null,
  create: function () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.world.setBounds(0 ,0 , 960, 960);
   map = this.game.add.tilemap('Court');     
           map.addTilesetImage('rilest' , 'tielset.png');
          map.addTilesetImage('d' , 'steampunkish-tilec.png');
   layer = map.createLayer('Tile Layer 2')
 layer.resizeWorld();
layer.debug = false;


  map2 = this.game.add.tilemap('Court')
             map2.addTilesetImage('rilest' , 'tielset.png');
             map2.addTilesetImage('d' , 'steampunkish-tilec.png');
  layer2 = map.createLayer('Tile Layer 3');


        
    player = new Player(this.game);
    console.log(player)
        player.create( 30 ,30);
  this.game.camera.follow(player.getSprite());

            this.tBox = new Textboxs(this.game);
            console.log(this.tBox)
            sprite = this.game.add.sprite(480, 840, 'Danforth');
this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.body.collideWorldBounds=true;
        sprite.body.moves = false;




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
  Locked = true;
  this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "John" , "Danforth! All of this, is a lie, \n one big lie!" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "Danforth" , "John, anything you say can and will\n be used against you" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "John" , "I have done things, that I regret\n with Abigail" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
this.tBox.CreateTextBox(300 , 1420 , "Danforth" , "Have you commited sin with \n Abigail" , "N" , " " , " ");
this.tBox.createButtons(250, 400, "Yes", "No");
    this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(300 , 1420 , "John" , "Yes, I have" , "N" , " " , " ");
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(300 , 1420 , "Why would I touch that monster!" , "N" , " " , " ");
}
 this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(300 , 1420 , "Danforth","May god bless your soul John, \n I will take this into account" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story2, this)
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(300 , 1420 , "Danforth" , "All one big act, \n get out of my sight!" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story2, this)
}
      
  });
      
  });


  });
  });
  });


},

storydestroy: function(){
  this.tBox.destroySprite()
},
  story: function () {
this.tBox.CreateTextBox(300 , 1420 , "Danforth" , "Did you commit any sort of sin with Abigail?" , "N" , " " , " ");
this.tBox.createButtons(300 ,800, "Tell the Truth", "Lie");
  this.game.time.events.add(Phaser.Timer.SECOND * 4, this.story2, this)









  },

story2: function () {
  this.game.state.start("Jail")
}

};
