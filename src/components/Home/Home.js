import React from 'react'
import Header from './Header'
import Content from './Content'
import { useState, useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import axios from 'axios'
function Home() {
 let [query,setQuery]=useState("");
  let [loading,setLoading]=useState(0)
  let [songlist,setSonglist]=useState([])
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getTracks("")
  }, []);
  function onSubmit(e)
  {
    e.preventDefault()
    setLoading(0);
    getTracks(query)
    
  }
 function getTracks(searchTerm)
  {
    axios.get(`https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=${searchTerm}&f_has_lyrics=1&s_track_rating=desc&quorum_factor=1&page_size=10&page=1&apikey=84a856b465795183a36903b5381cdf2a`,{timeout:10000})
    .then(response=>{
      let obj=JSON.parse(response.data.substring(9,response.data.length-2))
      let arr=obj.message.body.track_list
      setSonglist([...arr])
      setTimeout(()=>setLoading(1),1000)
      setQuery("")
    })
    .catch(err=>{
      console.log(err)
      setLoading(2)
      

    })
  }
    return (
        <>
        <Header query={query} setQuery={setQuery} onSubmit={onSubmit} />
        <Content songlist={songlist} loading={loading} />
            
        </>
    )
}

export default Home
