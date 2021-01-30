import axios from 'axios';
import React, { createContext, FC, useEffect, useState } from 'react';
import { User } from './types';
import { VEJOVIS_BASE_URL } from './util';

interface AuthContextType {
    authenticated: boolean;
    setUser: Function;
    register: (user: User) => void;
    user?: Partial<User>;
}

export const AuthContext = createContext<AuthContextType>({
    authenticated: false,
    register: () => {},
    setUser: () => {},
    user: undefined
});

const { Provider } = AuthContext;

const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState({});
    const authenticated = !!Object.keys(user).length;

    const register = async (user: User) => await axios.post(`${VEJOVIS_BASE_URL}/register`, user);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await axios.get(`${VEJOVIS_BASE_URL}/login`);
            console.log(user)
        };

        fetchUser();
    }, [])

    return (
        <Provider value={{ authenticated, register, setUser, user }}>
            {children}
        </Provider>
    );
}

export default AuthProvider;
