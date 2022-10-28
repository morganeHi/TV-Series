import React from "react"

export const Show = ({data}) => {

    return (
        <>  
            <div className="card">
                <h2>{data.show.name}</h2>
                <img className="img" src={data.show.image?.medium} onClick={event =>  window.location.href=`/${data.show.id}`}/>
            </div>
        </>
    )
}

