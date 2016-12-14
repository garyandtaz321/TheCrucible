var Player = require("../../models/player.js");
var Textboxs = require ('../../models/textbox')

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 var sprite

var tBox
var player
var map;
var tileset;
var layer;
var layer2
var map2
var map3
var layer3
var Locked = false;

Jail.prototype = {

tBox: null,
  create: function () {
    this.game.world.setBounds(0 ,0 , 960, 960);

this.game.physics.startSystem(Phaser.Physics.ARCADE);


        map = this.game.add.tilemap('House');
        map.addTilesetImage('tielset' , 'tielset.png');
        map.addTilesetImage('a' , 'Hanzo-TownSet03VS.png');
        layer = map.createLayer('Tile Layer 1');
        
map = this.game.add.tilemap('House');
        map.addTilesetImage('tielset' , 'tielset.png');
        map.addTilesetImage('a' , 'Hanzo-TownSet03VS.png');
        layer = map.createLayer('Tile Layer 2');

map = this.game.add.tilemap('House');
        map.addTilesetImage('tielset' , 'tielset.png');
        map.addTilesetImage('a' , 'Hanzo-TownSet03VS.png');
        layer = map.createLayer('Tile Layer 3');

    player = new Player(this.game);
    console.log(player)
        player.create(50 , 20);
  this.game.camera.follow(player.getSprite());


            this.tBox = new Textboxs(this.game);
            console.log(this.tBox)
sprite = this.game.add.sprite(700, 200, 'Girl');
sprite.animations.add('left' , [9 , 10, 11] , 10 , true)
sprite.frame=9;

this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
sprite.body.moves = false;


  },

  update: function () {
  console.log(Locked)
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
  this.tBox.CreateTextBox(300 , 1420 , "John" , "Abigail, I've come to talk with you" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "Abigail" , "Oh John! I knew you'd come back!" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "John" , "I have something to tell you Abigail" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
this.tBox.CreateTextBox(300 , 1420 , "Abigail" , "What is it John" , "N" , " " , " ");
this.tBox.createButtons(250, 400, "It's over", "Love");
    this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(300 , 1420 , "John" , "It's over Abigail, leave my Wife and I \n Alone" , "N" , " " , " ");
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(300 , 1420 , "John" , "I still have feelings for you Abigail, \n let's go get married" , "N" , " " , " ");
}
 this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(300 , 1420 , "Abigail" , "Why John? I know you still love me! \n I will get you!" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story3, this)
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(300 , 1420 , "Abigail" , "I knew you still loved me John!" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story2, this)
}
      
  });
      
  });


  });
  });
  });


},

story2: function()
{
  this.game.state.start("EndAbigailNormal")
},

story3: function(){
  this.game.state.start("Game")
}

};