import React from 'react'
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"
import Header from './components/Header'
import Content from './components/Content'
export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Header />
    <Content />
       
  
    </>
  )
}
