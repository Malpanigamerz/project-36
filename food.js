class Food{
    constructor(){
    this.Image = loadImage("images/Milk(1).png");
    var lastFed,foodStock;
    }
    show(){
    var x=80,y=100;

    imageMode(CENTER);
    image(this.Image,720,220,70,70)

    if(this.foodStock!=0) {
      for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
             x=80;
             y=y+50; 
          }
          image(this.Image,x,y,50,50)
          x=x+30;
      }
     }
    }
    
    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFood(){

    }
    
}