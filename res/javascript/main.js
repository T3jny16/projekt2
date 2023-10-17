const mic = document.getElementById("mic");
const auto = document.getElementById("auto");
const upgrade = document.getElementById("upgrade");
const gol = document.getElementById("gol");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

let cookies = 0;

let clicker = 0;

let clickerupgrader = 0;

let upgraderprice = 30;


let autoprice = 80;
let autoincrease = 0;

let interval;

mic.addEventListener("click", increase);
upgrade.addEventListener("click", upgrade1);
auto.addEventListener("click", upgrade2);

gol.innerText = "Góly: " + cookies;

function increase() {
    cookies++;
    gol.innerText = "Góly: " + cookies; 
}

function upgrade1() {
    if (cookies >= upgraderprice) {
        cookies -= upgraderprice;
        upgraderprice += 30;
        gol.innerText = "Góly: " + cookies;
        upgrade.innerHTML = '<img src="/res/obrazky/balon.png" alt="" id="image1"> <br> Lepší Míč: '  + upgraderprice;
    } else {
        alert("Nemáš dostatečně Gólů");
    }
}

function upgrade2() {
    if (cookies >= autoprice) {
        cookies -= autoprice;
        autoprice += 40;
        gol.innerText = "Góly: " + cookies;
        auto.innerHTML = '<img src="/res/obrazky/striker.png" alt="" id="image1"> <br> Další Striker: ' + autoprice;
        if (autoincrease === 0) {
            setInterval(() => {
                cookies += autoincrease;
                gol.innerText = "Góly: " + cookies; 
            }, 1000)
        }
        autoincrease++;
    }
}
function cheats() {
    cookies = 10000;
}
cheats();