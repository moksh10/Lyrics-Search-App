import React from 'react'
import './Content.css'
import SongCard from './SongCard'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
function Content(props) {
    let ele;
    if(props.loading===0)
    {
        ele=<div className="spinner"><FontAwesomeIcon icon={faSpinner} spin/></div>

    }
    else if(props.loading===1)
    {
    let arr=props.songlist
    ele=arr.map((value)=>{
        let songname=value.track.track_name.split('(')
        return <SongCard key={value.track.track_id} id={value.track.track_id} songname={songname[0]} artist_name={value.track.artist_name} album_name={value.track.album_name}/>
    })
    }
    else
    {
        ele=<p className="error" data-aos="fade-up"
        data-aos-duration="1200">Error! Please Check Your Internet Connection</p>

    }
    return (
        <>
        <div className={props.loading===1?"container":"container-2"}>
           {ele}
        </div>
        <div className="footer">Created By: Moksh Teng</div>
        </>
    )
}

export default Content
