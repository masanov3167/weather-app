import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Components/Context";
import HomeItem from "../../Components/HomeItem";
import SettingsItem from "../../Components/SettingsItem";


import { BookmarkImg, HomeImg, SearchImg, SettingsImg } from '../../Components/Images';
const Search = () =>{
    const API_KEY = '54c7fc7849313c82d57effed6ba51fae';
    const val = React.useRef();

    const {value, setValue, todos, setTodos, lang, date,hours,weekDays} = React.useContext(Context);

    const addBookmark = (evt) =>{
        // const btnId = evt.target.dataset.getTitle - 0;

        console.log(value.data.name);

          const newRegion = {
              id: todos.length,
              title: value.data.name,
          };

          window.localStorage.setItem('todos', JSON.stringify([...todos, newRegion]));
          return setTodos([...todos, newRegion]);
       
    }

    const SearchFunc = (evt)=>{
      evt.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val.current.value}&appid=${API_KEY}&units=metric`,)
		.then((res) => res.json())
		.then((data) =>
			setValue({
				isSearch: true,
				data: data,
				error: false,
			}),
		);

        val.current.value = null;
    }

    return(
        <section className="search">
            <h2 className="search-title">{SettingsItem[lang].cities}</h2>

            <form className="form" onSubmit={SearchFunc} autoComplete="off">
                <input className="form-input" ref={val} type="text" name="cityName" maxLength="15" placeholder={SettingsItem[lang].placeholder} required/>
                <button className="form-btn" type="submit">{SettingsItem[lang].search}</button>
            </form>

            <span className={value.isSearch ? "bookmark-btn" : "d-none"} title={SettingsItem[lang].add} onClick={addBookmark} ></span>
            <div className='card-wrapper'>
				{value.isSearch ? (
                    <>
                    
					<HomeItem
						title={value.data.name}
						gradus={value.data.main.temp}
						weekday={SettingsItem[lang].weekDaysArr[weekDays]}
						hour={hours > 12 ? hours - 12 : hours}
						pm={hours >12 ? "pm" : "am"}
						info={value.data.weather[0].description}
                        pic={value.data.weather[0].id}
					/>
                    
                    </>
				) : (
                    <></>
				)}
			</div>


            <footer className='footer'>
                <NavLink className="footer-home" to="/" ><HomeImg /></NavLink>
                <NavLink className="footer-search" to="/search" ><SearchImg /> </NavLink>
                <NavLink className="footer-bookmark" to="/bookmark" ><BookmarkImg /></NavLink>
                <NavLink className="footer-settings" to="/settings" > <SettingsImg /></NavLink>
            </footer>
        </section>
    )
}

export default Search;