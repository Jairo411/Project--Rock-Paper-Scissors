const threeJsMod= require("threejs-math");
class gameObject{
    constructor(id_,Image_){
        this.id= id_;
        this.Image= Image_;
        this.transform= new threeJsMod.Matrix3();
        this.x=0;
        this.y=0;
    }

}
class UI_Square{
    constructor(x_,y_,width_,height_,offSetX_,offSetY_)
    {
        this.x=x_;
        this.y=y_;
        this.width=width_;
        this.height=height_;
        this.offSetX=offSetX_;
        this.offSetY=offSetY_;
        this.image= new Image();
    }
    
//You're comparing here P and Q 
// Not P in comparison to the bounding box
    collisionDetection(pointX_,pointY_)
    {
    let pVec2= new threeJsMod.Vector2(0,0);
    pVec2.x = pointX_;
    pVec2.y = pointY_;

    let boundingBox = [new threeJsMod.Vector2(),new threeJsMod.Vector2(), new threeJsMod.Vector2(), new threeJsMod.Vector2()];

    //min,min
    boundingBox[0].set(this.x,this.y);
    //min,max
    boundingBox[1].set(this.x,this.y+this.height);
    //max,min
    boundingBox[2].set(this.x+this.width,this.y);
    //max,max
    boundingBox[3].set(this.x+this.width,this.y+this.height);


        ///Change this to use MATH library
         ///Get point turn it into a vec2 
   // let pVec2=[point_.x,point_.y];
    // Get bounding box position, turn it into a vec2
    let qVec2= new threeJsMod.Vector2();
    //Get clamped Q on B to P

    //comparing each point of my bounding box 
    // in relation to my arbitary point
    // I think I need to compare each point, with each other point
    for(let i =0; i< boundingBox.length; i++)
    {
        //conditions for being outside
        // outside of min,min
        if(pVec2.x < boundingBox[i].x && pVec2.y < boundingBox[i].y)
        {
            pVec2= boundingBox[i];
            
            console.log("I am outside of min,min");
        }
        // outside of min,max
        if(pVec2.x < boundingBox[i].x && pVec2.y > boundingBox[i].y)
        {
            pVec2 = boundingBox[i];
            console.log("I am outside of min,max");
        }
        // outside of max,min
        if(pVec2.x > boundingBox[i].x && pVec2.y < boundingBox[i].y)
        {
            pVec2 = boundingBox[i];
            console.log("I am outside of max, min");
        }
        // outside max,max
        if(pVec2.x > boundingBox[i].x && pVec2.y > boundingBox[i].y)
        {
            pVec2 = boundingBox[i];
            console.log("I am outside of max, max");
        }
        //conditions for being inside the box
    }
}

    ReturnBoundingBox()
    {
        
    }
}


exports.gameObject= gameObject;
exports.UI_Square=UI_Square;
exports.threeJsMod=threeJsMod;
