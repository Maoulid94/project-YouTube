const btnSrch = document.querySelector(".bsrch");
const imgSrch = document.querySelector("srch1");

const clickBtn = document.querySelector(".moreBtn");
const lessBtn = document.querySelector(".lessIten");
const readMoreTxt = document.querySelector(".list-show-item");

const plusBtn = document.querySelector(".more");
const moinsBtn = document.querySelector(".less");
const listMoreBtn = document.querySelector(".plusBtn");

const scrollItemBar = document.querySelector(".left-side-content")

btnSrch.addEventListener("click", ()=>{
    btnSrch.classList.toggle("scrchBtn");
  
    imgSrch.classList.toggle("scrchBtn");

    // btnSrch.style.border = "0.3px solid rgba(0, 0, 255, 0.815)";
    // imgSrch.style.visibility = "visisble";
});


clickBtn.addEventListener("click", () => {
    readMoreTxt.style.display = "flex";
    clickBtn.style.display = "none";
});
lessBtn.addEventListener("click", () => {
    readMoreTxt.style.display = "none";
    clickBtn.style.display = "flex";
});


plusBtn.addEventListener("click", () => {
    listMoreBtn.style.display = "flex";
    plusBtn.style.display = "none";
});
moinsBtn.addEventListener("click", () => {
    listMoreBtn.style.display = "none";
    plusBtn.style.display = "flex";
});



