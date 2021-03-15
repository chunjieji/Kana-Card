import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { CSSTransition,TransitionGroup } from 'react-transition-group';

import HomePage from '../components/HomePage/HomePage.jsx'
import Overview from '../components/Overview/Overview.jsx'
import Nav from '../components/Nav/Nav.jsx'
import Mode from '../components/Mode/Mode.jsx'
import Card from '../components/Card/Card.jsx'


import './Routes.css'

const routes = [
  { path: '/', name: 'HomePage', Component: HomePage },
  { path: '/overview/:content', name: 'Overview', Component: Overview },
  { path: '/mode', name: 'Mode', Component: Mode },
  { path: '/card', name: 'Card', Component: Card }
]

const Routes = () => {
  return(
    <Router>
      <Nav />
      <>
      {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
      </>
    </Router>
  )
}

export default Routes;