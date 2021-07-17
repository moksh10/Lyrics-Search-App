import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
function Header(props) {
    const icon = <FontAwesomeIcon icon={faMusic} />
    return (
        <>
        <div className="logo">Lyrics Search</div>
        <form className="search-section" data-aos="fade-down"
        data-aos-duration="1000" onSubmit={props.onSubmit}>
            <div className="search-heading"><div className="icon">{icon}</div>Search for any song</div>
            <div className="getAny">Get the lyrics for any song</div>
            <input type="text" placeholder="Song title..." className="search-box" value={props.query} onChange={(e)=>{props.setQuery(e.target.value)}}/>
            <button className="button">Get Track Lyrics</button>
        </form>
        </>
    )
}

export default Header
