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
var layer2
var map2
var map3
var layer3

var sprite1
var sprite2
var sprite3
var sprite4
Jail.prototype = {

tBox: null,
  create: function () {
    this.game.world.setBounds(0 ,0 , 960, 960);

this.game.physics.startSystem(Phaser.Physics.ARCADE);
sprite = this.game.add.sprite(700, 200, 'Girl');
this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
sprite.body.moves = false;

        map = this.game.add.tilemap('Hanging');
        map.addTilesetImage('tielset' , 'tielset.png');
        map.addTilesetImage('Hanzo-TownSet03VS' , 'Hanzo-TownSet03VS.png');
        layer = map.createLayer('Tile Layer 1');
        
map = this.game.add.tilemap('Hanging');
        map.addTilesetImage('tielset' , 'tielset.png');
        map.addTilesetImage('Hanzo-TownSet03VS' , 'Hanzo-TownSet03VS.png');
        layer = map.createLayer('Tile Layer 2');



    player = new Player(this.game);
    console.log(player)
        player.create(448 , 512);
  this.game.camera.follow(player.getSprite());

sprite1 = this.game.add.sprite(400, 590, "Danforth");
sprite2 = this.game.add.sprite(360, 590, "Danforth");
sprite3 = this.game.add.sprite(450, 590, "Danforth");
sprite4 = this.game.add.sprite(500, 590, "Danforth");
            this.tBox = new Textboxs(this.game);
            console.log(this.tBox)
    this.storystart()


  },

  update: function () {



  },

  collideplz: function () {
this.game.state.start("Menu")
  },
  
storystart: function () {
  var Locked = false;
  this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 650 , "John" , "You are all mad! Mad!!" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 650 , "Crowd" , "John!" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 650 , "John" , "This is all a lie! \n One Large lie!" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
this.tBox.CreateTextBox(300 , 650 , "" , "Did you commit any sort of sin with Abigail?" , 1 , " " , " ");
this.tBox.createButtons(300 ,700, "Save yourself", "Hang");
    this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(300 , 650 , "John" , "I confess! I am a witch\n I have dealt with the devil" , "N" , " " , " ");
this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story3, this)
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(300 , 650 , "John" , "You are damned! All damned!" , "N" , " " , "1");
this.game.time.events.add(Phaser.Timer.SECOND * 3, this.collideplz, this)
}
 this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(300 , 650 , "Danforth" , "Your confession shall be considered,\n now begone before I change my mind!" , 1 , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story3, this)
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(300 , 650 , "Danforth" , "This whole act is a waste of my time, begone!" , "N" , 1 , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story3, this)
}
      
  });
      
  });


  });
  });
  });


},
  
collideplz: function(){
  this.game.state.start("Normalend")
},

story3: function(){
  this.game.state.start("Poorend")
  
}

};