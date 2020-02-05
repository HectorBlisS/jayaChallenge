import React from 'react'
import Chart from './components/Chart'
import Ajax from './components/Ajax'
import { Switch, Route } from 'react-router-dom'

export default function Routes() {
    return <Switch>
        <Route exact path="/" component={Chart} />
        <Route path="/ajax" component={Ajax} />
    </Switch>
}