import React, { ChangeEvent, FC, useContext, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Box, Button, Grid, MenuItem, Select } from '@material-ui/core';
import { User, UserRole } from '../../types';
import { withRouter, RouterProps } from 'react-router-dom';
import { AuthContext, SnackbarContext } from '../../providers';

const Registration: FC<RouterProps> = ({ history }) => {
    const { register } = useContext(AuthContext);
    const { setError, setSuccess } = useContext(SnackbarContext);
    
    const [user, setUser] = useState<User>({ 
        username: '', 
        password: '', 
        user_type: UserRole.PATIENT
    });

    const  { username, password, user_type } = user;
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      setUser(u => ({
        ...u,
        [e.target.id]: e.target.value
      }));

    const handleSelectChange = (e: ChangeEvent<{ 
      name?: string | undefined;
      value: unknown;
    }>) => 
      setUser(u => ({
        ...u,
        [e.target.name!]: e.target.value
      }));

    const handleRegister = async () => {
        const { success, error } = await register(user);

        if(!!success){
          setSuccess(success);
          history.push('/dashboard')
        } else if(!!error) {
          setError(error);
        }

        // TODO: handle flashing color issue (green/red)
    };
  
    return (
      <form noValidate autoComplete="off" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%' }}>
        <Grid container item direction="column" style={{ width: '50%' }}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput id="username" value={username} onChange={handleChange} label="Name" />
          </FormControl>
          <Box m={1}/>
          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput id="password" value={password} onChange={handleChange} label="Password" />
          </FormControl>
          <Box m={1}/>
          <FormControl variant="outlined">
            <InputLabel htmlFor="user_type">Role</InputLabel>
            <Select
              labelId="user_type-label"
              name="user_type"
              value={user_type}
              onChange={handleSelectChange}
              label="Role"
            >
              <MenuItem value={1}>Doctor</MenuItem>
              <MenuItem value={0}>Patient</MenuItem>
            </Select>
          </FormControl>
          <Box m={1}/>
          <Button variant="contained" disabled={!username || !password} onClick={handleRegister}>Register</Button>
        </Grid>
      </form>
    );
}
  

export default withRouter(Registration);