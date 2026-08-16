import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1569061070090-ca11f580b440?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className="InfoBox" >
            
      <div className='cardContainer' >

             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <p>Temprature = {info.temp}&deg;C </p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}</p> 
        <p>Max Temp = {info.tempMax}</p>   
        <i> <p>Weather feels like {info.weather}, feels like {info.feelslike}&deg;C </p></i>   
        </Typography>

      </CardContent>
  
    </Card>
</div>


        </div>
    )
}