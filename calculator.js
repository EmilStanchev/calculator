var zero = "0";
var one = "1";
var two = "2";
var three = "3";
var four = "4";
var five = "5";
var six = "6";
var seven = "7";
var eight = "8";
var nine = "9";
var add = "+";
var subtract = "-";
var multiply = "*";
var divide = "/";
var coma = ".";
var equal = "=";
var history = 'History';
var percents = "%"; 
var root = "√";
function compute() {
        document.getElementById("calculator1").value = eval(document.getElementById("calculator1").value)
    }

function getNum(f, val) {
   document.getElementById("calculator").value += val;
   document.getElementById("calculator1").value += val;
   return val;
}
function change(f,val) {
    let element = document.querySelector(".unselected"); 
    element.classList.toggle("selected");
    document.getElementById("calculator").value += val;   
}

function sqrt(val) {
    let sqrt = document.getElementById("calculator1").value = Math.sqrt((document.getElementById("calculator1").value));
}
function percent() {
    document.getElementById("calculator1").value = eval((document.getElementById("calculator1").value)/100);
}
