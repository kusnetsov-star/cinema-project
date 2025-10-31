const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total")
let cost = 500;
let totalPrice = 0;

schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked") && !event.target.classList.contains("light")){
    event.target.classList.toggle("active");

    if(event.target.classList.contains("active")){
      totalPrice += cost;
    }else{
      totalPrice -= cost;
    }

    totalPriceTag.textContent = totalPrice;
  }
});