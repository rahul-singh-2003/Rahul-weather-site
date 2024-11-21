import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1580462611434-39cde8c29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtb2tlJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    const COLD_URL="https://media.istockphoto.com/id/157565659/photo/thermometer-behind-the-frozen-window.jpg?s=612x612&w=0&k=20&c=df8Zmfrhpz_-T0oQFLonlZLwTAwnu1ng_S4ci9-GUK4=";
    const RAIN_URL="https://media.istockphoto.com/id/902497530/photo/cars-driving-on-wet-road-in-the-rain-with-headlights.webp?a=1&b=1&s=612x612&w=0&k=20&c=tkP2euU7394M7fWbgBP3iNwY34Fy7XdBymhe73MSeqU=";
    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>30?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}&nbsp;&nbsp;{
        info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"}>
        <p>Temperature={info.temp}&deg;</p>
        <p>Humidity={info.humidity}</p>
        <p>Min Temp ={info.tempMin}&deg;C</p>
        <p>Max Temp ={info.tempMax}&deg;C</p>
        <p>The Weather  can be described as <b>{info.weather}</b> and feels like ={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}