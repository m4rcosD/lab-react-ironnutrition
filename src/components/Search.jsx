import React from 'react'

function Search(props) {
    return (
        <div>
            <input onChange={props.btnSearch} type="text" placeholder="Search foods"/>
        </div>
    )
}

export default Search