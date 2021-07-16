import React from 'react'
import { useState,useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"
import axios from 'axios';
import Header from './components/Header'
import Content from './components/Content'
export default function App() {
  let [query,setQuery]=useState("");
  let [loading,setLoading]=useState(0)
  let [songlist,setSonglist]=useState([])
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getData("")
  }, []);
  function onSubmit(e)
  {
    e.preventDefault()
    setLoading(0);
    getData(query)
    setQuery("")
  }
 function getData(searchTerm)
  {
    axios.get(`https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q=${searchTerm}&f_has_lyrics=1&s_track_rating=desc&quorum_factor=1&page_size=10&page=1&apikey=84a856b465795183a36903b5381cdf2a`)
    .then(response=>{
      let obj=JSON.parse(response.data.substring(9,response.data.length-2))
      console.log(obj)
      let arr=obj.message.body.track_list
      setSonglist([...arr])
      setTimeout(()=>setLoading(1),1000)
    })
    .catch(err=>{
      console.log(err)
      setLoading(2)
      

    })
  }
  return (
    <>
    <Header query={query} setQuery={setQuery} onSubmit={onSubmit}/>
    <Content songlist={songlist} loading={loading}/>
    
  
    </>
  )
}
