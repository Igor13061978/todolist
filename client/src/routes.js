import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {CreatenotesPage} from './pages/CreatenotesPage'
import {EditnotesPage} from './pages/EditnotesPage'
import {DeletenotesPage} from './pages/DeletenotesPage'
import {RednotesPage} from './pages/RednotesPage'
import {GreennotesPage} from './pages/GreennotesPage'
import {DetailRedPage} from './pages/DetailRedPage'
import {DetailGreenPage} from './pages/DetailGreenPage'
import {RegisterPage} from './pages/RegisterPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/createnotes" exact>
                    <CreatenotesPage />
                </Route>
                <Route path="/rednotes" exact>
                    <RednotesPage />
                </Route>
                <Route path="/greennotes" exact>
                    <GreennotesPage />
                </Route>
                <Route path="/editnotes/:id" exact>
                    <EditnotesPage />
                </Route> 
                <Route path="/reddetailnote/:id" exact>
                    <DetailRedPage />
                </Route> 
                <Route path="/greendetailnote/:id" exact>
                    <DetailGreenPage />
                </Route> 
                <Route path="/deletenote/:id" exact>
                    <DeletenotesPage />
                </Route> 
                <Redirect to="/createnotes" />
            </Switch>
        )
    }
        return (
            <Switch>
                <Route path="/" exact>
                    <RegisterPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
}