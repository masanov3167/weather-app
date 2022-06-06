import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Components/Context';
import HomeItem from '../../Components/HomeItem';
import {
	BookmarkImg,
	HomeImg,
	SearchImg,
	SettingsImg,
} from '../../Components/Images';
import SettingsItem from '../../Components/SettingsItem';
import ServerError from '../../Components/ServerError';

const Home = () => {
	const {
		todos,
		count,
		setCount,
		value,
		setValue,
		lang,
		hours,
		weekDays,
		API_KEY
	} = React.useContext(Context);


	const leftFunc = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const rightFunc = () => {
		if (count < todos.length - 1) {
			setCount(count + 1);
		}
	};

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${todos[count]?.title || 'tashkent'}&appid=${API_KEY}&units=metric`)
			.then((res) => res.json())
			.then((data) =>
				setValue({
					isFetched: true,
					data: data,
					error: false,
				}),
			)

			.catch(er =>{
				setValue({
					error:true,
					isFetched:false,
				})
			})
		
	}, [count]);

	
	
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
			{value.error ? (
					<ServerError errorText={SettingsItem[lang].homeerror} />
				) : (
					<></>
				)}
				{value.isFetched ? (
					<>
						<HomeItem
							title={value.data.name}
							gradus={value.data.main.temp}
							weekday={SettingsItem[lang].weekDaysArr[weekDays]}
							hour={hours > 12 ? hours - 12 : hours}
							pm={hours > 12 ? 'pm' : 'am'}
							info={value.data.weather[0].description}
							pic={value.data.weather[0].id}
							getLocation={`/more/${value.data.coord.lat}${value.data.coord.lon}`}
						/>
						<span className={count >= 1 ? 'left' : ''} onClick={leftFunc}></span>
						<span className={count >= todos.length - 1 ? '' : 'right'} onClick={rightFunc}></span>
					</>
				) : (
					<img className={value.isFetched ? "d-none" : "loader-img"} src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt="loader" />
				)}
			</div>

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
	);
};

export default Home;
