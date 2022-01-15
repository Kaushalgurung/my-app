import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'

export default function RouterPage() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component = {Home} />
                    <Route path="/About" component = {About} />
                </Switch>

            </Router>
            
        </div>
    )
}
