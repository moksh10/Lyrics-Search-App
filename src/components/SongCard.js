import React from 'react'
import './SongCard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {faCompactDisc} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

function SongCard() {
    const trackIcon = <FontAwesomeIcon icon={faPlay} />
    const albumIcon = <FontAwesomeIcon icon={faCompactDisc} />  
    const arrowIcon = <FontAwesomeIcon icon={faChevronRight} />    
    return (
        <div className="card" data-aos="fade-up"
        data-aos-duration="1200"
        >
            <div className="song-name">Senorita</div>
            <div className="track">{trackIcon} Track: Senorita</div>
            <div className="album">{albumIcon} Album: Senortia</div>
            <button className="view-lyrics">{arrowIcon} VIEW LYRICS</button>
        </div>
    )
}

export default SongCard
