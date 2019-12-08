var oDiv = document.getElementById("div1");
function toMounseUp(){
	oDiv.style.background = "red";
}
function toChangeRed(){
	oDiv.style.background = 'green';
}
debugger;
oDiv.onmouseover = toMounseUp();
oDiv.onmouseout = toChangeRed();