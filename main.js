const canvas = document.getElementById("Canvas");
canvas.width=400;

const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2,canvas.width*0.95)
const car=new Car(road.getLaneCenter(1),100,30,50,'meow.jpg');


animate();
function animate(){

    car.update();

    canvas.height=window.innerHeight;

    ctx.save()
    ctx.translate(0,-car.y+canvas.height/1.3)

    road.draw(ctx)
    car.draw(ctx)
    ctx.restore()
    requestAnimationFrame(animate)
}