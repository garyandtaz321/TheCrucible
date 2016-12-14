
var textboxs = function (game) {
    this._game = game;
};

var Score = require ('../models/Score')
var textbot;
var text;
var t;
var tName;
var Button1;
var But1Text
var Button2;
var But2Text
var Choice = 0
var score
var locked = "N"
var isTextboxAlive = "N"


textboxs.prototype = {

destroySprite () {
this.CreateTextBox(0,0," " , " ", 1);

  locked = "N"
  isTextboxAlive = "N"
  
},

destroyandCreatesprite(x , y , name, text , Destroy) {
  this.CreateTextBox(0,0," " , " ", 1);
  locked = "N"
  isTextboxAlive = "N"
    this.CreateTextBox(x,y,name , text, "N");
},

createButtons (x, y , text1 , text2){
  score = new(Score);
  console.log(score);
Button1= this._game.add.button(x, y, 'Buttons', function() {
this.DestroyandLogButtons(1)
   }, this, 1, 2, 1);
  
Button2= this._game.add.button(x + 300, y, 'Buttons', function() {
this.DestroyandLogButtons(2)
   }, this, 1, 2, 1);
     
     var style = { font: "12px Arial", fill: "#AD5644", align: "center" };
But1Text = this._game.add.text(x + 10, y + 5 , text1);  
But2Text = this._game.add.text(x + 310 , y + 5  , text2);

  
},

DestroyandLogButtons(x) {
  
  if(x == 1){
  Choice = 0
    score.addToScore(1)
    Button1.destroy(); Button2.destroy(), But1Text.destroy(), But2Text.destroy();
    console.log("ayyy");
    
    console.log(score.returnfromTotal())
Choice++
    
  locked = "N"
  isTextboxAlive = "N"
  
  
  }else if(x == 2){
Choice = 0
    score.addToScore(2)
        Button1.destroy(); Button2.destroy(), But1Text.destroy(), But2Text.destroy();
        console.log("lmao");
        console.log(score.returnfromTotal())
        locked = "N"
  isTextboxAlive = "N"
  Choice++
  Choice++

  }
    textbot.destroy();
    t.destroy();
    tName.destroy();
    
  
},
  
retriveChoice(){
return locked
  
},

retriveChoices(x){
return Choice
},

setChoice(){
  
},
  
  CreateTextBox (x , y , name, text , Destroy , ButText1 , ButText2) {
  
  if(Destroy == "N"){
  if(isTextboxAlive == "Y")
  {
    console.log("Error! Textbox is already created")
  }else if(isTextboxAlive == "N"){
  
  

 textbot = this._game.add.sprite(x/1 , y/3 , "Textbox");

 
              textbot.scale.x = 1;
              textbot.scale.y = 3;
              textbot.inputEnabled = true;


  text = text;
  var style = { font: "22px Arial", fill: "#070173", align: "center" };

    t = this._game.add.text(x+ 10, (y/3) + 30, text, style);
 tName = this._game.add.text(x , y/3 - 5 , name , style);
        textbot.inputEnabled = true;

        textbot.input.useHandCursor = true;
      
 textbot.events.onInputDown.add(this.destroySprite, this);

  isTextboxAlive = "Y"
  locked = "Y"
  
  }
        
  
  }
 else if (Destroy == 1)

  {
    textbot.destroy();
    t.destroy();
    tName.destroy();

    console.log("o");
  }

    

  
  
  },
  
};

module.exports = textboxs;