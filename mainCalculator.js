var submit = document.getElementById("submit")
var toggleSlope = true
var _getElement = document.getElementById
submit.addEventListener("click", function()
{
  let y1Value = getElement("y1").value;
  let y2Value = getElement("y2").value;
  let x1Value = getElement("x1").value;
  let x2Value = getElement("x2").value;

  let yValue = y1Value - y2Value
  let xValue = x1Value - x2Value
  var slopeAnswer = yValue/xValue
  var slopeFractionAnswer = `${yValue}/${xValue}`
  
  getElement("slopeAnswer").innerHTML = `The Slope Is: ${slopeAnswer}`
  getElement("slopeFractionAnswer").innerHTML = `The fraction is ${slopeFractionAnswer}`
  console.log(`The Slope Is: ${slopeAnswer}`)
  if (toggleSlope == true){
    
  }
});
