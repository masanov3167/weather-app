import React from "react";
import { Images } from "./Images"
import SettingsItem from "./SettingsItem";
import { Context } from "./Context";


const DailyWeather = ({}) =>{
    const {lang, value, kun,sana} = React.useContext(Context);

    return(

        value.data.daily.map((item, index) => (
            <li key={index} className="daily-card-item">
                
                <div>
                <span className="weather-day">{SettingsItem[lang].weekDaysArr[kun(item.dt)]}</span>
                <h3 className="more-date" >{sana(item.dt)}</h3>
                <Images code={item.weather[0].id}/>
                </div>
                <br />
                <time className="daily-gradus">{SettingsItem[lang].morn}: {Math.round(item.temp.morn)}ᵒC</time>
                <time className="daily-gradus">{SettingsItem[lang].day}: {Math.round(item.temp.day)}ᵒC</time>
                <time className="daily-gradus">{SettingsItem[lang].night}: {Math.round(item.temp.night)}ᵒC</time>
                <span className="daily-humidity">{SettingsItem[lang].currenthumidity}: {item.humidity}%</span>
                <span className="daily-pressure">{SettingsItem[lang].currentpressure}: {item.pressure}</span>
                <span className="daily-speed" > {SettingsItem[lang].currentwindspeed} {item.wind_speed} m</span>
            </li>
    ))
    )
}


export default DailyWeather;