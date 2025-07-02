const out = console.log;

const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const projects = document.querySelector("#projects");
const blog = document.querySelector("#blog");
const songs = document.querySelector("#songs");
const gap = document.querySelector("#gap");
const circle = document.querySelector("#circle");
const els = document.querySelector(".el");
const cont = document.querySelector("#cont");
const abc = document.querySelector("#aboutc");
const coc = document.querySelector("#contactc");
const prc = document.querySelector("#projectsc");
const blc = document.querySelector("#blogc");
const sgc = document.querySelector("#songc");
const body = document.querySelector("body");
const thesong = document.querySelector("#thesong");
const pointer = document.querySelector("#pointer");
const cards = document.querySelectorAll(".card");

const rad = Math.PI / 180;
const aba = 45;
const coa = 135;
const pra = 180;
const bla = 0;
const sga = 270;
const gpa = 270;
let n = 0;
let k = 0;
let t = 0;
let s = 0;

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

const hypot = circle.offsetWidth / 2;

let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

setInterval(tick, 25);
window.onload = () => {
    body.style.visibility = "visible";
};
document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
about.addEventListener("click", e => {
    e.stopPropagation();
    clicked(e, aba, 1);
});
contact.addEventListener("click", e => {
    e.stopPropagation();
    clicked(e, coa, 2)
});
projects.addEventListener("click", e => {
    e.stopPropagation();
    clicked(e, pra, 3)
});
blog.addEventListener("click", e => {
    e.stopPropagation();
    clicked(e, bla, 4)
});
songs.addEventListener("click", e => {
    e.stopPropagation();
    const index = Math.floor(Math.random() * songsdata.length);
    thesong.innerText = songsdata[index].name;
    thesong.href = songsdata[index].link;
    clicked(e, sga, 5)
});
cards.forEach(e => {
    e.addEventListener("click", a => {
        a.stopPropagation();
    });
});
body.addEventListener("click", e => {
    clicked(e, sga, 0);
})

function clicked(e, a, f) {
    close();
    const x = e.clientX - centerX;
    const y = -(e.clientY - centerY);

    let angle = Math.atan2(y, x);
    angle = angle * 180 / Math.PI;

    if(y < 0) angle = angle + 360;
    if(f === 0) a = 90;

    t = 90 - a;
    s = f;
}

function tick() {
    const ax = (mouseX - cursorX);
    const ay = (mouseY - cursorY);
    const dist = Math.sqrt(ax ** 2 + ay ** 2);
    let wd = 18.75;
    let ht = 18.75;

    if(dist >= 5) {
        pointer.style.transform = "scale(0.5)";
        pointer.style.opacity = "1";
        pointer.style.backgroundColor = "transparent";
    } else {
        pointer.style.transform = "scale(1)";
        pointer.style.opacity = "0.4";
        pointer.style.backgroundColor = "gray";
    }
    
    cursorX = cursorX + ax / 5;
    cursorY = cursorY + ay / 5;

    pointer.style.left = cursorX - wd + "px";
    pointer.style.top = cursorY - ht + "px";

    k = (t - n) / 10;
    n = n + k;
    if(Math.abs(n - t) < 5) done();
    rot(n);
}

function close() {
    abc.style.opacity = "0";
    abc.style.pointerEvents = "none";
    coc.style.opacity = "0";
    coc.style.pointerEvents = "none";
    prc.style.opacity = "0";
    prc.style.pointerEvents = "none";
    blc.style.opacity = "0";
    blc.style.pointerEvents = "none";
    sgc.style.opacity = "0";
    sgc.style.pointerEvents = "none";
}

function done() {
    if(s === 0) return;

    if(s === 1) {
        abc.style.opacity = "1";
        abc.style.pointerEvents = "auto";
    }
    if(s === 2) {
        coc.style.opacity = "1";
        coc.style.pointerEvents = "auto";
    }
    if(s === 3) {
        prc.style.opacity = "1";
        prc.style.pointerEvents = "auto";
    }
    if(s === 4) {
        blc.style.opacity = "1";
        blc.style.pointerEvents = "auto";
    }
    if(s === 5) {
        sgc.style.opacity = "1";
        sgc.style.pointerEvents = "auto";
    }

    s = 0;
}

function rot(a) {
    circle.style.transform = `rotate(${a}deg)`;
    render((360 - aba - a) * rad, (360 - coa - a) * rad, (360 - pra - a) * rad, (360 - bla - a) * rad, (360 - sga - a) * rad, (360 - gpa - a) * rad);
}

function render(aba, coa, pra, bla, sga, gpa) {
    const ofs = about.offsetWidth / 2;
    const ofs2 = gap.offsetWidth / 2;

    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    circle.style.left = centerX - hypot + "px";
    circle.style.top = centerY - hypot + "px";

    about.style.left = centerX + (Math.cos(aba) * hypot - ofs)+ "px";
    about.style.top = centerY + (Math.sin(aba) * hypot - ofs) + "px";

    contact.style.left = centerX + (Math.cos(coa) * hypot - ofs) + "px";
    contact.style.top = centerY + (Math.sin(coa) * hypot - ofs) + "px";

    projects.style.left = centerX + (Math.cos(pra) * hypot - ofs) + "px";
    projects.style.top = centerY + (Math.sin(pra) * hypot - ofs) + "px";

    blog.style.left = centerX + (Math.cos(bla) * hypot - ofs) + "px";
    blog.style.top = centerY + (Math.sin(bla) * hypot - ofs) + "px";

    songs.style.left = centerX + (Math.cos(sga) * hypot - ofs) + "px";
    songs.style.top = centerY + (Math.sin(sga) * hypot - ofs) + "px";

    gap.style.left = centerX + (Math.cos(gpa) * hypot - ofs2) + "px";
    gap.style.top = centerY + (Math.sin(gpa) * hypot - ofs2) + "px";
}

render();
