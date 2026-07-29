const terminal = document.getElementById("terminalText");
const progressBar = document.getElementById("progressBar");

const bootLines = [
"> Initializing FRIENDSHIP.EXE...",
"> Connecting to Friendship Galaxy...",
"> Loading Secure Database...",
"> Searching for User...",
"> Match Found...",
"> Identity Confirmed: NIDA",
"> Access Level: LEGENDARY FRIEND",
"> Preparing AI Interface..."
];

let line = 0;

function typeBoot() {
    if (line >= bootLines.length) {
        loadProgress();
        return;
    }

    let text = bootLines[line];
    let i = 0;

    const typing = setInterval(() => {
        terminal.innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);
            terminal.innerHTML += "<br>";
            line++;
            setTimeout(typeBoot, 350);
        }
    }, 35);
}

function loadProgress() {
    let width = 0;

    const loader = setInterval(() => {

        width++;

        progressBar.style.width = width + "%";

        if(width==35 || width==62 || width==89){
            document.body.style.filter="brightness(2)";
            setTimeout(()=>{
                document.body.style.filter="none";
            },120);
        }

        if(width>=100){
            clearInterval(loader);

            setTimeout(showIntro,800);
        }

    },30);
}

function typeMessage(text, element, speed){

    let i=0;

    element.innerHTML="";

    const timer=setInterval(()=>{

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){
            clearInterval(timer);
        }

    },speed);

}

function showIntro(){

    document.getElementById("bootScene").classList.remove("active");
    document.getElementById("introScene").classList.add("active");

    const message=`Hello Captain Nida...

Welcome to FRIENDSHIP.EXE.

Thousands of friendships exist...

But only a few are selected for this classified mission.

Today...

You have been chosen.

Complete every mission to unlock the Secret Friendship File created by Agent Affan.

Good Luck.`;

    typeMessage(message,document.getElementById("aiMessage"),30);

}

document.getElementById("continueBtn").onclick=function(){

    alert("🚀 Mission Control is coming in Chapter 2!");

}

typeBoot();
