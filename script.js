let  time=30;
let score=0;
let val;
function makebubble(){
    let clutter="";

    for(let i=1;i<148;i++){
        let value= Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${value}</div>`;
    }

    document.querySelector("#pbtm").innerHTML= clutter;
}
function timer(){
       let a= setInterval(() => {
            if(time>0){
                time--;
                document.querySelector("#timer").textContent = time;
            }
            else{
                clearInterval(a);
                document.querySelector("#pbtm").innerHTML="";
            }
        },1000);
}
function hitVal(){
    val=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=val;
}
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
function scoreLogic(){
    document.querySelector("#pbtm")
    .addEventListener("click", function(dets){
        let a=dets.target.textContent;
        if(val==a){
            increaseScore();
            makebubble();
            hitVal();
        }
    });
}
makebubble();
timer();
hitVal();
scoreLogic();

