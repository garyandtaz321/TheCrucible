var Player = function (game) {
    this._game = game;
};

var User;

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


/*
 Automatically called by World.update
 */
keystate: null,


    Player.prototype.create = function(x , y) {
        this._game.physics.startSystem(Phaser.Physics.ARCADE);
        this.sprite = this._game.add.sprite(x, y, 'Boy')
this.sprite.animations.add('down', [0, 1, 2, 3], 10, true);
this.sprite.animations.add('up', [5, 6, 7, 8], 10, true);
this.sprite.animations.add('left' , [9 , 10, 11] , 10 , true)
this.sprite.animations.add('right' , [13 , 14 ,15 , 16] , 10 , true)


        cursors = this._game.input.keyboard.createCursorKeys();
        console.log(this.keystate)
        this._game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds=true;
        this.sprite.debug = true;
        this.sprite.body.bounce.set(1);
    },

    Player.prototype.sprite = null;

    Player.prototype.update = function(x) {
        if(x == 0){
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;
        if (cursors.up.isDown) {
            this.sprite.body.velocity.y = -200;
            this.sprite.animations.play('up', 10, true);
        }
        else {

        }

        if (cursors.left.isDown) {

            this.sprite.body.velocity.x = -200;
            this.sprite.animations.play('left', 10, true);

        }
        else if (cursors.right.isDown) {

            this.sprite.body.velocity.x = 200;
            this.sprite.animations.play('right', 10, true);
        }

        else if (cursors.down.isDown)
        {
            this.sprite.body.velocity.y = 200;
            this.sprite.animations.play('down', 10, true);
        }
        else
        {
        this.sprite.animations.stop(null, true);
        }
        }else if(x == 1)
        {
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;
                this.sprite.animations.stop(null, true);

        }
        

    };

    Player.prototype.getSprite = function() {
        return this.sprite;
    }



module.exports = Player;