let angles = [49.09 ,63 ,85 ,54 ,42 ,16 ,86 ,76]
let totalSum = 0
let colors = ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557']

function setup() {
  let canvas = createCanvas(400, 400)
  canvas.parent('pieChartContainer')
  noStroke()
  noLoop()
  for (let i = 0; i < 5; i++) {
    let angle = random(10, 90)
    angles.push(angle)
    totalSum += angle
  }
}
function draw() {
  background(255)
  let lastAngle = 0
  for (let i = 0; i < angles.length; i++) {
    let colorIndex = i % colors.length;
    fill(colors[colorIndex]);
    let angle = radians(angles[i])
    arc(width / 2, height / 2, 300, 300, lastAngle, lastAngle + angle)
    lastAngle += angle
  }
}

  function mousePressed() {
// mouse click
  let newAngle = random(10, 90)
  angles.push(newAngle)
  totalSum += newAngle
  }