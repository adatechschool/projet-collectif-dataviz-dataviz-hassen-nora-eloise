let angles = [49.09, 63, 85, 54, 42, 16, 86, 76]
let totalSum = 0

let colors = ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557']
let animatedAngles = []
let angleTexts = ["music", "art", "culture", "cinéma", "other"]
let angleHover = -1

function setup() {
  let canvas = createCanvas(400, 400)
  canvas.parent('pieChartContainer')
  noStroke();

 
  totalSum = angles.reduce((acc, curr) => acc + curr, 0)

  animatedAngles = new Array(angles.length).fill(0)
}

function draw() {
  background(255);
  let lastAngle = 0;
  for (let i = 0; i < angles.length; i++) {
    let colorIndex = i % colors.length;
    fill(colors[colorIndex]);
    
    let currentAngle = radians((animatedAngles[i] / totalSum) * 360)
    arc(width / 2, height / 2, 300, 300, lastAngle, lastAngle + currentAngle)

   
    if (angleHover === i) {
      let label = angleTexts[i]
      fill(0);
      textAlign(CENTER, CENTER)
      textSize(18);
      textStyle(BOLD);
      text(label, width / 2, height / 2)
    }

    lastAngle += currentAngle;
  }
  
  
  for (let i = 0; i < angles.length; i++) {
    if (animatedAngles[i] < angles[i]) {
      animatedAngles[i] += 1; 
    }
  }
}

function mouseMoved() {
  let angleSum = 0;
  let mouseXFromCenter = mouseX - width / 2
  let mouseYFromCenter = mouseY - height / 2
  let mouseAngle = atan2(mouseYFromCenter, mouseXFromCenter) + PI
  for (let i = 0; i < angles.length; i++) {
    angleSum += angles[i];
    if (mouseAngle < radians(angleSum)) {
      angleHover = i
      return;
    }
  }
  angleHover = -1
}
