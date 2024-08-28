const threeJsMod= require("threejs-math");
class gameObject{
    constructor(id_,Image_){
        this.id= id_;
        this.Image= Image_;
        this.transform= new threeJsMod.Matrix3();
        this.x=0;
        this.y=0;
        this.transform.set(0,0,this.x,0,0,this.y,0,0,0);
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
    }
    

    collisionDectection()
    {
         ///Get point turn it into a vec2 
    let pVec2=[point.x,point.y];
    // Get bounding box position, turn it into a vec2
    let bVec2=[align_bounding_box.minX,align_bounding_box.minY,align_bounding_box.maxX,align_bounding_box.maxY];


    let qVec2=[0,0];
    //Get clamped Q on B to P
    for(i = 0; i< 2; i++)
    {
        let v = pVec2[i];
        if(v < bVec2.minX){
            v = bVec2.minX
        }else if (v <bVec2.minY){
            v= bVec2.minY;
        }

        if(v > bVec2.maxX){
            v = bVec2.maxX
        }else if(v  > bVec2.maxY){
            v = bVec2.maxY;
        }
        qVec2[i]=v;
    }
}

    ReturnBoundingBox()
    {
        
    }
}


exports.gameObject= gameObject;
exports.UI_Square=UI_Square;
exports.threeJsMod=threeJsMod;
