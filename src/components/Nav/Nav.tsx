import React, { useContext } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { AuthContext } from '../../providers';


const Nav = () => {
    const { authenticated, setUser } = useContext(AuthContext);

    const login = () => setUser({ name: 'Jorge' })
    const logout = () => setUser({})

    return (
        <AppBar position="static" style={{ height: '8vh' }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Typography variant="h4">
                    Vejovis
                </Typography>
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