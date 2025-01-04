
import { useState } from "react"
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import "./Weather.css"

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
            <h2 style={{
                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                padding: "20px",
                fontSize: "2.5rem",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "center",
                margin: "20px 0",
                position: "relative",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                animation: "fadeIn 1.5s ease-out",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
            }}>
                <span style={{
                    color: "#0077b6",
                    fontSize: "2.8rem",
                    marginRight: "10px"
                }}>🌤</span>
                Weather App
                <span style={{
                    fontSize: "1rem",
                    background: "linear-gradient(135deg, #0077b6, #00b4d8)",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    color: "white",
                    marginLeft: "15px",
                    boxShadow: "0 2px 10px rgba(0, 119, 182, 0.2)",
                    fontWeight: "normal"
                }}>by Rahul Singh</span>
            </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
