import React from 'react'
import Routing from './routing'
import Ace from "./components/ace"
import Nav from "./components/nav"
import Card3 from "./components/card3"
import Fly from "./components/fly"
import Card2 from "./components/card2"



import {BrowserRouter, Switch, Route} from "react-router-dom"
import Brand from './data'


export default function App() {


    




    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/'><Routing /></Route>
        <Route path="/ace" component={Ace}>
            <Nav/>
            <Card2/>
        </Route>
        <Route path="/fly" component={Fly}>
            <Nav/>
            <Card3/>
        </Route>

        </Switch>
        </BrowserRouter>
    )
}
