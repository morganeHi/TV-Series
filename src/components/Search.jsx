import { Show } from "./Show";
import React from "react"

export const Search = ({search, setSearch}) => {

    const [shows, setShows ] = React.useState([]);

    const handleClick =e=>{
        e.preventDefault();
        console.log('pass');
        fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then(res=>res.json())
        .then(data => setShows(data))
        .catch(err=> console.log(err))
    }   

    return (
        <>
        <form>
        <input
            type="text"
            defaultValue={search}
            onChange={e => {
                setSearch(e.target.value)
            }
             }
            placeholder="Which show are you looking for ?"
        />
        <button onClick={handleClick}>Go !</button>
        </form>
            <div className="shows">
                {shows
                .map((s, index) => <Show key={index} data={s}/>)}
            </div>
    </>
    )
}