let animationColors = [];

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent('custom-animation');
    rectMode(CENTER);
    noStroke();

    // Initialize random colors for each triangle
    for (let i = 0; i < 5; i++) {
        animationColors.push(color(random(255), random(255), random(255)));
    }
}

function draw() {
    background(169, 169, 169);

    // Draw triangles with custom animation
    for (let i = 0; i < 5; i++) {
        let middleX = width / 2;
        let middleY = height / 2;
        let size = 100;

        fill(animationColors[i]);
        triangle(middleX, middleY - size / 2, middleX - size / 2, middleY + size / 2, middleX + size / 2, middleY + size / 2);
    }

    // Custom animation logic
    let pulseSpeed = 0.05;
    for (let i = 0; i < animationColors.length; i++) {
        animationColors[i] = color(
            (sin(frameCount * pulseSpeed + i * 0.5) + 1) * 127,   // Red channel
            (cos(frameCount * pulseSpeed + i * 0.5) + 1) * 127,   // Green channel
            (sin(frameCount * pulseSpeed + i * 0.5) + cos(frameCount * pulseSpeed + i * 0.5)) * 127  // Blue channel
        );
    }
}
