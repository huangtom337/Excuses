function Flappy() {
    img = loadImage("assets/Capture.jpg");
    this.y = height / 2;
    this.x = 80;

    this.flying = false;
    this.time = 2;
    this.gravity = 0.3;
    this.velocity = 0;

    this.show = function () {
        fill(255);
        image(img, this.x, this.y);
    };

    this.fall = function () {
        this.velocity += this.gravity;
        this.y += this.velocity -  (this.gravity/2)*this.time*this.time;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
        }
    };

    this.choose = function () {
        if (this.flying === false) {
            this.fall();
        } else {
            this.flying = false;
        }
    };

    this.fly = function () {
        this.velocity = 0;
        this.velocity -= 10;
        this.y += this.velocity;
        this.flying = true;
    }
}



