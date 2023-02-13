import "./style.css";
import * as htmlMe from "./components/methods";

// faker api:https://fakerapi.it/api/v1/credit_cards?_quantity=1
async function weatherLoad(location) {
    const fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3e2ec8741165eedcbeb5503d51b9acfc`, { mode: "cors" })
    const weather = await fetchWeather.json();
    return weather;
} 

let location = "London";
let Myweather = weatherLoad(location)

const inputTaker = () => {
    
}


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
    const rightContainer = htmlMe.divCreate("", "right-info")
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


document.body.append(top, bottom)