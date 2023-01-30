//DOM manipulation

const domFunction = (elementName, className, text, targetId, type, value) => {
  let element = document.createElement(elementName);
  element.className = className;
  element.appendChild(document.createTextNode(text));
  document.querySelector(targetId).appendChild(element);
  element.type = type;
  element.value = value;
};

domFunction('div','functions','','.container');
domFunction("button", "button button--stopwatch", "StopWatch", ".functions");
domFunction("button", "button button--clock", "Clock", ".functions");

domFunction('div','watch','','.container');
domFunction("span", "digit seconds", "00", ".watch");
domFunction("span", "digit", ":", ".watch");
domFunction("span", "digit tens", "00", ".watch");
domFunction("span", "digit", ":", ".watch");
domFunction("span", "digit thousands", "00", ".watch");
domFunction("span", "session", "", ".watch");

domFunction('div','button-container','','.container');
domFunction("button", "stopwatch stopwatch--start", "start", ".button-container");
domFunction("button", "stopwatch stopwatch--stop", "stop", ".button-container");
domFunction("button", "stopwatch stopwatch--reset", "reset", ".button-container");



document.querySelector(".button--clock").addEventListener("click", () => {
  clock();
  document.querySelector(".stopwatch--start").disabled = true;
  document.querySelector(".stopwatch--stop").disabled = true;
  document.querySelector(".stopwatch--reset").disabled = true;
  document.querySelector(".button--stopwatch").addEventListener("click",()=>{
    location.reload();
  })
});

//stopwatch

stopwatch();

function stopwatch() {
  let seconds = 00;
  let tens = 00;
  let thousands = 00;
  let appendThousands = document.querySelector(".thousands");
  let appendTens = document.querySelector(".tens");
  let appendSeconds = document.querySelector(".seconds");
  let buttonStart = document.querySelector(".stopwatch--start");
  let buttonStop = document.querySelector(".stopwatch--stop");
  let buttonReset = document.querySelector(".stopwatch--reset");
  let Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    document.querySelector(".button--clock").disabled = true;
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
    document.querySelector(".button--clock").disabled = false;
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    document.querySelector(".button--clock").disabled = false;
    thousands = "00";
    tens = "00";
    seconds = "00";
    appendThousands.innerText = thousands;
    appendTens.innerText = tens;
    appendSeconds.innerText = seconds;
  };

  function startTimer() {
    thousands++;

    if (thousands > 9) {
      appendThousands.innerText = thousands;
    }

    if (thousands > 99) {
      console.log("tens");
      tens++;
      appendTens.innerText = "0" + tens;
      thousands = 0;
      appendThousands.innerText = "0" + 0;
    }

    if (tens > 9) {
      appendTens.innerText = tens;
    }

    if (tens > 59) {
      console.log("tens");
      seconds++;
      appendSeconds.innerText = "0" + seconds;
      tens = 0;
      appendTens.innerText = "0" + 0;
    }
  }
}

//digital clock

function clock() {
  let appendThousands = document.querySelector(".thousands");
  let appendTens = document.querySelector(".tens");
  let appendSeconds = document.querySelector(".seconds");
  let appendSession = document.querySelector(".session");

  let date = new Date();
  let h = date.getHours(); // 0 - 23         //second
  let m = date.getMinutes(); // 0 - 59       //tens
  let s = date.getSeconds(); // 0 - 59       //thousands
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  appendThousands.innerText = s;
  appendTens.innerText = m;
  appendSeconds.innerText = h;
  appendSession.innerText = session;
  setTimeout(clock, 1000);
}
