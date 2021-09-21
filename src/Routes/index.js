import React from 'react'


import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import NotFound from '../Pages/NotFound'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <Home/>
        </Route>
        <Route exact path={'/:userName'}>
          <Profile/>
        </Route>
        {/* <Route>
          <Home/>
        </Route> */}
        <Route exact path={'/user/not-found'}>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes