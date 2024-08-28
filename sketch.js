

function setup() {
  createCanvas(800, 600);
  
  ball.x = width/2
  ball.y = random(100, 300)
  ball.xSpeed = 3
  ball.ySpeed = random(1, 3)
  ball.size = 10

  left.height = 40
  left.width = 5;
  left.y = height / 2 - left.height/2;
  left.x = 50

  right.height = 40
  right.width = 5
  right.y = height / 2 - right.height/2;
  right.x = width - 50 - 5

  leftScore = 0;
  RightScore = 0;

}

const ball = {};
const left = {};
const right = {};
let leftScore;
let RightScore;

function draw() {
  
  drawMap();
  collisionCheck();
  move();
  drawPlayers();
  
  if (ball.x <= 0){
    reset()
    RightScore++;
  }
  
  if (ball.x + ball.size >= width) {
    reset()
    leftScore++;
  } 

  drawBall();
  
}

function drawMap(){
  background(0);
  for ( i = 0; i< width; i += width/17){
    fill(100)
    rect(width/2,i , 5, 20);
  }

  text(leftScore, 30, height - 30);
  text(RightScore, width - 90, height - 30);
}

function drawPlayers() {
    fill(255)
    rect(left.x, left.y , left.width, left.height);
    rect(right.x, right.y , right.width, right.height);
}

function collisionCheck(){
  if ((ball.y <= 0)) {
    ball.ySpeed *= -1;
  } 

  if ((ball.y + ball.size >= height)) {
    ball.ySpeed *= -1;
  } 

  if (ball.x <= left.x + left.width){
      if (ball.y + ball.size > left.y ){
        if (ball.y < left.y + left.height){
          ball.xSpeed *= -1;
        }
      }
  }

  if (ball.x + ball.size >= right.x){
    if (ball.y + ball.size > right.y ){
      if (ball.y < right.y + right.height){
        ball.xSpeed *= -1;
      }
    }
}
}

function reset(){
  ball.x = width/2
  ball.y = random(100, 300)
  
  ball.xSpeed *= -1
  ball.ySpeed = random(-3, 3)
}


function drawBall(){
  fill(255)
  square(ball.x, ball.y, ball.size);
  textSize(30)
}

function move() {

  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  var speed = ball.xSpeed;

  if (keyIsDown(87)) {
    // Code to run.
    //if (left.y >= 0){
    left.y -= speed
   // }
  }

  if (keyIsDown(83)) {
    // Code to run.
   // if (left.y + left.size <= height){
      left.y += speed
     // }
  }

  if (keyIsDown(UP_ARROW)) {
    // Code to run.
    //if (right.y >= 0){
      right.y -= speed
     // }
  }

  if (keyIsDown(DOWN_ARROW)) {
    // Code to run.
    //if (right.y + right.size <= height){
      right.y += speed
      //}
  }
}

