import React from "react";

import { Context } from "./Context";



const BookmarkItem = ({getTitle, del}) =>{
    const {todos} = React.useContext(Context);

    return (
        
        todos.map((item, index) => (
                <li className="bookmark-item">
                    <h4 className="bookmark__title" onClick={getTitle} data-get-title={item.id} >{item.title}</h4>
                    <span className="bookmark-delete" data-get-title={item.id} onClick={del} ></span>
                </li>
        ))
    )
}

export default BookmarkItem;