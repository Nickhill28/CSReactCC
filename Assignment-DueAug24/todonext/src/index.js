import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import DarkMode from "./DarkMode";


var destiny = document.querySelector("#container");

ReactDOM.render (
    <div>
     <DarkMode/>
     <TodoList/>
    </div>,
    destiny

);