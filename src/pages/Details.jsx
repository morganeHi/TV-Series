import React from 'react';
import { useParams } from "react-router-dom"
import { Cast } from '../components/Cast'

export const Details = () => {
    const params = useParams();

    const [details, setDetails] = React.useState([]);   

    React.useEffect(() => {  
        fetch(`https://api.tvmaze.com/shows/${params.id}?embed=cast`)
        .then(res => res.json())
        .then(data=> setDetails(data))
        .catch(e => console.log(e))
    }, [])

    return (
        <>
            <h1>Casting of : {details.name}</h1>

            <div className="shows">
                {details._embedded?.cast?.map((d, index) => <Cast key={index} data={d}/>)}
                </div>
        </>
    )
}
          