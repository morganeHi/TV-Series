import React from "react"
import { Link } from "react-router-dom"

export const Show = ({data}) => {

    return (
        <>  
            <div className="card">
                <h2>{data.show.name}</h2>
                <Link to={`/${data.show.id}`}> <img className="img" src={data.show.image?.medium}/> </Link>
            </div>
        </>
    )
}

//  <img className="img" src={data.show.image?.medium} onClick={event =>  window.location.href=`/${data.show.id}`} />
// <a href={data.show.id}><img className="img" src={data.show.image?.medium} /></a> 