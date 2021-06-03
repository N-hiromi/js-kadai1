const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let clearId;
let ds = 0;
let s = 0;
let min = 0;
let hour = 0;
const countUp = ()=>{
  clearId = setInterval(()  =>{
    if(ds < 9){
      ds++;
    }else{
      ds = 0;
      s++;
    }
    if(s > 59){
      s = 0;
      min++;
    }
    if(min > 59){
      min = 0;
      hour++;
    }
    let sS =String(s).padStart(2, "0");
    let sMin =String(min).padStart(2, "0");
    let sHour =String(hour).padStart(2, "0");
    timer.textContent =`${sHour}:${sMin}:${sS}.${ds}`;
  },100)
};
start.addEventListener("click", () =>{
  countUp();
  start.disabled = true;
  reset.disabled = false;
  stop.disabled = false;
}, false);
stop.addEventListener("click", () =>{
  clearInterval(clearId);
  stop.disabled = true;
  start.disabled = false;
  reset.disabled = false;
}, false)
reset.addEventListener("click", ()=>{
  clearInterval(clearId);
  timer.textContent = "00.00:00.0";
  start.disabled = false;
  stop.disabled = true;
})





