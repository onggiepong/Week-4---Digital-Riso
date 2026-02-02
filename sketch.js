/*
For this exercise, I manipulate the wavelength of the wave and duplicate it. 

I adjusted the wavelength to form and wave-like structure and used blue to emphasise and clarify its visual.

I also duplicated and adjusted the wavelength and height of my wave to create a mountain-like structure with green colour to enhance its recognisability.

I also extended the height of the bottom line and changed it to brown colour, allowing it to be seen visually as the ground.

My work aims to create a nature-inspired environment as a piece of artwork, highlighting how people often admire art in museums while overlooking the beauty that nature presents to us.

Moving on, I aim to improve my use of contrast and explore more on how different elements can be combined to strengthen the overall composition.

Overall, I am happy that I managed to create this work on my own and learned how coding can be applied to my future projects.
*/

function setup() {
    createCanvas(512, 512);
    frameRate(15);
    noFill();
}

function draw() {
    background(245, 245, 245);

    // background
    stroke(0);
    var standardDeviation = 400;
    for (var i = 0; i < 5000; i++) {
        var backDist = randomGaussian(0, standardDeviation);
        var b = createVector(backDist, random(-height, height));
        point(b.x, b.y);
    }

    // circle
    stroke(227, 28, 35);
    translate(width / 5, height / 4);
    for (var i = 0; i < 5000; i++) {
        var cirDist = (max(random(0, 1), random(0, 1)) * width) / 10;
        var angle = random(0, PI * 2);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }

    // top line
    //stroke(0, 157, 244);
    //for (var i = 0; i < 500; i++) {
    //    var lineX = random(-100, 450);
    //    var lineY = random(20 - 10, 20 + 10);
    //    point(lineX, lineY);
    //}

    // bottom line
    stroke(77, 46, 4);
    for (var i = 0; i < 2000; i++) {
        var lineX = random(-100, 400);
        var lineY = random(350 - 10, 270 + 20);
        point(lineX, lineY);
    }

    // left & right lines
    //stroke(77, 46, 4);
    //for (var i = 0; i < 1000; i++) {
    //    var leftLineX = random(90 - 10, 90 + 10);
    //    var leftLineY = max(random(10, 330), random(10, 330));
    //    point(leftLineX, leftLineY);
//
    //    var rightLineX = random(340 - 10, 340 + 10);
    //    var rightLineY = max(random(10, 330), random(10, 330));
    //    point(rightLineX, rightLineY);
    //}

    // square
    //stroke(36, 157, 148);
    //for (var i = 0; i < 5000; i++) {
    //    var sqX = random(100, 250);
    //    var sqY = random(80, 230);
    //    push();
    //    rotate(-PI / 8);
    //    point(sqX, sqY);
    //    pop();
    //}

    // square shadow
    //stroke(0, 145, 200);
    //for (var i = 0; i < 5000; i++) {
    //    var sqBX = min(random(100, 250), random(100, 250));
    //    var sqBY = max(random(80, 230), random(80, 230));
    //    push();
    //    rotate(-PI / 8);
    //    point(sqBX, sqBY);
    //    pop();
    //}

    // sea dark blue
    push();
    stroke(12, 28, 135);
    translate(-100, height / 1.5);
    var amp = 20;
    for (var i = 0; i < 1500; i++) {
        var waveX = random(0, width);
        var waveY = cos((waveX / width) * PI * 8) * amp;
        waveY += random(-15, 15);
        point(waveX, waveY);
    }
    pop();

    // sea green
    push();
    stroke(38, 168, 255);
    translate(-100, height / 1.5);
    var amp = 20;
    for (var i = 0; i < 5000; i++) {
        var waveX = random(0, width);
        var waveY = cos((waveX / width) * PI * 8) * amp;
        waveY += random(-15, 15);
        point(waveX, waveY); 
    }
    pop();
    
    // mountain green
    push();
    stroke(9, 112, 0);
    translate(-100, height / 2.5);
    var amp = 60;
    for (var i = 0; i < 5000; i++) {
        var waveX = random(0, width);
        var waveY = cos((waveX / width) * PI * 5) * amp;
        waveY += random(-12, 15);
        point(waveX, waveY); 
    }
    pop();
    
    // mountain green
    push();
    stroke(9, 112, 31);
    translate(-100, height / 3);
    var amp = 60;
    for (var i = 0; i < 5000; i++) {
        var waveX = random(5, width);
        var waveY = cos((waveX / width) * PI * 5) * amp;
        waveY += random(-12, 15);
        point(waveX, waveY); 
    }
    pop();
}
