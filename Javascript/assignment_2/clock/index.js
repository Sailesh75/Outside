//DOM manipulation

const domFunction = (element, className, text, targetId, type, value) => {
  var element = document.createElement(element);
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
  var seconds = 00;
  var tens = 00;
  var thousands = 00;
  var appendThousands = document.querySelector(".thousands");
  var appendTens = document.querySelector(".tens");
  var appendSeconds = document.querySelector(".seconds");
  var buttonStart = document.querySelector(".stopwatch--start");
  var buttonStop = document.querySelector(".stopwatch--stop");
  var buttonReset = document.querySelector(".stopwatch--reset");
  var Interval;

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
  var appendThousands = document.querySelector(".thousands");
  var appendTens = document.querySelector(".tens");
  var appendSeconds = document.querySelector(".seconds");
  var appendSession = document.querySelector(".session");

  var date = new Date();
  var h = date.getHours(); // 0 - 23         //second
  var m = date.getMinutes(); // 0 - 59       //tens
  var s = date.getSeconds(); // 0 - 59       //thousands
  var session = "AM";

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
