import React from "react";
import { Context } from "./Context";
import SettingsItem from "./SettingsItem";
import {Images} from "./Images";

const HomeItem = ({title, gradus, weekday, hour,pic, pm,info, minute,getloc}) =>{
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

            <h2 className="card-more" onClick={getloc} >{SettingsItem[lang].more}</h2>
        </div>
    )
}

export default HomeItem;