import React, { useContext } from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { AppContext } from '../../AppProvider';

const Nav = () => {
    const { authenticated, setUser } = useContext(AppContext);

    const login = () => setUser({ name: 'Jorge' })
    const logout = () => setUser({})

    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
                Vejovis
            </IconButton>
            { 
                authenticated ? (
                    <>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">My Schedule</Button>
                        <Button color="inherit">Billing</Button>
                        <Button color="inherit">Prescriptions</Button>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </>
                ) : (
                    <Button color="inherit" onClick={login}>Login</Button>
                )
            }
            </Toolbar>
        </AppBar>
    );
}

export default Nav;