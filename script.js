
const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    console.log("Submit button clicked");
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
    console.log("Rate Again button clicked");
    thanksContainer.classList.add("hidden");
    mainContainer.style.display = "block";
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});
