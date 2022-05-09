import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Components/Context';
import HomeItem from '../../Components/HomeItem';
import { BookmarkImg, HomeImg, SearchImg, SettingsImg } from '../../Components/Images';
import Loader from '../../Components/Loader';
import SettingsItem from '../../Components/SettingsItem';

const Home = () => {


    const {todos, setTodos, count, setCount, value, setValue, lang, date,hours,weekDays} = React.useContext(Context);
    
	const API_KEY = '54c7fc7849313c82d57effed6ba51fae';
	
    const leftFunc = ()=>{
        if(count >0){
            setCount(count - 1);
        }
    }

    const rightFunc = ()=>{
        if(count < todos.length - 1){
            setCount(count + 1);
        }
    }

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${todos[count]?.title || "tashkent"}&appid=${API_KEY}&units=metric`,)
		.then((res) => res.json())
		.then((data) =>
			setValue({
				isFetched: true,
				data: data,
				error: false,
			}),
		);
	}, [count]);

    if(value.isFetched){
        console.log(value.data);
    }

	return (
		<section className='home'>
			<div className='home-header'>
				<NavLink className='home-header-icon' to='/' />

				<NavLink
					title='settings'
					className='home-header-settings'
					to='/settings'
				/>
			</div>

			<div className='card-wrapper'>
				{value.isFetched ? (
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
                    
                    <span className={count >= 1 ? "left" : ""} onClick={leftFunc} ></span>
                    <span className={count >= todos.length - 1 ? "" : "right"} onClick={rightFunc} ></span>
                    </>
				) : (
					<Loader />
				)}
			</div>

            <footer className='footer'>
                <NavLink className="footer-home" to="/" ><HomeImg /></NavLink>
                <NavLink className="footer-search" to="/search" ><SearchImg /> </NavLink>
                <NavLink className="footer-bookmark" to="/bookmark" ><BookmarkImg /></NavLink>
                <NavLink className="footer-settings" to="/settings" > <SettingsImg /></NavLink>
            </footer>
		</section>
	);
};

export default Home;
