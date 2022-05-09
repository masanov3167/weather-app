import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Components/Context";
import SettingsItem from "../../Components/SettingsItem";
import { BookmarkImg, HomeImg, SearchImg, SettingsImg } from "../../Components/Images";


const Settings = () =>{
    const {lang, setLang} = React.useContext(Context);
    const select = React.useRef();

    const changeLang = () =>{
        setLang(select.current.value);
        window.localStorage.setItem("setlang", select.current.value);
    }

    return(
        <section className="settings">
            <h2 className="settings-title">{SettingsItem[lang].langu}</h2>

            <select className="settings-select" ref={select} onChange={changeLang}>
                <option value="uz">{SettingsItem[lang].option.uz}</option>
                <option value="ru">{SettingsItem[lang].option.ru}</option>
                <option value="en">{SettingsItem[lang].option.en}</option>
            </select>

            <footer className='footer'>
                <NavLink className="footer-home" to="/" ><HomeImg /></NavLink>
                <NavLink className="footer-search" to="/search" ><SearchImg /> </NavLink>
                <NavLink className="footer-bookmark" to="/bookmark" ><BookmarkImg /></NavLink>
                <NavLink className="footer-settings" to="/settings" > <SettingsImg /></NavLink>
            </footer>
        </section>
    )
}

export default Settings;