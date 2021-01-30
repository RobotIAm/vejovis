import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { Alert } from '../components';
import { Snackbar } from '@material-ui/core';

interface SnackbarContextType {
    error: string;
    success: string;
    setError: Dispatch<SetStateAction<string>>;
    setSuccess: Dispatch<SetStateAction<string>>;
}

export const SnackbarContext = createContext<SnackbarContextType>({
    error: '',
    success: '',
    setError: () => {},
    setSuccess: () => {}

});

const { Provider } = SnackbarContext;

const SnackbarProvider: FC = ({ children }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleClose = () => {
        setSuccess('');
        setError('');
    };

    return (
        <Provider value={{ error, success, setError, setSuccess }}>
            {children}
            <Snackbar open={!!success || !!error} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={!!error ? "error" : "success"}>
                    {!!error ? error : success}
                </Alert>
            </Snackbar>
        </Provider>
    );
}

export default SnackbarProvider;
