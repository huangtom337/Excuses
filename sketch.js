let flappy;
let obstacles = [];
let score = 0;
let button;
let excuses;

function setup(){
createCanvas(400, 700);
flappy = new Flappy();
obstacles.push(new Obstacles());
excuses = createP();
}

function draw(){
background(0);

excuses.html("Total reasonable solution dodged: " + score);

for (let obstacle of obstacles){
    obstacle.show();
    obstacle.update();

    if(obstacle.collides(flappy)){
        gameEnds();
        frameRate(0);
    }

    if(obstacle.x < -1){
        obstacles.splice(obstacle, 1);
        score++;
    }
}

flappy.choose();
flappy.show();

if (frameCount % 50 === 0){
    obstacles.push(new Obstacles());
}

}

function keyPressed(){
    if (key === ' '){
        flappy.fly();
    }
}

function gameEnds(){

    button = createButton("Restart");
    button.position(width/2-30, height/2 + 20);
    button.mousePressed(restart);
    push();
    fill(255);
    rectMode(CENTER);
    rect(width/2, height/2, 400, 100);
    fill(0);
    textAlign(CENTER);
    text(evaluate(score), width/2, height/2);

    pop();
}

function restart(){
    window.location.reload();
}

function evaluate(score) {
    if (score > 2){
        return `You only made ${score} excuses? Get working, make more excuses!`;
    } else if (score > 5) {
        return `${score}?? not bad, you are on your way to mastering this`;
    } else if (score >= 10) {
        return `YOU MADE ${score} EXCUSES, IS THIS JONATHAN PLAYING?`;
    } else {
        return `${score} excuses lol you fucking suck`;
    }
}