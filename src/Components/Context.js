import React, {useEffect, useState} from 'react';

const Context = React.createContext();

const TokenProvider = ({ children }) => {

    const date = new Date();
	const hours = String(date.getHours()).padStart(2,0);
    const weekDays = date.getDay();
    
    const [lang, setLang] = useState(window.localStorage.getItem("setlang") || "uz");

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || [{id: 0, title: "tashkent"},{id: 1, title: "london"},{id: 2, title: "paris"},{id: 3, title: "moscow"}]);
    const [value, setValue] = useState({
		isFetched: false,
        isSearch: false,
        isBookmark: false,
		data: {},
		error: false,
	});

	
	return (
		<Context.Provider value={{ todos, setTodos, count, setCount, value, setValue, lang, setLang,date,hours,weekDays }}>{children}</Context.Provider>
	);
};

export { Context, TokenProvider };