let canvas;
let context;
let isrunning=false;

let secondsPassed;
let oldTimeStamp = 0.0;
let fps;

const paperimg = new Image();
const scissorimg= new Image();
const rockimg = new Image();



paperimg.src="res/images/paper.png";
scissorimg.src="res/images/scissors.png";
rockimg.src="res/images/rock.png";

paperimg.width=800;
paperimg.height=800;


function intialization()
{
    canvas = document.getElementById("viewport");
    context = canvas.getContext("2d");

    paperimg.addEventListener("load", () => {
        drawSprite(paperimg,0,0,1600,1200,0,0,600,600);
    });
    scissorimg.addEventListener("load",() =>{
       drawSprite(scissorimg,0,0,1600,1200,200,0,600,600); 
    });
    isrunning=true;
    if(isrunning===true){
    window.requestAnimationFrame(gameloop);
    }
}



function gameloop(timeStamp)
{
    calculateGameLoop(timeStamp);
    frameBuffer();
    window.requestAnimationFrame(gameloop);
    /*request animation frame will actually set the frame rate of my canvas 
    there is no need to actually get the steps of my web browser and then use those 
    steps to simulate my game logic.
     */
    
}

function drawSprite(CanvasImageSource, x_source,y_source, w_source,h_source, x_destination, y_destination, w_destination, h_destination)
{
    context.drawImage(CanvasImageSource,x_source,y_source,w_source,h_source, x_destination, y_destination, w_destination,h_destination);

}
function drawCircle()
{
    context.beginPath();
    context.arc(0,0,40,0, 2 * Math.PI);
    context.stroke();
}

function frameBuffer()
{
    let randomColor= Math.random() > 0.5? '#ff8080' : '#0099b0';
    context.fillStyle = randomColor;
    context.fillRect(100,50,200,175);
    //Draw things on the screen 

    //Save state or something

    //Clear things on the screen
}

function calculateGameLoop(timeStamp)
{
    secondsPassed= (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

 //   console.log("Amount of time program has been running:"+secondsPassed);
  //  console.log("old timestamp:"+ oldTimeStamp);
    

    //calculate fps 
    fps = Math.round(1/secondsPassed);

    //Draw number to the screen 
    context.fillStyle = 'white';
    context.fillRect(930,0,200,100);
    context.font = '25px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 930,30);
}






intialization();
drawCircle();