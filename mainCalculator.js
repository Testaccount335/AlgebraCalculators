var submit = document.getElementById("submit")
var toggleSlope = true
var _getElement = document.getElementById
submit.addEventListener("click", function()
{
  let y1Value = _getElement("y1").value;
  let y2Value = _getElement("y2").value;
  let x1Value = _getElement("x1").value;
  let x2Value = _getElement("x2").value;

  let yValue = y1Value - y2Value
  let xValue = x1Value - x2Value
  var slopeAnswer = yValue/xValue
  var slopeFractionAnswer = `${yValue}/${xValue}`
  
  _getElement("slopeAnswer").innerHTML = `The Slope Is: ${slopeAnswer}`
  _getElement("slopeFractionAnswer").innerHTML = `The fraction is ${slopeFractionAnswer}`
  console.log(`The Slope Is: ${slopeAnswer}`)
  if (toggleSlope == true){
    
  }
});
