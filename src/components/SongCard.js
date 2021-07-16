import React from 'react'
import './SongCard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faCompactDisc} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
function SongCard(props) {
    const micIcon = <FontAwesomeIcon icon={faMicrophoneAlt} />
    const albumIcon = <FontAwesomeIcon icon={faCompactDisc} />  
    const arrowIcon = <FontAwesomeIcon icon={faChevronRight} />    
    return (
        <div className="card" data-aos="fade-up"
        data-aos-duration="1200"
        >
            <div className="song-name" title={props.songname}>{props.songname}</div>
            <div className="artist" title={props.artist_name}>{micIcon} Artist: {props.artist_name}</div>
            <div className="album" title={props.album_name}>{albumIcon} Album: {props.album_name}</div>
            <button className="view-lyrics">{arrowIcon} View Lyrics</button>
        </div>
    )
}

export default SongCard
