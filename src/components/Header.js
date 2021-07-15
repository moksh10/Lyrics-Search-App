import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
function Header() {
    const icon = <FontAwesomeIcon icon={faMusic} />
    return (
        <>
        <div className="logo">Lyrics Search</div>
        <form className="search-section">
            <div className="search-heading"><div className="icon">{icon}</div>Search for any song</div>
            <div className="getAny">Get the lyrics for any song</div>
            <input type="text" placeholder="Song title..." className="search-box" />
            <button className="button">Get Track Lyrics</button>
        </form>
        </>
    )
}

export default Header
