import React from 'react'
import Home from './components/Home/Home'
import Lyrics from './components/Lyrics/Lyrics';
import { Switch,Route, useRouteMatch } from 'react-router-dom';
export default function App() {
  
  return (
    
    
    <Switch>
    <Route exact path={process.env.PUBLIC_URL + '/'}><Home /></Route>
    <Route path={process.env.PUBLIC_URL +'/lyrics/:id'}><Lyrics /></Route>
    </Switch>
    
    
    
  )
}
