var score = 0;
hitRan = 0;

function increseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

function getNewHit(){
    hitRan = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRan;
}

function makebubble(){
    
var clutter = "";

for (var i=0; i<=160; i++){
    var ran = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${ran}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;


}

var timer = 60;
function runTimer(){
    var timing = setInterval( function() {
        if(timer > 0){
            timer --;
            document.querySelector("#runTimer").textContent = timer; 
        }
        else{
            clearInterval(timing);
            document.querySelector('#pbtm').innerHTML = "<h1>Game is Over..!</h1>"
        }
    },1000)
}


document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum = (Number(details.target.textContent));
    if (clickedNum === hitRan){
        increseScore();
        makebubble();
        getNewHit();
    }
})

runTimer();
makebubble();
getNewHit();