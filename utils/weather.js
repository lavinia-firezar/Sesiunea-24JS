// Primim o valoare reprezentand m/s si returnam km/h.
function windToKmPerHour(metersPerSec) {
  return (metersPerSec * 3600) / 1000;
}

// Pe baza codului iconitei, generam link-ul acesteia.
function getWeatherIcon(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
