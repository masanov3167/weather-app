import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Components/Context";

import BookmarkItem from "../../Components/BookmarkItem";
import { BookmarkImg, HomeImg, SearchImg, SettingsImg } from "../../Components/Images";
import HomeItem from "../../Components/HomeItem";



const Bookmark = () =>{
    const API_KEY = '54c7fc7849313c82d57effed6ba51fae';
    const {todos, setTodos, value, setValue} = React.useContext(Context);

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
        <h2 className="bookmark-title">Sevimli shaharlar ro'yhati</h2>
        <button className={value.isBookmark ? "back" : "d-none"}  onClick={back}>ortga</button>
        <ol className="bookmark-card">
        {value.isBookmark ? (
                    <>
                   
					<div className="card">
                    <HomeItem
						title={value.data.name}
						gradus={value.data.main.temp}
						weekday="hgu"
						hour="45"
						pm='pm'
						info={value.data.weather[0].description}
                        pic={value.data.weather[0].id}
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
    </section>
    )
}

export default Bookmark;