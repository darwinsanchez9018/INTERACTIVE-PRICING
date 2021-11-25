let views = document.getElementById("views");
let price = document.getElementById("price");
let slider = document.getElementById("input-slider");

let pageViews = ["10K ", "50K ", "100K ", "500K ", "1M "];
let perMonth = ["8", "12", "16", "24", "36"];
let isYearly = false;

const ball = document.getElementById("toggler-ball");
const bar = document.getElementById("toggler-bar");
const toggler = document.getElementById("toggler");

//---------- Slider & PageViews--------- 
slider.addEventListener("input", function() {
    updateValue();
    // console.log(slider.value);
    views.innerHTML = pageViews[slider.value];


    //--------- Slider Porcent value
    let valueBar = this.value * 25;

    this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${valueBar}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%`
});

//-------- 25% Discount -------- 
function updateValue() {
    if(isYearly) {
        price.innerHTML = perMonth[slider.value] * .75;
    } else {
        price.innerHTML = perMonth[slider.value];
    }
}


//------------ Quitando y añadiendo la clase .active - Moviendo BALL & comprobando si es Yearly
bar.addEventListener("click", function () {
    if(toggler.classList.contains("active") && isYearly === false) {
        isYearly = true;
        toggler.classList.remove("active");
        ball.style.transform = "translateX(22px)";
    } else {
        isYearly = false;
        toggler.classList.add("active");
        ball.style.transform = "translateX(0)";
    }

    updateValue ();
});