// set initial count
let count = 0;

// select valuye and buttons
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        const style =  e.currentTarget.classList;

        if(style.contains('decrease')) count--;
        else if(style.contains('increase')) count++;
        else if(style.contains('reset')) count = 0;

        if(count > 0) value.style.color = "green";
        if(count < 0) value.style.color = "red";
        if(count === 0) value.style.color = "#222";

        value.textContent = count;
    })
})

