const cl = console.log;
const acchead = [...document.querySelectorAll(".acchead")];

const oneventhand = (eve) => {
let acch = document.querySelector(".acchead.active");
let c1 = eve.target.className;

if (acch){
    acch.classList.add("active");
}
eve.target.classList.remove("active");

if(c1.includes("active")){
    eve.target.classList.remove("active");
}else{
    eve.target.classList.add("active");
}
}

acchead.forEach(p => {
    p.addEventListener("click",oneventhand)
});