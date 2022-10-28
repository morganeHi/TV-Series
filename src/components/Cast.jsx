import React from "react"

export const Cast = ({data}) => {

    return (
        <>  
            <div className="card">
                {/*<p>{JSON.stringify(data)}</p> */}
                <h3>{data.person.name}</h3>
                <p>as</p>
                <p>{data.character.name}</p>
                <p>From : {data.person.country?.name}</p>
                <img src={data.person.image?.medium}></img>
            </div>
        </>
    )
}