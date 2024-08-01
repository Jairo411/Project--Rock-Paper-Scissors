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
        EntityHolder.push(scissorObj);
    //    EntityHolder.push(paperObj);


    },
    DrawScene(){
        for(var i = 0; i<= EntityHolder.length-1; i++)
            {
                let gameRef= EntityHolder[i];
                window.addEventListener("load",() =>{
                drawSprite1(gameRef.image,gameRef.transform[0][2],gameRef.transform[1][2]);
                });
            }
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
    window.requestAnimationFrame(gameloop);
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
    calculateGameLoop(timeStamp);
    Scene0.gameScene()
    Scene0.DrawScene();
    Scene0.ClearScene();
    if(isrunning==true){
    window.requestAnimationFrame(gameloop);
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