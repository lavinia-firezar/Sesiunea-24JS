function displayWeatherForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Din datele venite, ne intereseaza doar list, care e un array.
      const { list } = data;
      // Inainte sa afisam noile informatii, le stergem de pe ecran pe cele vechi.
      const weatherForecastContainerElement =
        document.querySelector(".weather-forecast");
      weatherForecastContainerElement.innerHTML = "";

      // Avem nevoie de un obiect in care sa grupam predictiile pe zile:
      const daysMap = {};

      // Iteram prin list.
      list.forEach((element) => {
        const { dt } = element;
        const day = getDayOfWeek(dt);

        // Daca deja avem ziua saptamanii in obiect, ii aduagam o noua predictie.
        if (daysMap[day]) {
          daysMap[day].push(element);
          // Altfel, adaugam ziua saptamanii in obiect, alaturi de noua predictie.
        } else {
          daysMap[day] = [element];
        }
      });

      // Parcurgem cu for...in continutul obiectului daysMap. Cheile sunt zilele saptamanii pentru care avem predictii.
      for (key in daysMap) {
        // Afisam ziua saptamanii pe ecran.
        weatherForecastContainerElement.innerHTML += `<h3 class="text-primary">${key}</h3>`;
        // Pentru fiecare zi a saptamanii, extragem predictiile asociate si iteram prin ele.
        const days = daysMap[key];
        days.forEach((element) => {
          // Pentru fiecare element (predictie), extragem datele de interes.
          const { dt, main, weather } = element;
          // getHour este creata de noi, in utils/date.
          const hour = getHour(dt);
          // Rotunjim temperaturile.
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          // Atentie! weather este un array, cu un singur element.
          const weatherDescription = weather[0].description;
          // getWeatherIcon este creata de noi, in utils/weather.
          const weatherIcon = getWeatherIcon(weather[0].icon);

          // Afisam pe ecran informatiile extrase din API.
          weatherForecastContainerElement.innerHTML += `
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div><div>${hour}</div></div>
              <div><img src=${weatherIcon} alt="" /></div>
              <div><strong>${temperature} °C</strong></div>
              <div>${weatherDescription}</div>
              <div>Real feel: ${realFeel} °C</div>
            </div>
          `;
        });
      }
    });
}
