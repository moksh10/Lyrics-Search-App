import React from 'react'
import Home from './components/Home/Home'
import Lyrics from './components/Lyrics/Lyrics';
import { Switch,Route } from 'react-router-dom';
export default function App() {
  
  return (
    
    
    <Switch>
    <Route exact path='/'><Home /></Route>
    <Route path='/lyrics/:id'><Lyrics /></Route>
    </Switch>
    
    
    
  )
}
