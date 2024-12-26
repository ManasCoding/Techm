const Btn = document.querySelector(".btn");
let log = document.querySelector("#log");
const sign = document.querySelector("#sign");
const logBox = document.querySelector(".log-box");
const signBox = document.querySelector(".sign-box");
const logClose = document.querySelector("#log-clx");
const signClose = document.querySelector("#sign-clx");


log.addEventListener("click", () => {
    console.log("clicked")
    logBox.style.display = "block";
});

sign.addEventListener("click", () => {
    console.log("clicked sign")
    signBox.style.display = "block";
});


logClose.addEventListener("click", () => {
    logBox.style.display = "none";
});

signClose.addEventListener("click", () => {
    signBox.style.display = "none";
});