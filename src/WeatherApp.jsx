// import {useState} from "react"
// import SearchBox from "./SearchBox.jsx";
// import InfoBox from "./InfoBox.jsx";
// export default function WeatherApp(){
//     const [weatherInfo, setWeatherInfo]=useState({
//         city:"Wander lust",
//         feelslike:23.58,
//         temp:24.05, 
//         tempMin:24.05,
//         tempMax:24.05,
//         humidity:41,
//         weather:"Smoke",
//     })
//     let updateInfo=(newInfo)=>{
//         setWeatherInfo(newInfo);
//     }
//     return(
//         <div style={{textAlign:"center"}}>
//             <h2>Weather app by Rahul Singh </h2>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={weatherInfo}/>
//             </div>
//     )
// }

import { useState } from "react"
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wander lust",
        feelslike: 23.58,
        temp: 24.05,
        tempMin: 24.05,
        tempMax: 24.05,
        humidity: 41,
        weather: "Smoke",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather app by Rahul Singh </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
