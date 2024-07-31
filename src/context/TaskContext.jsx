import React, { createContext, useState } from 'react';

const ListContext = createContext();

const List = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (item.name.trim() !== "" && item.band.trim() !== "" && item.role.trim() !== "") {
      setItems([...items, item]);
    }
  };

  return (
    <ListContext.Provider value={{ items, addItem }}>
      {children}
    </ListContext.Provider>
  );
};

export { List, ListContext };