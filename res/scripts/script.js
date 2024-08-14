///CANVAS VARIABLES
let canvas;
let context;
///CANVAS VARIABLES

///GAME LOOP VARIALES
let isrunning=false;
let secondsPassed;
let oldTimeStamp = 0.0;
let fps;
///GAME LOOP VARIABLES

///GAMEOBJECT OBJECT VARIABLE
function gameObject(id,image)
{
    this.id=id;
    this.image=image;
    // Transformation matrix stored in a 2d array 
// [[a c e],
//  [b d f],
//  [0 0 1]
    this.transform= [[0,0,0],[0,0,0],[0,0,0]];
}
///GAMEOBJECT OBJECT VARIABLE
///GAMEOBJECT REFERENCE VARIABLES
let rockObj;
let scissorObj;
let paperObj;
///GAMEOBJECT REFERENCE VARIABLES
///ENTITY HOLDER///
let EntityHolder=[];

//UI Object 
let UI_square= {};

UI_square.x=0;
UI_square.y=0;
UI_square.width=0;
UI_square.height=0;
UI_square.offsetx=0;
UI_square.offsety=0;

//UI_square.DrawUIImage= funcion(UI_image)
//{

//}
//UI Object constructor 
function CUI_square(x_,y_,width_,height_,offsetX_,offsetY_)
{
    this.x=x_;
    this.y=y_;
    this.width=width_;
    this.height=height_;
    this.offsetX=offsetX_;
    this.offsetY=offsetY_;
};



//Helper functions 
function DrawUISquare(UI_square)
{
    context.fillRect(UI_square.x,UI_square.y,UI_square.width,UI_square.height);
    //Hardcoded offset leaving UI_square with offset variable just in case I want to do cool stuff with it.
    context.clearRect(UI_square.x+5,UI_square.y+5,UI_square.width-10,UI_square.height-10);
};


const Scene0 = {
    CreateScene(){

        let paperimg = new Image();
        let scissorimg= new Image();
        let rockimg = new Image();
    
        paperimg.src="res/images/paper.png";
        scissorimg.src="res/images/scissors.png";
        rockimg.src="res/images/rock.png";
    
        paperimg.width=800;
        paperimg.height=800;
    
    
        rockObj = new gameObject();
        rockObj.transform[0][2]=-600; // x value
        rockObj.transform[1][2]=-200 // y value
    
        scissorObj= new gameObject();
        scissorObj.transform[0][2]=0; //x value
        scissorObj.transform[1][2]=-200; // y value
    
        paperObj = new gameObject();
        paperObj.transform[0][2]=0; //x value
        paperObj.transform[1][2]=0; //y value 
    
        //intializing rock
        rockObj.id=0;
        rockObj.image=rockimg;
        
        //intializing scissors 
        scissorObj.id=1;
        scissorObj.image=scissorimg;
        
        //intializing paper 
        paperObj.id=2;
        paperObj.image=paperimg;
    
    
        EntityHolder.push(rockObj);
        EntityHolder.push(scissorObj)


    },
    DrawScene(){
        for(var i = 0; i<= EntityHolder.length-1; i++)
            {
                let gameRef= EntityHolder[i];
                drawSprite1(gameRef.image,gameRef.transform[0][2],gameRef.transform[1][2]);
            
            }
    },
    DrawUI(){

        let UI_S = new CUI_square (240,500,150,150);
        let UI_S1= new CUI_square (440,500,150,150);
        let UI_S2= new CUI_square (640,500,150,150);

        DrawUISquare(UI_S);
        DrawUISquare(UI_S1);
        DrawUISquare(UI_S2);

    },
    gameScene()
    {
    
    },
    ClearScene()
    {

    },
};





function intialization()
{
    canvas = document.getElementById("viewport");
    context = canvas.getContext("2d");

    //All of this should be in a separate draw function
   /* paperObj.image.addEventListener("load", () => {
        drawSprite(paperObj.image,0,0,1600,1200,0,0,600,600);
    });
    scissorObj.image.addEventListener("load",() =>{
       drawSprite(scissorObj.image,0,0,1600,1200,250,0,600,600); 
    });

    rockObj.image.addEventListener("load",() =>{
        drawSprite(rockObj.image,0,0,1600,1200,400,0,600,600); 
    });*/
    isrunning=true;
    Scene0.CreateScene();
    
    if(isrunning===true){
        //in order to use this properly I need to calculate the speed at which the canvas is running, convert it to miliseconds then divide it by my desire frame rate
        // the units of time here are in milliseconds
        //Creating a 16 ms delay on purpose
    window.setInterval(gameloop,1000/60);
    }
}


function drawSprite0(CanvasImageSource, x_source,y_source, w_source,h_source, x_destination, y_destination, w_destination, h_destination)
{
    context.drawImage(CanvasImageSource,x_source,y_source,w_source,h_source, x_destination, y_destination, w_destination,h_destination);

}

function drawSprite1(CanvasImageSource, x_source, y_source){
    context.drawImage(CanvasImageSource,x_source,y_source);
}


function calculateGameLoop(timeStamp)
{
    //I think that when the first time this gets excuted timestamp equals originally zero
    //In order lock the frame rate, what you need is to make it so that the frame rate equals the same amount of executions in a second
    secondsPassed= (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    //calculate fps 
    fps = Math.round(1/secondsPassed);

    //Draw number to the screen 
    context.fillStyle = 'white';
    context.fillRect(930,0,200,100);
    context.font = '25px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 930,30);
}


function gameloop(timeStamp)
{
    //calculateGameLoop(performance.now());
    Scene0.gameScene()
    Scene0.DrawScene();
    Scene0.DrawUI();
    Scene0.ClearScene();
    if(isrunning==true){
 //  window.requestAnimationFrame(gameloop);
     window.setInterval(gameloop,1000/60);
    }
    /*request animation frame will actually set the frame rate of my canvas 
    there is no need to actually get the steps of my web browser and then use those 
    steps to simulate my game logic.
     */
    
}

intialization();

canvas.addEventListener("click",(e)=>{
    console.log("X and Y position of Mouse click:" + e.clientX + "," + e.clientY);
});

/* you don't even need to add this*/
document.addEventListener("keyup",(e)=>{
    console.log(e.key+":button was pressed");
});