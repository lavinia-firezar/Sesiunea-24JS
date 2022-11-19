scrollToTopButton = document.getElementById("scrollToTopButton");
let currentCity = localStorage.getItem("city");

if (!currentCity) {
  currentCity = "București";
  localStorage.setItem("city", "București");
}

// Actualizam orasul afisat pe ecran.
updateCityDisplay(currentCity);

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
