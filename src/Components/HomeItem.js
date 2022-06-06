import React from "react";
import { Context } from "./Context";
import SettingsItem from "./SettingsItem";
import {Images} from "./Images";
import { NavLink } from "react-router-dom";

const HomeItem = ({title, gradus, weekday, hour,pic, pm,info, minute,getLocation}) =>{
    const {lang} = React.useContext(Context);

    return(
        <div className="card">
           <Images code={pic}/>
            <h1 className="card-title">{title}</h1>
             <h3 className="gradus">
             <time className="gradus">{Math.round(gradus)}</time>
             <span>oC</span>
             </h3>
            <span className="card-day">{weekday}, <time>{hour}:{minute} </time> {pm} </span>
            <span className="card-info">{info}</span>

            <NavLink className='card-more' to={getLocation}>{SettingsItem[lang].more}</NavLink>
        </div>
    )
}

export default HomeItem;