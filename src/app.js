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

function timeGet() {
  const date = new Date().toString().split(" ");
  const dayNamed = date[0];
  const monthNamed = date[1];
  const dayNum = date[2];
  const year = date[3];
  const time = date[4];

  return { dayNum, dayNamed, monthNamed, year, time };
}

async function weatherLoad(location) {
  const fetchWeather = await fetch(
    `
    `,
    { mode: "cors" }
  );
  const weather = await fetchWeather.json();
  const tempCel = convertTemp(weather.main.temp, "cel", "kel");
  const feelTempCel = convertTemp(weather.main.feels_like, "cel", "kel");
  const weatherLike = weather.weather[0].main;
  const humidity = weather.main.feels_like + "%";
  return { weather, tempCel, feelTempCel, weatherLike };
}

let location;
let Myweather;

async function locationChange(NewLocation) {
  const newRequest = weatherLoad(NewLocation);
  console.log(newRequest);
  newRequest
    .then((value) => {
      console.log(newRequest);
      location = NewLocation;
      Myweather = value;
      return Myweather;
    })
    .catch((err) => {
      console.error(
        "Build method which will give user error that this country doesn't exist"
      );
    });
}

let test = locationChange("London");

const svgThings = {
  search: `<svg class="search-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title>
    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,
    15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </svg>`,
};

const extraInfo = (weather) => {
  const rightContainer = htmlMe.divCreate("", "right-info");
  Promise.all([weather]).then((value) => {});
  return rightContainer;
};

const middleSearch = () => {
  const middleContainer = htmlMe.divCreate("", "middle-container");
  const searchContainer = htmlMe.divCreate("", "search-container");
  const search = htmlMe.inputCreate("City..", "search", "text");
  searchContainer.innerHTML = svgThings.search;
  searchContainer.append(search);
  middleContainer.append(searchContainer);
  return middleContainer;
};

const time = new Date();
const another = time.toString().split(" ");
console.log(another);

const mainInfo = (weather) => {
  const leftContainer = htmlMe.divCreate("", "left-info");
  const place = htmlMe.h3Create(location, "place-main");
  const h2Degrees = htmlMe.h2Create("", "h2Degrees");
  const showTime = htmlMe.h3Create("", "show-time");
  test.then(() => {
    Promise.all([weather]).then((value) => {
      h2Degrees.append(Math.round(value[0].tempCel) + "°C");
      const time = timeGet();
      showTime.textContent =
        time.dayNamed +
        ", " +
        time.dayNum +
        "th" +
        " " +
        time.monthNamed +
        " " +
        time.year +
        " " +
        time.time;
      console.log(value);
      leftContainer.append(h2Degrees, place, showTime);
    });
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

let top = areaLoad(
  [mainInfo(Myweather), middleSearch(), extraInfo(Myweather)],
  "top"
);
let bottom = areaLoad([], "bottom");

let search = top.getElementsByClassName("search");
let svgSearch = top.getElementsByClassName("search-svg");

const mainLoader = (weather) => {
  document.body.innerHTML = "";
  top = areaLoad(
    [mainInfo(weather), middleSearch(), extraInfo(weather)],
    "top"
  );
  bottom = areaLoad([], "bottom");
  top.getElementsByClassName("search");
  svgSearch = top.getElementsByClassName("search-svg");
  document.body.append(top, bottom);
};

mainLoader(Myweather);

function clickContent() {
  locationChange(search[0].value);
  mainLoader(Myweather);
}

console.log(svgSearch[0]);

svgSearch[0].addEventListener("click", () => {
  clickContent();
});

search[0].addEventListener("keypress", (event) => {
  console.log("Before enter");
  if (event.key === "Enter") {
    console.log("enter was clicked");
    event.preventDefault();
    clickContent();
  }
});
