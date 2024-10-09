window.onload = pageLoad;

function pageLoad(){
	var start = document.getElementById('start')
	start.onclick = startGame;
}

function startGame(){
	alert("Ready");
	var numbox = document.getElementById('numbox').value;
	var color = document.getElementById('color').value;

	addBox(numbox,color);
	timeStart();
}

var gamestarted;
var timer;

function timeStart(){
	var TIMER_TICK = 1000;
	timer = document.getElementById('clock');
	timer.innerHTML = 30; //จับเวลา
	gamestarted = true

	function timeCount(){
		CheckLose();
		//CheckWin();
		var allbox = document.querySelectorAll("#layer div");
		if ((allbox.length > 0)){
			timer.innerHTML -= 1;//ลดลง
		}
	
	}
	
	gamestarted = setInterval(timeCount,TIMER_TICK); 
}

function CheckWin(){
	var allbox = document.querySelectorAll("#layer div");
	if ((allbox.length == 0)){
		alert("You Win!");
		clearInterval(gamestarted);
		timer.innerHTML = null;
	}
}
function CheckLose(){
	if (timer.innerHTML == 0){
		clearInterval(gamestarted);
		clearScreen();
		alert("You Lose!");
		timer.innerHTML = null;
	}
}

function addBox(numbox,colorDrop){
	 
	var gameLayer = document.getElementById('layer');
	// var colorDrop = val;

	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = colorDrop;
		tempbox.id = i;
		tempbox.style.left = Math.random(0,10) * (500 - 25) + "px";
		tempbox.style.top = Math.random(0,10) * (500 - 25) + "px";
		tempbox.classList.add("square");
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
		setTimeout(CheckWin,10);
	}
}

function clearScreen(){
	
	//delete all  div
	var allbox = document.querySelectorAll("#layer div");
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i])
	}
	
}




