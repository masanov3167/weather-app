import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./Context";
import SettingsItem from "./SettingsItem";
import {Images} from "./Images";

const HomeItem = ({title, gradus, weekday, hour,pic, pm,info, minute}) =>{
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

            <NavLink className="card-more" to="/more" >{SettingsItem[lang].more}</NavLink>
        </div>
    )
}

export default HomeItem;