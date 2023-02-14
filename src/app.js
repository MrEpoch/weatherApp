import "./style.css";
import * as htmlMe from "./components/methods";

// location Load:
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// faker api:https://fakerapi.it/api/v1/credit_cards?_quantity=1

function convertTemp(value, unitToBe, unitIs) {
  let returnedVal =
    "You didn't input to what you want value convert or what it was";
  if (unitToBe !== undefined && unitIs !== undefined) {
    if (unitToBe === "kel") {
      returnedVal = ((value + 459.67) * 5) / 9;
      if (unitIs === "cel") {
        returnedVal = value + 273.15;
      }
    } else if (unitToBe === "cel") {
      returnedVal = (value - 32) / 1.8;
      if (unitIs === "kel") {
        returnedVal = value - 273.15;
      }
    } else if (unitToBe === "fa") {
      returnedVal = (value + 32) * 1.8;
      if (unitIs === "kel") {
        returnedVal = (value * 9) / 5 - 459.67;
      }
    }
  }
  return returnedVal;
}

async function weatherLoad(location) {
  const fetchWeather = await fetch(
    `https://fakerapi.it/api/v1/credit_cards?_quantity=1`,
    { mode: "cors" }
  );
  const weather = await fetchWeather.json();
  const tempCel = convertTemp(weather.main.temp, "cel", "kel");
  const feelTempCel = convertTemp(weather.main.feels_like, "cel", "kel");
  const weatherLike = weather.weather[0].main;
  const humidity = weather.main.feels_like + "%";
  return { weather, tempCel, feelTempCel, weatherLike };
}

let location = "London";
let Myweather = weatherLoad(location);

const extraInfo = (weather) => {
  const rightContainer = htmlMe.divCreate("", "right-info");
  Promise.all([weather]).then((value) => {});
  return rightContainer;
};

const middleSearch = () => {
  const searchContainer = htmlMe.divCreate("", "search-container");
  const search = htmlMe.inputCreate("City..", "search", "text");
  searchContainer.append(search);
  return searchContainer;
};

const mainInfo = (weather) => {
  const leftContainer = htmlMe.divCreate("", "left-info");
  const place = htmlMe.h3Create();
  const h2Degrees = htmlMe.h2Create("", "h2Degrees");
  Promise.all([weather]).then((value) => {
    h2Degrees.append(Math.round(value[0].tempCel) + "°C");
    console.log(value);
    leftContainer.append(h2Degrees);
  });
  return leftContainer;
};

const areaLoad = (arrToAppend, areaClass) => {
  let area = htmlMe.divCreate("", areaClass);
  for (let i = 0; i < arrToAppend.length; i++) {
    area.append(arrToAppend[i]);
  }
  return area;
};

const top = areaLoad(
  [mainInfo(Myweather), middleSearch(), extraInfo(Myweather)],
  "top"
);
const bottom = areaLoad([], "bottom");
const search = top.getElementsByClassName("search");

document.body.append(top, bottom);
