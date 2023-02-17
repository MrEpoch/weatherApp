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
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3e2ec8741165eedcbeb5503d51b9acfc
    `,
    { mode: "cors" }
  );
  const weather = await fetchWeather.json();
  if (weather.main !== undefined) {
    const tempCel = convertTemp(weather.main.temp, "cel", "kel");
    const feelTempCel = convertTemp(weather.main.feels_like, "cel", "kel");
    const weatherLike = weather.weather[0].main;
    const humidity = weather.main.humidity + "%";
    return { weather, tempCel, feelTempCel, weatherLike, humidity };
  }
}

async function locationChange(NewLocation) {
  const newRequest = await weatherLoad(NewLocation);
  console.log(newRequest);
  return newRequest;
}

let location = "London";
let Myweather = locationChange("London").catch((err) => {
  console.error(err);
});

const svgThings = {
  search: `<svg class="search-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title>
    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,
    15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </svg>`,
};

const extraInfo = (weather) => {
  const rightContainer = htmlMe.divCreate("", "right-info");
  const humidity = htmlMe.h3Create("", "humidity-extra");
  Promise.all([weather]).then((value) => {
    humidity.textContent = `Humidity: ${value[0].humidity}`;
    rightContainer.append(humidity);
  });
  return rightContainer;
};

const middleSearch = () => {
  const middleContainer = htmlMe.divCreate("", "middle-container");
  const searchContainer = htmlMe.divCreate("", "search-container");
  const search = htmlMe.inputCreate("Search..", "search", "text");
  searchContainer.innerHTML = svgThings.search;
  searchContainer.append(search);
  middleContainer.append(searchContainer);
  return middleContainer;
};

const mainInfo = (weather) => {
  const leftContainer = htmlMe.divCreate("", "left-info");
  const situation = htmlMe.h2Create("", "situation");
  const place = htmlMe.h3Create(location, "place-main");
  const h2Degrees = htmlMe.h2Create("", "h2Degrees");
  const showTime = htmlMe.h3Create("", "show-time");
  Promise.all([weather]).then((value) => {
    console.log(value, "confused");
    situation.textContent = value[0].weatherLike;
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
    leftContainer.append(situation, h2Degrees, place, showTime);
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

let search = top.querySelector(".search");
let svgSearch = top.querySelector(".search-svg");

const mainLoader = (weather, func) => {
  document.body.innerHTML = "";

  top = areaLoad(
    [mainInfo(weather), middleSearch(), extraInfo(weather)],
    "top"
  );
  bottom = areaLoad([], "bottom");

  search = top.querySelector(".search");
  svgSearch = top.querySelector(".search-svg");
  const listeners = () => {
    svgSearch.addEventListener("click", () => {
      func();
    });

    search.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        console.log("enter was clicked");
        event.preventDefault();
        func();
      }
    });
  };
  listeners();
  document.body.append(top, bottom);
};

function clickContent() {
  let Mysearch = top.getElementsByClassName("search");
  console.log(Mysearch[0].value.trim());
  if (Mysearch[0].value.trim().length !== 0) {
    location = Mysearch[0].value;
    const prev = Myweather;
    Myweather = locationChange(Mysearch[0].value).catch((err) => {
      console.error(err);
    });
    Myweather.then((value) => {
      console.log(value);
      if (value !== undefined) {
        mainLoader(Myweather);
        svgSearch.addEventListener("click", () => {
          clickContent();
        });

        search.addEventListener("keypress", (event) => {
          console.log(event.key);
          if (event.key === "Enter") {
            console.log("enter was clicked");
            event.preventDefault();
            clickContent(clickContent);
          }
        });
        return true;
      } else {
        console.log("this fucker is not else right?", value);
        Myweather = prev;
        return false;
      }
    }).catch((err) => {
      console.log(err, "error at clickContent()");
    });
  }
}

mainLoader(Myweather, clickContent);
