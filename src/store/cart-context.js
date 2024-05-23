import React, { createContext } from "react";

const cartContext = createContext({
    //setting the default value
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    totalAmount: 0
});

export default cartContext