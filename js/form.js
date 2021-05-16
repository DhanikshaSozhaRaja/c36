class form {
    constructor(){}
display(){
var title = createElement("h2");
title.html("carRacing");
title.position(500,100);
var input = createInput("Name") 
input.position(450,250);
var button = createButton("Play");
button.position(475,290);
button.mousePressed(function(){ 
    input.hide(); 
    button.hide();
    var name = input.value();
    var greeting =createElement("h4")
     greeting.html("Hello" + name) 
     greeting.position(470,300)})
} 
}