var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
    this.asset = this.add.sprite(320, 240, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    // Images
    this.load.image('testsprite', 'assets/test.png');
    this.load.image('Textbox' , 'assets/Textbox.png')
    this.load.image('TitleM' , 'assets/TitleM.png')
    this.load.image('Hanzo-TownSet03VS.png' , 'assets/Hanzo-TownSet03VS.png')
    this.load.image('steampunkish-tilec.png' , 'assets/steampunkish-tilec.png')
    this.load.image('tielset.png' , 'assets/tielset.png')
    this.load.image('Danforth' , 'assets/Danforth.png')
    // Sprite Sheets
    this.game.load.spritesheet('Buttons','assets/Buttons.png',360/2, 54);
    this.game.load.spritesheet('PlayButton' , 'assets/PlayButton.png' , 308/2 , 54)
    this.game.load.spritesheet('BackButton' , 'assets/BackButton.png' , 308/2 , 54)
    this.game.load.spritesheet('RestartButton' , 'assets/RestartButton.png' , 308/2 , 54)
    this.game.load.spritesheet('StoryButton' , 'assets/StoryButton.png' , 308/2 , 54)
    this.game.load.spritesheet('InstructionButton' , 'assets/InstructionButton.png' , 440/2 , 54)
    this.game.load.spritesheet('Girl', 'assets/Girl.png', 480/16, 56);
    this.game.load.spritesheet('Boy', 'assets/Boy.png', 480/16, 52);
    this.game.load.tilemap('Court', 'assets/Courtroom.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('Confession', 'assets/Tilemaps/Confession.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('House', 'assets/Tilemaps/AbigailFinal.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('Hanging', 'assets/Tilemaps/Hanging.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.tilemap('Jail', 'assets/Tilemaps/Jail.json', null, Phaser.Tilemap.TILED_JSON);
  },

  create: function () {
    this.asset.cropEnabled = false;
  },

  update: function () {
    if (!!this.ready) {
      this.game.state.start('Menu');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};
