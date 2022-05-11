import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Components/Context";
import SettingsItem from "../../Components/SettingsItem";
import BookmarkItem from "../../Components/BookmarkItem";
import { BookmarkImg, HomeImg, SearchImg, SettingsImg } from "../../Components/Images";
import HomeItem from "../../Components/HomeItem";
import Loader from "../../Components/Loader";
import DailyWeather from "../../Components/Dailyweather";
import CurrentWeather from "../../Components/CurrentWeather";



const Bookmark = () =>{
    const {todos, setTodos, value, setValue,lang, hours,weekDays, API_KEY,getloc, display} = React.useContext(Context);

    const getTitle = (evt) =>{
        const btnId = evt.target.dataset.getTitle - 0;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${todos[btnId].title}&appid=${API_KEY}&units=metric`,)
		.then((res) => res.json())
		.then((data) =>
			setValue({
				isBookmark: true,
				data: data,
				error: false,
			}),
		);
    }

    const back = () =>{
        setValue({
           isFetched: false,
            isSearch: false,
            isBookmark: false,
            data: {},
            error: false,
        })
    }

    const del = (evt) => {
		const btnId = evt.target.dataset.getTitle - 0;

		const filter = todos.filter((a) => a.id !== btnId);
		window.localStorage.setItem('todos', JSON.stringify(filter));
		return setTodos(filter);
	}

    return (
    <section className="bookmark">
        <h2 className="bookmark-title">{SettingsItem[lang].bookmarkcities}</h2>
        <button className={value.isBookmark ? "back" : "d-none"}  onClick={back}>{SettingsItem[lang].back}</button>
        <ol className="bookmark-card">
        {value.isBookmark ? (
                    <>
                   
					<div className="card">
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
                    </div>
                    </>
				) : (
					<BookmarkItem del={del} getTitle={getTitle} />
				)}
        </ol>
        
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

export default Bookmark;