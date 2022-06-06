import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Components/Context";
import HomeItem from "../../Components/HomeItem";
import SettingsItem from "../../Components/SettingsItem";


import { BookmarkImg, HomeImg, SearchImg, SettingsImg } from '../../Components/Images';
import ServerError from "../../Components/ServerError";
import SearchError from "../../Components/SearchError";
const Search = () =>{
    const val = React.useRef();

    const {value, setValue, todos, setTodos, lang, hours,weekDays,API_KEY} = React.useContext(Context);

    const addBookmark = () =>{
          const newRegion = {
              id: todos.length,
              title: value.data.name,
          };

		  const find = todos.find(a => a.title === newRegion.title);

		  if(!todos.includes(find)){ 
            window.localStorage.setItem('todos', JSON.stringify([...todos, newRegion]));
            return setTodos([...todos, newRegion]);
        }       
    }


    const SearchFunc = (evt)=>{
      evt.preventDefault();

	  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val.current.value.trim()}&appid=${API_KEY}&units=metric`)
			.then((res) => res.json())
			.then((data) =>
				setValue({
					isSearch: true,
					data: data,
					searcherror: false,
				}),
			)

			.catch(er =>{
				setValue({
					searcherror: true,
					isSearch: false,
				})
			})
        val.current.value = null;

    }

    return(
        <section className="search">
            <h2 className="search-title">{SettingsItem[lang].cities}</h2>

            <form className="form" onSubmit={SearchFunc} autoComplete="off">
                <input className="form-input" ref={val} type="text" name="cityName" maxLength="15" placeholder={SettingsItem[lang].placeholder} required/>
                <button className="form-btn" type="submit">{SettingsItem[lang].search}</button>
            </form>

            {value.isSearch && value.data.name ? <span className="bookmark-btn" title={SettingsItem[lang].add} onClick={addBookmark} ></span> : ''}
            <div className='card-wrapper'>

			    {value.searcherror ? (
					<>
						<ServerError errorText={SettingsItem[lang].homeerror} />
					</>
				) : (
					<></>
				)}

				{value.isSearch && (value.data.name ? (
                    <>
                     
					<HomeItem
						title={value.data.name}
						gradus={value.data.main.temp}
						weekday={SettingsItem[lang].weekDaysArr[weekDays]}
						hour={hours > 12 ? hours - 12 : hours}
						pm={hours >12 ? "pm" : "am"}
						info={value.data.weather[0].description}
                        pic={value.data.weather[0].id}
						getLocation={`/more/${value.data.coord.lat}${value.data.coord.lon}`}
					/>
                    </> 
				) : (
                    <>
						<SearchError h2={SettingsItem[lang].searcherror.h2} p={SettingsItem[lang].searcherror.p} />
					</>
				))}
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