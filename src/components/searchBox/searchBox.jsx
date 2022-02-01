import React from "react";

import './searchBox.css'

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
        className="searchBox"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    )
}