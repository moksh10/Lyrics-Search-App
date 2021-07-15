import React from 'react'
import './SongCard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {faCompactDisc} from '@fortawesome/free-solid-svg-icons'
function SongCard() {
    const trackIcon = <FontAwesomeIcon icon={faPlay} />
    const albumIcon = <FontAwesomeIcon icon={faCompactDisc} />    
    return (
        <div className="card">
            <div className="song-name">Senorita</div>
            <div className="track">{trackIcon} Track: Senorita</div>
            <div className="album">{albumIcon} Album: Senortia</div>
            <button className="view-lyrics">VIEW LYRICS</button>
        </div>
    )
}

export default SongCard
