let reset = document.querySelector("#change-text1");
let plus = document.querySelector("#change-text2");
let minus = document.querySelector("#change-text3");
let countHTML = document.querySelector("#text-result");

let count = 0;
reset.onclick = () => {
    countHTML.innerHTML = "値：0";
}

plus.onclick = () => {
    count++;
    countHTML.innerHTML = "値：" + count;
}

minus.onclick = () => {
    count--;
    countHTML.innerHTML = "値：" + count;
}