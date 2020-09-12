import React from 'react'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import  App from '../components/App/App'
import { Login_Form } from '../components/Login/login'
import { Register_Form } from '../components/Register/register'

export class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login_Form} />
                    <Route path="/register" component={Register_Form} />
                    <Route path="/chat/:receiver_id" component={App} />
                </Switch>
            </Router>
        )
    }
}