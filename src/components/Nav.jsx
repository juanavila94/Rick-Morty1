import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function  Nav({onSearch}) {
    return (
        <>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
            <SearchBar onSearch={onSearch} />
            <button onClick={()=>onSearch(Math.floor(Math.random()*826))}>Random</button>
        </>
    )
}