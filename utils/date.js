function getDayOfWeek(utc) {
  // Pentru a crea o data, pornind la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai.
  const date = new Date(utc * 1000);
  // Extragem ziua saptamanii, sub forma de index.
  const dayIndex = date.getDay();
  let day;

  switch (dayIndex) {
    case 0:
      day = "Duminica";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marti";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sambata";
      break;
    default:
      day = "unknown day";
  }

  // Retunam ziua echivalenta indexului.
  return day;
}

function getHour(utc) {
  // Pentru a crea o data, pornind la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai.
  const date = new Date(utc * 1000);
  // Extragem ora. Daca ora are o valoare mai mica de 10, ii adaugam un 0.
  let hour = date.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  // Extragem minutele. Daca minutele au o valoare mai mica de 10, le adaugam un 0.
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // Returnam ora, sub formatul dorit.
  return `${hour}:${minutes}`;
}
