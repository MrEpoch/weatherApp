import "./style.css";
import * as htmlMe from "./components/methods";

// faker api:https://fakerapi.it/api/v1/credit_cards?_quantity=1
async function weatherLoad(location) {
    const fetchWeather = await fetch(`https://fakerapi.it/api/v1/credit_cards?_quantity=1`, { mode: "cors" })
    const weather = await fetchWeather.json();
    return weather;
} 

let location = "London";
let Myweather = weatherLoad(location)

const extraInfo = (weather) => {
    const leftContainer = htmlMe.divCreate("", "left-info")
    weather.then((value) => { console.log(value) })
    return leftContainer;
}

const middleSearch = () => {
    const searchContainer = htmlMe.divCreate("", "search-container")
    const search = htmlMe.inputCreate("City..", "search", "text")
    searchContainer.append(search);
    return searchContainer;
}

const mainInfo = (weather) => {
    const rightContainer = htmlMe.divCreate("", "right-info");
    const place = htmlMe.h3Create();
    return rightContainer;
}

const areaLoad = (arrToAppend, areaClass) => {
  let area = htmlMe.divCreate("", areaClass);
  for (let i = 0; i < arrToAppend.length; i++) {
    area.append(arrToAppend[i]);
  }
  return area;
}

const top = areaLoad([mainInfo(Myweather), middleSearch(), extraInfo(Myweather)], "top");
const bottom = areaLoad([], "bottom");
const search = top.getElementsByClassName("search");

search.addEventListener("enter", () => {
    location = search.value;

})

document.body.append(top, bottom)