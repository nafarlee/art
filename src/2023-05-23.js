const WIDTH = 500;
const HEIGHT = 600;
const HORIZON = HEIGHT / 1.55;

function toVector(x1, y1, x2, y2) {
  const vx = x2 - x1;
  const vy = y2 - y1;
  const magnitude = Math.sqrt(vx ** 2 + vy ** 2);
  return [vx / magnitude, vy / magnitude];
}

function branch(x, y) {
  const rx = randomGaussian(50, 20)
  const ry = randomGaussian(50, 20)
  line(x, y, x + rx, y + ry)
  line(x + rx, y + ry, x + rx + ry, y + ry + rx)
  line(x + rx, y + ry, x - rx + ry, y + ry + rx)
}



function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  randomSeed(0)
  const WHITE = color(255, 255, 255);
  const GREY = color(150, 150, 150)
  const BLACK = color(0, 0, 0);
  const SECONDARY = color(17, 86, 150);
  const PRIMARY = color(255, 107, 159);
  const TERTIARY = color(55, 128, 196);

  strokeWeight(20);

  background(SECONDARY);

  stroke(PRIMARY);
  fill(WHITE);
  circle(WIDTH / 2, HEIGHT / 2, 350);

  noStroke();
  fill(SECONDARY);
  rect(0, HORIZON, WIDTH, HEIGHT);
  
  noStroke();
  fill(TERTIARY);
  arc(WIDTH / 2, HORIZON, WIDTH * 0.8, 300, 0, PI);
  
  noStroke()
  fill(PRIMARY)
  arc(WIDTH / 2, HORIZON, WIDTH * 0.5, 150, 0, PI);
  
  noStroke()
  fill(BLACK)
  rect(0, HORIZON, WIDTH, 15)

  noStroke()
  const mountains = [
    [-60, 250, 50],
    [130, 200, 30],
    [250, 200, 40],
    [300, 300, 70],
  ]
  for (const [x, width, height] of mountains) {
    fill(BLACK)
    triangle(x, HORIZON, x + width, HORIZON, x + (width / 2), HORIZON - height)
    fill(GREY)
    triangle(x + width * 0.7, HORIZON, x + width, HORIZON, x + (width / 2), HORIZON - height)
  }
  
  strokeWeight(3)
  stroke(BLACK)
  let branchX = 0
  while (branchX < WIDTH) {
    branch(branchX, 0)
    branchX += randomGaussian(40)
  }
  
  noStroke()
  let count = 1500
  const diameter = 7
  while (count > 0) {
    count -= 1
    fill(PRIMARY)
    const x = random(WIDTH)
    const y = cos((x + 250) / 160) * 200 + random(290)
    circle(x, y, diameter)
    fill(WHITE)
    circle(x + 5, y + 5, diameter)
  }
}
