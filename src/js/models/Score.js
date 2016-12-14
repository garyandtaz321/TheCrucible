const Score = function () {

};

var total = 0;
Score.prototype ={





    addToScore: function(number) {
        total += number;
    },

    subtractFromScore: function(number) {
        total -= number;
    },

    returnfromTotal: function ()
    {
        return total

    },





};
module.exports = Score;
