let clockk = document.querySelector(".clock");
let buttons = document.querySelectorAll(".format button");
setInterval(timeStatus, 1000);

function timeStatus(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds =date.getSeconds();
    let formatt = clockk.getAttribute("data-time");

    let amorpm ;
    amorpm = hour>12 ? "PM": "AM";
    if(formatt === "12"){
        hour = hour> 12 ? hour %12 : hour;
        clockk.innerHTML = `<h1>${hour}:${minute}:${seconds} ${amorpm}</h1>`;
    }

   else{ clockk.innerHTML = `<h1>${hour}:${minute}:${seconds} </h1>`;
}
}

buttons.forEach((button) =>{
    button.addEventListener("click", ()=>{
        formatt = button.getAttribute("data-time");
        clockk.setAttribute("data-time", formatt);
        timeStatus();
    });
});