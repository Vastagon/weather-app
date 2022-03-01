import React from 'react';
import './index.css';
import Navbar from "./components/Navbar"
import {useState} from "react"
import Weather from './components/Weather';

function App() {
  const [inputData, setInputData] = useState({})
  const [currentWeather, setCurrentWeather] = useState(null)
  const [loc, setLoc] = useState({loc:"Arlington"})
  const [listOfLoc, setListOfLoc] = useState([])
  const [listening, setListening] = useState(false)
  let apiKey = "7ab98e97faa64c4d8b4104902222202"

  React.useEffect(() =>{///Finds weather data of certain location
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
    fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${inputData.loc}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      setListOfLoc(data.slice(0,5))
      
      if(data.loc == null){
      }else{
        setLoc(data)
      }
    })
  }, [inputData.loc])

  React.useEffect(() =>{
    setListening(true)
  }, [])

  ///doesn't show page until currentWeather has been given info
  if(!currentWeather){
    return null
  }

  function weatherDivClicked(){
    setListening(false)
  }

  return (
    <div className="App">
      <Navbar setListening={setListening} listening={listening} loc={loc} currentWeather={currentWeather} listOfLoc={listOfLoc} inputData={inputData} setLoc={setLoc} setInputData={setInputData}/>
      <div onClick={weatherDivClicked}>
        <Weather setListening={setListening} loc={loc} currentWeather={currentWeather}/>
      </div>
    </div>
  );
}

export default App;
