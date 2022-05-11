import React, { useState} from 'react';

const Context = React.createContext();

const TokenProvider = ({ children }) => {

    const date = new Date();
	const hours = String(date.getHours()).padStart(2,0);
    const weekDays = date.getDay();
    const kun = date => new Date(date *1000).getDay();

    const API_KEY = '4f73e48d6a4a142d6465101763aae13c' || "2ca70a5ad7ef2c22674c9335f9915571";
    
    const [lang, setLang] = useState(window.localStorage.getItem("setlang") || "uz");

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || [{id: 0, title: "tashkent"},{id: 1, title: "london"},{id: 2, title: "paris"},{id: 3, title: "moscow"}]);
    const [value, setValue] = useState({
		isFetched: false,
        isSearch: false,
        isBookmark: false,
        more:false,
        display:false,
		data: {},
		error: false,
	});

    const getloc = () => {

		fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${value.data.coord.lat}&lon=${value.data.coord.lon}&appid=${API_KEY}&units=metric`,
		)
			.then((res) => res.json())
			.then((data) =>
				setValue({
					more: true,
					display: true,
					data: data,
					error: false,
				}),
			);
	};

    const display = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${
				todos[count]?.title || 'tashkent'
			}&appid=${API_KEY}&units=metric`,
		)
			.then((res) => res.json())
			.then((data) =>
				setValue({
					isFetched: true,
					more: false,
					data: data,
					error: false,
				}),
			);
	};
	
	return (
		<Context.Provider value={{display,getloc,kun, todos, setTodos, count, setCount, value, setValue, lang, setLang,date,hours,weekDays,API_KEY}}>{children}</Context.Provider>
	);
};

export { Context, TokenProvider };