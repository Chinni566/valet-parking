canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
images_array=["parkingLot.jpg","images.jpg","lot.jpg",];
random_number=Math.floor(Math.random()*5);
background_image=images_array[random_number];
car_image="Capture.png";
car_x=10;
car_y=10;
car_width=100;
car_height=200;
function add(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadbg;
    bg_imgtag.src=background_image;
    car_imgtag=new Image();
    car_imgtag.onload=uploadcar;
    car_imgtag.src=car_image;
}
function uploadbg(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
    }
function uploadcar(){
    ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
}   
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }

}
function up()
{
    if(car_y>=0)
    {
        car_y=car_y-30;
        console.log("when up arrow is pressed x= " + car_x +"y= "+ car_y);
        uploadbg();
        uploadcar();
    }
}

function down()
{
    if(car_y<=500)
    {
		car_y=car_y+30;
        console.log("when up arrow is pressed x= " + car_x +"y= "+ car_y);
        uploadbg();
        uploadcar();
    }
}

function left()
{
    if(car_x>=0)
    {
        car_x=car_x-30;
        console.log("when up arrow is pressed x= " + car_x +"y= "+car_y);
        uploadbg();
        uploadcar();
    }
}

function right()
{
    if(car_x<=700)
    {
        car_x=car_x+30;
        console.log("when up arrow is pressed x= " + car_x +"y= "+ car_y);
        uploadbg();
        uploadcar();
    }
}