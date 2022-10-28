import React from "react"
import {Search} from '../components/Search'


export const Home = () => {

    const [search, setSearch] = React.useState('');

    return (
        <>
            <h1>TV Maze</h1>
            <Search search={search} setSearch={setSearch}/>
        </>
    )
}