import { Show } from "./Show";
import React from "react"

export const Search = () => {

    const [search, setSearch] = React.useState('');
    const [shows, setShows ] = React.useState([]);

//! Faire onSubmit handleSubmit sur le form permet de valider avec la touche "entrée", 
//! meilleure pratique que onClick handleClick sur le button

    const handleSubmit = e => {
        e.preventDefault();
        console.log('pass');
        fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then(res=>res.json())
        .then(data => setShows(data))
        .catch(err=> console.log(err))
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            defaultValue={search}
            onChange={e => {
                setSearch(e.target.value)
            }
             }
            placeholder="Which show are you looking for ?"
        />
        <button type="submit">Go !</button>
        </form>
            <div className="shows">
                {shows
                .map((s, index) => <Show key={index} data={s}/>)}
            </div>
    </>
    )
}