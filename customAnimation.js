var stand = function (any) {
    any.setup = function () {
        any.createCanvas(500, 500);
        any.rectMode(any.CENTER);
    };

    any.draw = function () {
        any.strokeWeight(0.5);
        var middleX = any.width / 2;
        var middleY = any.height / 2;
        any.background(200);
        any.fill(169, 169, 169);
        any.rect(middleX, middleY, any.width, any.height);

        // Tan Triangle
        any.fill(255, 255, 153);
        any.triangle(0, middleY, middleX - .10 * any.width, middleY, 0, any.height);

        // Two light Gray Triangles
        any.fill(224, 224, 224);
        // Upper
        any.triangle(middleX - .10 * any.width, middleY + .10 * any.height, middleX - .10 * any.width, -55, any.width, middleY);
        // Lower
        any.triangle(middleX - .10 * any.width, any.height + 50, -5, any.height, middleX - .10 * any.width, middleY);

        // Red Triangle
        any.fill(255, 0, 0);
        any.triangle(any.width, -5, middleX - .10 * any.width, middleY + .10 * any.height, any.width, any.height + .15 * any.height);

        // Black Triangle
        any.fill(0, 0, 0);
        any.triangle(middleX - .10 * any.width, -10, middleX - .10 * any.width, any.height - 10, -50, middleY);
    };
};

// Create an instance of the stand sketch
var myp5Stand = new p5(stand, "stand");

var animation = function (any) {
    var startTime;
    var animationDuration = 5000; // Set the duration of each animation cycle

    any.setup = function () {
        any.createCanvas(500, 500);
        any.rectMode(any.CENTER);
        startTime = any.millis(); // Record the start time
    };

    any.draw = function () {
        any.strokeWeight(0.5);
        var middleX = any.width / 2;
        var middleY = any.height / 2;
        any.background(200);
        any.fill(169, 169, 169)
        any.rect(middleX, middleY, any.width, any.height);

        // Calculate the current time within the animation cycle
        var elapsedTime = (any.millis() - startTime) % animationDuration;

        var tanColor = any.map(elapsedTime, 0, animationDuration, 255, 153);
        var grayColor = any.map(elapsedTime, 0, animationDuration, 224, 0);
        var redColor = any.map(elapsedTime, 0, animationDuration, 255, 0);
        var blackColor = any.map(elapsedTime, 0, animationDuration, 0, 255);

        // Apply new colors
        any.fill(tanColor, tanColor, grayColor);
        any.triangle(0, middleY, middleX - .10 * any.width, middleY, 0, any.height);

        any.fill(grayColor, grayColor, grayColor);
        any.triangle(middleX - .10 * any.width, middleY + .10 * any.height, middleX - .10 * any.width, -55, any.width, middleY);

        any.fill(redColor, 0, 0);
        any.triangle(any.width, -5, middleX - .10 * any.width, middleY + .10 * any.height, any.width, any.height + .15 * any.height);

        any.fill(blackColor, blackColor, blackColor);
        any.triangle(middleX - .10 * any.width, -10, middleX - .10 * any.width, any.height - 10, -50, middleY);
    };
};


var myp5 = new p5(animation, "animation");
