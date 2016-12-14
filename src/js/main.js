'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'my-game-game');

window.Utils = require('./utils');

window.playerState = {
    currentLevel: 'Game'
};

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));
game.state.add('Story', require('./states/story'));
game.state.add('Instructions', require('./states/Instructions'));
game.state.add('Jail' , require('./states/Levels/Jail'));
game.state.add('House' , require('./states/Levels/House'))
game.state.add('Hanging' , require('./states/Levels/Hanging'))
game.state.add('Confession' , require('./states/Levels/Confession'))
game.state.add('Poorend' , require('./states/Levels/Poorend'))
game.state.add('Normalend' , require('./states/Levels/Normalend'))
game.state.add('EndAbigailNormal' , require('./states/Levels/EndAbigailNormal'))
game.state.add('EndAbigailShip' , require('./states/Levels/EndAbigailShip'))
game.state.add('End' , require('./states/Levels/End.js'))

game.state.start('Boot');
