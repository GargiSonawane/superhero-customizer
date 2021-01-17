var canvas= new fabric.Canvas('myCanvas');
player_x = 10
player_y = 10
block_width = 30;
block_height = 30;
var player_object="";
var block_object="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140); 
        player_object.set({
            top: player_y, 
            left: player_x 
        });
        canvas.add(player_object);
    });
}

function newImage(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height); 
        block_object.set({
            top: player_y, 
            left: player_x 
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    pressed = e.keyCode;
    if(e.shiftKey == true && pressed == '80'){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(e.shiftKey == true && pressed == '77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(pressed == '38'){
        up();
        console.log("up");
    }
    if(pressed == '40'){
        down();
        console.log("down");
    }
    if(pressed == '37'){
        left();
        console.log("left");
    }
    if(pressed == '39'){
        right();
        console.log("right");
    }
    if(pressed == '65'){
        newImage("hulk_face.png");
        console.log("a");
    }
    if(pressed == '66'){
        newImage("hulk_left_hand.png");
        console.log("b");
    }
    if(pressed == '66'){
        newImage("hulk_legs.png");
        console.log("c");
    }
    if(pressed == '67'){
        newImage("hulk_right_hand.png");
        console.log("d");
    }
    if(pressed == '68'){
        newImage("hulk_body.png");
        console.log("e");
    }
    if(pressed == '69'){
        newImage("ironman_body.png");
        console.log("f");
    }
    if(pressed == '70'){
        newImage("ironman_face.png");
        console.log("f");
    }
    if(pressed == '71'){
        newImage("ironman_left_hand.png");
        console.log("g")
    }
    if(pressed == '72'){
        newImage("ironman_legs.png");
        console.log("e")
    }
    if(pressed == '73'){
        newImage("ironman_right_hand.png");
        console.log("h")
    }
    if(pressed == '74'){
        newImage("spiderman_body.png");
        console.log("i")
    }
    if(pressed == '75'){
        newImage("spiderman_face.png");
        console.log("j");
    }
    if(pressed == '76'){
        newImage("spiderman_left_hand.png");
        console.log("k");
    }
    if(pressed == '77'){
        newImage("spiderman_legs.png");
        console.log("l");
    }
    if(pressed == '78'){
        newImage("spiderman_right_hand.png");
        console.log("m");
    }
    if(pressed == '79'){
        newImage("thor_face.png");
        console.log("n");
    }
    if(pressed == '80'){
        newImage("thor_left_hand.png");
        console.log("o");
    }
    if(pressed == '81'){
        newImage("thor_right_hand.png");
        console.log("p");
    }
}    