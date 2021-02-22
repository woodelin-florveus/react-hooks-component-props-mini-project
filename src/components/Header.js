import React from "react"


function Header(prop){

    // console.log(prop)
    return (
        <div>
            <header key={prop}>
            <h1>{prop.name}</h1>
            </header>
        </div>
    )
}


export default Header;