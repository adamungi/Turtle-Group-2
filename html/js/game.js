const context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 400;
context.canvas.width = 1220;

var character = new character();

const square = {
  height: 32,
  jumping: true,
  width: 32,
  x: 0,
  xVelocity: 0,
  y: 0,
  yVelocity: 0
};
