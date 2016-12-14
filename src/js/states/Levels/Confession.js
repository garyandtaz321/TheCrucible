var Player = require("../../models/player.js");
var Textboxs = require ('../../models/textbox')

var Jail = function () {
  this.testentity = null;
};
module.exports = Jail;
 var sprite
 var sprite1
 var sprite2
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
Jail.prototype = {

tBox: null,
  create: function () {
    this.game.world.setBounds(0 ,0 , 960, 960);

this.game.physics.startSystem(Phaser.Physics.ARCADE);



        map = this.game.add.tilemap('Confession');
        map.addTilesetImage('tielset' , 'tielset.png');
        layer = map.createLayer('Tile Layer 1');
        
map = this.game.add.tilemap('Confession');
        map.addTilesetImage('tielset' , 'tielset.png');
        layer = map.createLayer('Tile Layer 2');


    player = new Player(this.game);
    console.log(player)
        player.create( 456 , 456);
  this.game.camera.follow(player.getSprite());
  
  sprite = this.game.add.sprite(448, 800, 'Danforth');
  this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
  sprite.body.moves = false;
    sprite1 = this.game.add.sprite(416, 820, 'Danforth');
      sprite2 = this.game.add.sprite(480, 820, 'Danforth');


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
    Locked = true;
    this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "Danforth" , "John, sign here please and we can get this \n Over with" , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "John" , "Why. why do I have to sign, \n What is the reason for this" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
  this.tBox.CreateTextBox(300 , 1420 , "John" , "Haven't I already given up enough, \nothers don't need to know of this " , "N" , " " , " ");
  this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.tBox.destroySprite();
this.tBox.CreateTextBox(300 , 1420 , "Danforth" , "John, please sign" , "N" , " " , " ");
this.tBox.createButtons(300 , 800 , "Sign", "Rip");
    this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(player.getSprite().x - 40, player.getSprite().y + 600  , "John" , "Fine I shall sign your piece of paper" , "N" , " " , " ");

}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(player.getSprite().x - 40, player.getSprite().y + 600 , "John" , "No, I will not!, you can take \n everything, but not my name!" , "N" , " " , " ");
}
 this.game.time.events.add(Phaser.Timer.SECOND * 4, () => {
this.tBox.destroySprite();
if(this.tBox.retriveChoices() == 1){
this.tBox.CreateTextBox(player.getSprite().x - 40, player.getSprite().y + 600  , "Danforth" , "Thank you for coming to your senses John" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 2, this.story2, this)
}else if(this.tBox.retriveChoices() == 2){
this.tBox.CreateTextBox(player.getSprite().x - 40, player.getSprite().y + 600 , "Danforth" , "You mad man! Off to the\n noose with you!" , "N" , " " , " ");
    this.game.time.events.add(Phaser.Timer.SECOND * 3, this.story3, this)
}
      
  });
      
  });


  });
  });
  });


},
story2: function(){
    this.game.state.start("Poorend")
},

story3: function() {
    this.game.state.start("Hanging")
}

};