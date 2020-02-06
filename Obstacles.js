function Obstacles() {
    this.top = random(height/4, height/2);
    this.bottom = random(height/4, height/2);
    this.x = width;
    this.w = 20;
    this.speed = 5;



    this.show = function() {
        fill(255);
        if (height - (this.top + this.bottom) < 100 ){
            this.top -= 10;
        }
         rect(this.x, 0, this.w, this.top);
         rect(this.x, height-this.bottom, this.w, this.bottom);
    //can make excuses collectable with smoke value.
    };

    this.update = function () {
        this.x -= this.speed;
    };

    this.collides = function (flappy) {
        return (flappy.y <= this.top || flappy.y >= height - this.bottom) &&
                    (flappy.x >= this.x && flappy.x <= this.x + this.w);


    };
}