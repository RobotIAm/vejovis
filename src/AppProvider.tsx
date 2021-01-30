import React, { createContext, FC, useState } from 'react';

interface AppContextType {
    authenticated: boolean;
    setUser: Function;
    user?: { name?: string };
}

export const AppContext = createContext<AppContextType>({
    authenticated: false,
    setUser: () => {},
    user: undefined
});

const { Provider } = AppContext;

const AppProvider: FC = ({ children }) => {
    const [user, setUser] = useState({});
    const authenticated = !!Object.keys(user).length;

    return (
        <Provider value={{ authenticated, setUser, user }}>
            {children}
        </Provider>
    );
}

export default AppProvider;
