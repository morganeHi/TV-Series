import React from "react"
import {Search} from '../components/Search'


export const Home = () => {

    //! pas utile de le faire ici
    /*const [search, setSearch] = React.useState('');
    //search={search} setSearch={setSearch}
    */

    return (
        <>
            <h1>TV Maze</h1>
            <Search/>
        </>
    )
}