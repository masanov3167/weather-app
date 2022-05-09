import React, {useEffect, useState} from 'react';

const Context = React.createContext();

const TokenProvider = ({ children }) => {
    
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || [{id: 0, title: "tashkent"},{id: 1, title: "china"},{id: 2, title: "andijon"},{id: 3, title: "xiva"},{id: 4, title: "london"},{id: 5, title: "paris"},{id: 6, title: "moscow"},{id: 7, title: "africa"},]);
    const [value, setValue] = useState({
		isFetched: false,
        isSearch: false,
        isBookmark: false,
		data: {},
		error: false,
	});

	
	return (
		<Context.Provider value={{ todos, setTodos, count, setCount, value, setValue }}>{children}</Context.Provider>
	);
};

export { Context, TokenProvider };