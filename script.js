const lines = [
  "Initializing Friendship.EXE...",
  "Connecting to Galaxy Network...",
  "Scanning User...",
  "Searching Friendship Database...",
  "Identity Found: NIDA ✔"
];

const ids = ["line1", "line2", "line3", "line4", "line5"];

let current = 0;

function typeLine(text, elementId, callback) {
  const el = document.getElementById(elementId);
  let i = 0;

  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(timer);
      if (callback) callback();
    }
  }, 40);
}

function nextLine() {
  if (current < lines.length) {
    typeLine(lines[current], ids[current], () => {
      current++;
      nextLine();
    });
  } else {
    startLoading();
  }
}

function startLoading() {
  let width = 0;
  const progress = document.getElementById("progress");

  const timer = setInterval(() => {
    width++;

    progress.style.width = width + "%";

    if (width === 45) {
      glitch();
    }

    if (width >= 100) {
      clearInterval(timer);

      setTimeout(() => {
        document.getElementById("bootScreen").style.display = "none";
        document.getElementById("aiScreen").style.display = "flex";
      }, 800);
    }
  }, 35);
}

function glitch() {
  document.body.style.filter = "brightness(2)";
  setTimeout(() => {
    document.body.style.filter = "none";
  }, 120);

  navigator.vibrate?.(100);
}

document.getElementById("startBtn").addEventListener("click", () => {
  alert("🚀 Mission Control will be added in Part 2!");
});

nextLine();
