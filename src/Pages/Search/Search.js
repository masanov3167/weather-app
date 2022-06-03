import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Components/Context";
import HomeItem from "../../Components/HomeItem";
import SettingsItem from "../../Components/SettingsItem";


import { BookmarkImg, HomeImg, SearchImg, SettingsImg } from '../../Components/Images';
import DailyWeather from "../../Components/Dailyweather";
import Loader from "../../Components/Loader";
import CurrentWeather from "../../Components/CurrentWeather";
import ServerError from "../../Components/ServerError";
import SearchError from "../../Components/SearchError";
const Search = () =>{
    const val = React.useRef();

    const {value, setValue, todos, setTodos, lang, hours,weekDays,API_KEY,getloc,display} = React.useContext(Context);

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

		console.log(value.searcherror);
    }

    return(
        <section className="search">
            <h2 className="search-title">{SettingsItem[lang].cities}</h2>

            <form className="form" onSubmit={SearchFunc} autoComplete="off">
                <input className="form-input" ref={val} type="text" name="cityName" maxLength="15" placeholder={SettingsItem[lang].placeholder} required/>
                <button className="form-btn" type="submit">{SettingsItem[lang].search}</button>
            </form>

            <span className={value?.data?.name ? "bookmark-btn" : "d-none"} title={SettingsItem[lang].add} onClick={addBookmark} ></span>
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
                        getloc={getloc}
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


            <div className={value.more ? 'more' : 'd-none'}>
				<div className='currently'>
					<span className='more-back' onClick={display}></span>

					<div className='currently-card'>
						{value.more ? (
							<>
								<CurrentWeather
									title={value.data.timezone}
									gradus={value.data.current.temp}
									weekday={SettingsItem[lang].weekDaysArr[weekDays]}
									hour={hours > 12 ? hours - 12 : hours}
									pm={hours > 12 ? 'pm' : 'am'}
									info={value.data.current.weather[0].description}
									pic={value.data.current.weather[0].id}
									pressure={value.data.current.pressure}
									humidity={value.data.current.humidity}
									win_speed={value.data.current.wind_speed}
								/>

								<ol className='daily-card'>
               						 <DailyWeather  />
								</ol>
							</>
						) : (
							<Loader />
						)}
					</div>
				</div>
			</div>
        </section>
    )
}

export default Search;