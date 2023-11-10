// GlobalContext.js
import React, { createContext, useState } from 'react';

// Step 1: Create a context
export const GlobalContext = createContext({});

// Step 2: Create a provider component
export const GlobalProvider = ({ children }) => {
    const colors = [{
        type: "single",
        color: "BLACK",
        extraColor: "",
        file: "/dragon/Black Dragon 8143.jpg",
        count: 0
    }, {
        type: "double",
        color: "GREEN",
        extraColor: "BLACK",
        border: "YELLOW",
        file: "/dragon/Black Yellow Green Dragon 8132.jpg",
        count: 0
    }, {
        type: "single",
        color: "BLUE",
        extraColor: "",
        file: "/dragon/Blue Dragon 8140.jpg",
        count: 0
    }, {
        type: "double",
        color: "RED",
        border: "WHITE",
        extraColor: "BLUE",
        file: "/dragon/Blue White Red Dragon 8136.jpg",
        count: 0
    }, {
        type: "single",
        color: "GRAY",
        extraColor: "",
        file: "/dragon/Gray Dragon 8138.jpg",
        count: 0
    }, {
        type: "single",
        color: "GREEN",
        extraColor: "",
        file: "/dragon/Green Dragon 8133.jpg",
        count: 0
    }, {
        type: "double",
        color: "GREEN",
        extraColor: "BLUE",
        border: "WHITE",
        file: "/dragon/Green White Blue Dragon 8131.jpg",
        count: 0
    }, {
        type: "double",
        color: "GREEN",
        extraColor: "RED",
        border: "YELLOW",
        file: "/dragon/Green Yellow Red Dragon 8130.jpg",
        count: 0
    }, {
        type: "single",
        color: "rgb(147,0,74)", colorName: "MAROON",
        extraColor: "",
        file: "/dragon/Maroon Dragon 8139.jpg",
        count: 0
    }, {
        type: "single",
        color: "rgb(71,36,184)", colorName: "DARK PURPLE",
        extraColor: "",
        file: "/dragon/Purple Dragon 8139.jpg",
        count: 0
    }, {
        type: "single",
        color: "RED",
        extraColor: "",
        file: "/dragon/Red Dragon 8135.jpg",
        count: 0
    }, {
        type: "double",
        color: "RED",
        extraColor: "BLACK",
        border: "YELLOW",
        file: "/dragon/Red Yellow Black Dragon 8137.jpg",
        count: 0
    }, {
        type: "single",
        color: "YELLOW",
        extraColor: "",
        file: "/dragon/Yellow Dragon 8134.jpg",
        count: 0
    },]

    const colors1 = [{
        type: "single",
        color: "BLACK",
        extraColor: "",
        file: "/turtle/Black Turtle 8154.jpg",
        count: 0
    }, {
        type: "single",
        color: "GREEN",
        extraColor: "",
        file: "/turtle/Green Turtle 8148.jpg",
        count: 0
    }, {
        type: "single",
        color: "rgb(123,16,67)", colorName: "MAROON",
        extraColor: "",
        file: "/turtle/Maroon Turtle 8152.jpg",
        count: 0
    }, {
        type: "single",
        color: "rgb(60,34,171)", colorName: "DARK PURPLE",
        extraColor: "",
        file: "/turtle/Purple Turtle 8150.jpg",
        count: 0
    },]

    const allowedValue = ["", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    const [dragon, setDragon] = useState(colors);
    const [turtle, setTurtle] = useState(colors1);
    const [inputValue, setInputValue] = useState(0);
    const [whole, setWhole] = useState([{
        type: "single",
        color: "", colorName: "20 DRAGONS",
        extraColor: "",
        file: "/wholesale.jpg",
        count: 0
    }]);

    

    return (
        <GlobalContext.Provider value={{ dragon, setDragon, turtle, setTurtle, whole, setWhole, colors, colors1, inputValue, setInputValue, allowedValue }}>
            {children}
        </GlobalContext.Provider>
    );
};
