let mints = 0;
let sec = 0;
let hrs = 0;
let intervalId; 

function startime() {
  let block = document.querySelector(".time");

  if (sec == 59) {
    mints++;
    sec = 0;
  }
  if (mints == 60) {
    hrs++;
    mints = 0;
  }
  sec++;
  block.innerText = `${hrs} : ${mints} : ${sec}`;
}

function start() {
  if (!intervalId) {
    intervalId = setInterval(startime, 1000); // Start the interval and store its ID
  }
}

function stop() {
  clearInterval(intervalId); 
  intervalId = null; 
}

function reset() {
location.reload()
}

