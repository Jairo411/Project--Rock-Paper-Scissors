import imagePaper from "../public/images/paper.png";
import imageRock from "../public/images/rock.png";
import imageScissors from "../public/images/scissors.png";
import imageSmallPaper from "../public/images/smallpaper.png";
import imageSmallRock from "../public/images/smallrock.png";
import imageSmallScissors from "../public/images/smallscissors.png";
import "./style/style.css"
const modules = require("./classes");

//GLOBAL VARIABLES
let mouseCoords = {};
mouseCoords.pos = new modules.threeJsMod.Vector2(0, 0);
///CANVAS VARIABLES
let canvas;
let context;
///CANVAS VARIABLES

///GAME LOOP VARIALES
let isrunning = false;
let secondsPassed;
let oldTimeStamp = 0.0;
let fps;
///GAME LOOP VARIABLES

///GAMEOBJECT REFERENCE VARIABLES
///ENTITY HOLDER///
let EntityHolder = [];
let UIHolder = [];
//GLOBAL VARIABLES

const Scene0 = {
    CreateScene() {


        let rockObj = new modules.gameObject(0, new Image(600, 600));
        let scissorObj = new modules.gameObject(1, new Image(600, 600));
        let paperObj = new modules.gameObject(2, new Image(600, 600));


        rockObj.Image.src = imageRock;
        scissorObj.Image.src = imageScissors;
        paperObj.Image.src = imagePaper;


        //only going to push in two objects 
        EntityHolder.push(rockObj);
        EntityHolder.push(scissorObj);
        //    EntityHolder.push(paperObj);

        ResetOrigin();

        rockObj.transform.translate(500, 200);
        scissorObj.transform.translate(500, 0);

        this.CreateUI();
    },
    CreateUI() {

        let UI_S = new modules.UI_Square(240, 500, 150, 150, 25, 20);
        let UI_S1 = new modules.UI_Square(440, 500, 150, 150, 35, 35);
        let UI_S2 = new modules.UI_Square(640, 500, 150, 150, 35, 10);

        //Creating UI objects that use, the rock, paper, scissors assets 
        //They may appear to be the same like my gameObject objects, but 
        //they're not, they peform and serve different functions.
        let smallpaper = new Image();
        smallpaper.src = imageSmallPaper;
        let smallrock = new Image();
        smallrock.src = imageSmallRock;
        let smallscissor = new Image();
        smallscissor.src = imageSmallScissors;


        UI_S.image = smallpaper;
        UI_S1.image = smallrock;
        UI_S2.image = smallscissor;


        UIHolder.push(UI_S);
        UIHolder.push(UI_S1);
        UIHolder.push(UI_S2);

    },
    Render() {
        //Render GameObjects
        for (let i = 0; i < EntityHolder.length; i++) {
  
            DrawSprite(EntityHolder[i].Image, EntityHolder[i].x, EntityHolder[i].y);
        }
        //Render UI Objects
        for (let i = 0; i < UIHolder.length; i++) {
            DrawUISquare(UIHolder[i]);
        }
    },

    Update() {
        //scene logic goes here
        for (let i = 0; i < EntityHolder.length; i++) {
            //New way of accessing all elements of entity holder without 
            //constantly having to write code to access EntityHolder
            let tempEntity = EntityHolder[i];


            tempEntity.x = tempEntity.transform.elements[6];
            tempEntity.y = tempEntity.transform.elements[7];
        }
    },
    ClearScene() {
        // write code here to clear scene
    },
};




//Scene Drawer helper function
function ResetOrigin() {
    for (let i = 0; i < EntityHolder.length; i++) {
        let resetOrigin = new modules.threeJsMod.Vector2(0, 0);

        let tempEntity = EntityHolder[i];

        resetOrigin.x = tempEntity.Image.width;
        resetOrigin.y = tempEntity.Image.height;

        resetOrigin.x = resetOrigin.x / 2;
        resetOrigin.y = resetOrigin.y / 2;

        tempEntity.x += resetOrigin.x * -1;
        tempEntity.y += resetOrigin.y * -1;

        tempEntity.transform.elements[6]=tempEntity.x;
        tempEntity.transform.elements[7]=tempEntity.y;

    }
}

function DrawSprite(CanvasImageSource_, x_source, y_source) {
    context.drawImage(CanvasImageSource_, x_source, y_source, CanvasImageSource_.width, CanvasImageSource_.height);
}

function DrawUISquare(UI_square) {
    //Create Box
    context.fillRect(UI_square.x, UI_square.y, UI_square.width, UI_square.height);
    //Hardcoded offset leaving UI_square with offset variable just in case I want to do cool stuff with it.
    //clear UI box
    context.clearRect(UI_square.x + 5, UI_square.y + 5, UI_square.width - 10, UI_square.height - 10);
    //Draw image inside box
    context.drawImage(UI_square.image, UI_square.x + UI_square.offSetX, UI_square.y + UI_square.offSetY, UI_square.image.width, UI_square.image.height);

}

function intialization() {

    // refactorCSS();
    canvas = document.getElementsByClassName("viewport")[0];

    console.log(canvas);

    context = canvas.getContext("2d");


    isrunning = true;
    Scene0.CreateScene();

    if (isrunning === true) {
        //in order to use this properly I need to calculate the speed at which the canvas is running, convert it to miliseconds then divide it by my desire frame rate
        // the units of time here are in milliseconds
        //Creating a 16 ms delay on purpose
        window.setInterval(gameloop, 1000 / 60);
    }
}


function calculateGameLoop(timeStamp) {
    //I think that when the first time this gets excuted timestamp equals originally zero
    //In order lock the frame rate, what you need is to make it so that the frame rate equals the same amount of executions in a second
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    //calculate fps 
    fps = Math.round(1 / secondsPassed);

    //Draw number to the screen 
    context.fillStyle = 'white';
    context.fillRect(930, 0, 200, 100);
    context.font = '25px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 930, 30);
}


function gameloop(timeStamp) {
    //calculateGameLoop(performance.now());
    Scene0.Update();
    Scene0.Render();
    Scene0.ClearScene();
    if (isrunning == true) {
        //  window.requestAnimationFrame(gameloop);
        window.setInterval(gameloop, 1000 / 60);
    }
    /*request animation frame will actually set the frame rate of my canvas 
    there is no need to actually get the steps of my web browser and then use those 
    steps to simulate my game logic.
     */

}

function refactorCSS() {
    let style_text = "\n";

    let style_elements =
        document.getElementsByTagName("STYLE");

    if (style_elements.length == 0)
        alert("No Style Tag!");
    else {
        for (let i = 0; i < style_elements.length; i++)
            style_text += style_elements[i].outerHTML;

        style_text = style_text.toString().
            replace(/\t/g, '').split('\r\n');

        alert(style_text);
        injectCSSIntoHTML(style_text);
    }
}

function injectCSSIntoHTML(string_) {
    document.body.insertAdjacentHTML("beforeend", string_);
}

intialization();

canvas.addEventListener("click", (e) => {
    mouseCoords.pos.x = e.clientX;
    mouseCoords.pos.y = e.clientY;
    console.log("X and Y position of Mouse click:" + mouseCoords.pos.x + "," + mouseCoords.pos.y);
});

/* you don't even need to add this*/
document.addEventListener("keyup", (e) => {
    console.log(e.key + ":button was pressed");
});