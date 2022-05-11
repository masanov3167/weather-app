import React from "react";
import { Images } from "./Images"
import SettingsItem from "./SettingsItem";
import { Context } from "./Context";

const CurrentWeather = ({pic,title,gradus,weekday,hour,minute,pm,info,pressure, humidity,win_speed}) =>{

    const {lang} = React.useContext(Context)
    return(
        <>
            <Images code={pic}/>
            <h1 className="current-title">{title}</h1>
             <h3 className="gradus">
             <time className="gradus">{Math.round(gradus)}</time>
             <span>oC</span>
             </h3>
            <span className="current-day">{weekday}, <time>{hour}:{minute} </time> {pm} </span>
            <span className="current-pressure">{SettingsItem[lang].currentpressure}: {pressure}</span>
            <span className="current-humidity">{SettingsItem[lang].currenthumidity}: {humidity}%</span>
            <span className="current-speed" > {SettingsItem[lang].currentwindspeed} {win_speed} m</span>
            <span className="current-info">{info}</span>
        </>
    )
}

export default CurrentWeather;