import React from 'react'
import axios from 'axios'
import './Lyrics.css'
function Lyrics() {
    return (
        
        <>
            <div className="logo">Lyrics Search</div>
            <div className="lyrics-container">
                <button className="back-button">Go Back</button>
                <div className="lyric-container">
                    <div className="lyric-heading">The unforgiven</div>
                    <div className="lyric-text">I made this project to get familiar with react. Context-api is used instead of redux as the project is simple. Bootstrap-MD is used for styling. Axios is used for making all the requests.
On the landing page a search component is displayed along with the Top 10 songs of India at that moment.
On the search field, you enter the song you want to see the lyrics of.
After submitting the form, the matching results will be displayed. Click on the lyrics button of your song.
you will be directed to the lyrics page of that song.</div>
                </div>
                <div className="song-info">
                    <div>Album Id: </div>
                    <div>Song Genre: Heavy Metal</div>
                    <div>Release date: 12-01-2000</div>
                </div>
            </div>
            <div className="footer">Created By: Moksh Teng</div>
        
        </>
    )
}

export default Lyrics
