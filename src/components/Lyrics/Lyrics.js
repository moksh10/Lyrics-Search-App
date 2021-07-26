import React from 'react'
import './Lyrics.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
function Lyrics() {
    
    let [loading,setLoading]=useState(0)
    let [data,setData]=useState({})
    let [lyric,setLyric]=useState("")
    const hist=useHistory()
    const {id}=useParams()
    function renderHome()
    {
        hist.goBack()
    }
    let ele
    if(loading===0)
    {
        ele=<FontAwesomeIcon icon={faSpinner} spin/>
    

    }
    
    else if(loading===2)
    {
        ele="Error! Please Check Your Internet Connection"
    }
    else if(loading===3)
    {
        
        ele="Error 404!\nNot found"
    }
    useEffect(()=>{
        setLoading(0)
        let arr=id.split('+')
        getData(arr[2])
        setData({...data,name:arr[0],artist:arr[1]})

        
    },[])
    const getData=(searchId)=>{
        axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=callback&track_id=${searchId}&apikey=84a856b465795183a36903b5381cdf2a`,{timeout:10000})
    .then(response=>{
        console.log(response)
        if(response.status===404)
        {
            
            setLoading(3)
           return
        
        }
      let obj=JSON.parse(response.data.substring(9,response.data.length-2))
      let text=obj.message.body.lyrics.lyrics_body
      let lyricBody=text.substring(0,text.length-70)
      setLyric(lyricBody)
      setTimeout(()=>setLoading(1),1000)
      
      
    })
    .catch(err=>{
      console.log(err)
      setLoading(2)
      
      

    })

    }

    return (

        <>
            <div className="logo">Lyrics Search</div>
            <div className="lyrics-container">
                <button className="back-button" onClick={renderHome}>Go Back</button>
                <div className="lyric-container">
                    <div className="lyric-heading">{data.name} by {data.artist}</div>
                    <div className={loading===1?"lyric-text":"lyric-no-text"}>{loading===1?lyric:ele}</div>
                </div>
            </div>
            <div className="footer">Created By: Moksh Teng</div>
        
        </>
    )
}

export default Lyrics
