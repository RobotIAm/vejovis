import React, { ChangeEvent, useContext, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button, MenuItem, Select } from '@material-ui/core';
import { AuthContext } from '../../AuthProvider';
import { User, UserRole } from '../../types';

const Registration = () => {
    const { register } = useContext(AuthContext);
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
      const data = await register(user);
      // TODO: Show success message or error message
      // TODO: change view based on auth state
    };
  
    return (
      <form noValidate autoComplete="off">
        <FormControl variant="outlined">
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput id="username" value={username} onChange={handleChange} label="Name" />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput id="password" value={password} onChange={handleChange} label="Password" />
        </FormControl>
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
        <Button disabled={!username || !password} onClick={handleRegister}>Register</Button>
      </form>
    );
}
  

export default Registration;