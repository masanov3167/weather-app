import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Context } from "../../Components/Context";
import DailyWeather from "../../Components/Dailyweather";
import { BookmarkImg, HomeImg, SearchImg, SettingsImg } from "../../Components/Images";

const More = () =>{

    const {value,setValue, API_KEY} = React.useContext(Context);

    const { location } = useParams();

    React.useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.substring(0, 7)}&lon=${location.substring(7, 16)}&appid=${API_KEY}&units=metric`)
			.then((res) => res.json())
			.then((data) =>
				setValue({
					more: true,
					data: data,
				}),
			);
    },[location])

    return(
        <section className="more">
            <div className='home-header'>
				<NavLink className='home-header-icon' to='/' />

				<NavLink
					title='settings'
					className='home-header-settings'
					to='/settings'
				/>
			</div>

            {value.more && value.data.daily ? (
                <ol className='daily-card'>
                  <DailyWeather  />
                </ol>
            ) : (
                <img className="loader-img" src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt="loader" />
            )}

            <footer className='footer'>
                            <NavLink className='footer-home' to='/'>
                                <HomeImg />
                            </NavLink>
                            <NavLink className='footer-search' to='/search'>
                                <SearchImg />{' '}
                            </NavLink>
                            <NavLink className='footer-bookmark' to='/bookmark'>
                                <BookmarkImg />
                            </NavLink>
                            <NavLink className='footer-settings' to='/settings'>
                                {' '}
                                <SettingsImg />
				            </NavLink>
			</footer>
        </section>
    )
}


export default More;