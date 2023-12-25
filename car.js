class Car{
    constructor(x,y,width,height,bg){
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.bg=bg

        this.speed=0
        this.acceleration=0.2
        this.maxSpeed=3
        this.friction=0.05
        this.angle=0

        this.engineSound= new Audio('engineSound.mp3')
        this.brakingSound= new Audio('brakingSound.mp3')
        this.acceleratingSound=new Audio('acceleratingSound.mp3')
        
        this.engineSound.volume=0.1
        this.brakingSound.volume=.5
        this.acceleratingSound.volume=.3

        this.controls=new Controls();
    }

    update(){

        this.#move()
               // this.y-=this.speed;
    }
    #move(){
        if(this){
            this.engineSound.play()
        }
        if(this.speed!==0){
            this.acceleratingSound.play()
            this.engineSound.volume=0.5
        }
        if (this.speed===0){
            this.acceleratingSound.pause()
            this.engineSound.volume=0.0
        }
        if(this.controls.forward==false && this.controls.reverse==false && this.speed!==0){
            this.brakingSound.play()
        }
        if (this.controls.forward){
            
            this.speed+=this.acceleration
            
            
        }
        if(this.controls.reverse){

            this.speed-=this.acceleration
            
            
        }
        if (this.speed!=0){
            const flip=this.speed>0?1:-1
            if (this.controls.right ){
                this.angle-=0.03*flip
            }
            if (this.controls.left ){
                this.angle+=0.03*flip
            }
        }

        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed= -this.maxSpeed/2
        }
        if(this.speed>0){
            this.speed-=this.friction
        }
        if (this.speed<0){
            this.speed+=this.friction
        }

        if (Math.abs(this.speed)<this.friction){
            this.speed=0
        }
        this.x-=Math.sin(this.angle)*this.speed
        this.y-=Math.cos(this.angle)*this.speed

    }

    draw(ctx){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angle)

        ctx.beginPath();
        ctx.rect(
           -this.width/2,
            -this.height/2,
             this.width,
             this.height
        )
        // const background=new Image()
        // background.src='meow.jpg'
        // background.onload=function(){

        //     ctx.drawImage(background, 0, 0);
        // }
        const background=new Image()
        background.src='meow.jpg'

                const pattern=ctx.createPattern(background,'repeat')
                ctx.fillStyle=pattern

    

            
            
            ctx.fill()

        ctx.restore();
    }
}