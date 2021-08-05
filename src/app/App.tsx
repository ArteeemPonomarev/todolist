import React, { useEffect } from 'react'
import './App.css'
import {
    AppBar,
    Button,
    CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from './store'
import { initializeAppTC, RequestStatusType } from './app-reducer'
import { Login } from "../features/login/Login";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { loginTC, logoutTC } from "../features/login/authReducer";

type PropsType = {
    demo?: boolean
}

function App({ demo = false }: PropsType) {
    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }} >
            <CircularProgress />
        </div>
    }

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <div className="App">
            <ErrorSnackbar />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {isLoggedIn && <Button onClick={logoutHandler} color="inherit">Logout</Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress />}
            </AppBar>
            <Container fixed>
                <Switch>
                    <Route exact path={'/'} render={() => <TodolistsList demo={demo} />} />
                    <Route path={'/login'} render={() => <Login />} />
                    <Route path={'/404'} render={() => <div style={{ 'fontSize': '60px' }}>404: PAGE NOT FOUND</div>} />
                    <Redirect from={'*'} to={'/404'} />
                </Switch>
            </Container>
        </div>
    )
}

export default App
