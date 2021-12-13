let color
var currentColor = [255, 255, 255];
var nextColor = getRandomColor();
var currentStep = 0;
var steps = 100;
 
function getRandomColor() {
  var color = [];
  while (color.length < 3) color.push(Math.floor(Math.random() * 255));
  return color;
}
 
document.body.onmousemove = function() {
  currentStep++;
  color = 'rgb( ' + currentColor.map(function(e,i){
    return Math.floor(e + (nextColor[i] - e) * currentStep / steps);
  }).join(', ') + ')';
  if (currentStep == 100) {
    currentStep = 0;
    currentColor = nextColor;
    nextColor = getRandomColor();
  }
}







window.addEventListener('load',()=>{
    let isColor = false
    let r = 0;
    let g = 250;
    let b = 0;
    let canvas = document.querySelector("#canvas")
    let ctx = canvas.getContext("2d")


    canvas.width = window.innerWidth
    canvas.height = window.innerHeight


    let paiting = false


    function startPosition(e){
        paiting = true
        draw(e)
    }

    function finishPosition(){
        paiting = false
        ctx.beginPath()
    }

    function draw(e){
        if(!paiting) return;

        ctx.lineWidth = 20;
        ctx.lineCap = 'round'
    //    let color =  setInterval(()=>{
    //         if(!isColor){
    //             r++
    //             g--
    //             b++
    //             if(r==250){
    //                 isColor = true
    //             }
    //         }
    //        if(isColor){
    //         r--
    //         g++
    //         b = 0
    //         if(r==0){
    //             isColor = false
    //         }
    //        }

    //     },1000)
    //      "rgb("+r+","+g+","+b+")"
        ctx.strokeStyle = color
        ctx.lineTo(e.clientX,e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)
        console.log(r)
        
    }

    canvas.addEventListener('mousedown',startPosition)
    canvas.addEventListener('mousemove',draw)
    canvas.addEventListener('mouseup',finishPosition)






})