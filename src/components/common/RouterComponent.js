import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Pages
import HomePage from "../../pages/HomePage";
import LeaguesPage from "../../pages/LeaguesPage";

const RouterComponent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/leagues" exact>
        <LeaguesPage />
      </Route>
    </Switch>
  )
}

export default RouterComponent