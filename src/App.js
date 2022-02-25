import React from 'react';
import './index.css';
import Navbar from "./components/Navbar"
import {useState} from "react"
import Weather from './components/Weather';


function App() {
  const [inputData, setInputData] = useState({})
  const [currentWeather, setCurrentWeather] = useState({})
  const [loc, setLoc] = useState({loc:"Arlington"})
  let apiKey = "7ab98e97faa64c4d8b4104902222202"
  console.log(currentWeather)
  console.log("Location: " + loc.loc)

  React.useEffect(() =>{///Finds weather data of certain location
    console.log(loc.loc)
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${loc.loc}&aqi=no`)
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    
    .then(data => {
      if(data !=null){//Only change currentWeather when there is data for it
        setCurrentWeather(data)
      }else{
        alert(`${loc.loc} was not found`)
      }
    })
  }, [loc.loc])

  React.useEffect(() =>{///Finds locations with search bar
    fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${loc.loc}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      if(data.loc == null){
      }else{
        setLoc(data)
      }
    })
  }, [])

  return (
    <div className="App">
      <Navbar inputData={inputData} setLoc={setLoc} setInputData={setInputData}/>
      <Weather loc={loc} currentWeather={currentWeather}/>
    </div>
  );
}

export default App;
