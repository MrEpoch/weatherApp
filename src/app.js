import "./style.css";
import * as htmlMe from "./components/methods";

async function weatherLoad(location) {
    const fetchWeather = await fetch('https://fakerapi.it/api/v1/credit_cards?_quantity=1', { mode: "cors" })
    const weather = await fetchWeather.json();
    return weather;
} 

const weather = weatherLoad();


const extraInfo = () => {
    const leftContainer = htmlMe.divCreate("", "left-info")



    weather.then((value) => {})
    return leftContainer;
}

const middleSearch = () => {
    const searchContainer = htmlMe.divCreate("", "search-container")
    const search = htmlMe.inputCreate("City..", "search", "text")
    searchContainer.append(search);
    return searchContainer;
}

const mainInfo = () => {
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

const top = areaLoad([mainInfo(), middleSearch(), extraInfo()], "top");
const bottom = areaLoad([], "bottom");


document.body.append(top, bottom)