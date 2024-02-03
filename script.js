const startE1=document.getElementById("start-bin");
const stopE1=document.getElementById("stop");
const resetE1=document.getElementById("resetBtn");
const timerE1=document.getElementById("timer");
let interval;
let timeLeft=1500;
let beat=new Audio('Evening-Improvisation-with-Ethera(chosic.com).mp3');
function updateTimer(){
    let minutes=Math.floor(timeLeft / 60);
    let seconds=Math.floor(timeLeft % 60);
    let formattedTime=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    

    timerE1.innerHTML=formattedTime;
}
function startTimer(){
    interval=setInterval(() => {
       
        timeLeft--;
        updateTimer();
        if(timeLeft==0){
            clearInterval(interval);
             beat.play();
             alert("Hi there get some refresh");
            timeLeft=1500;
            updateTimer();
        }
    }, 1000);
}
function stopTimer(){
    clearInterval(interval);
    beat.pause();
    clearInterval(interval);

}
function resetTimer(){
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
}
 startE1.addEventListener("click",startTimer)
 stopE1.addEventListener("click",stopTimer)
 resetE1.addEventListener("click",resetTimer)

