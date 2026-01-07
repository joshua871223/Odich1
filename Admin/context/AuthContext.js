import React, { createContext, useEffect, useState } from 'react';
import AuthService from '../ApiService/AuthService';
import UserService from '../ApiService/UserService';
import { useMutation, useQuery } from 'react-query';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [savePlan, setSavePlan] = useState(null);
    const [isCreatePlan, setIsCreatePlan] = useState(true);

    useEffect(() => {
        if (!token) {
            const accessToken = localStorage.getItem('token');
            if (accessToken) {
                setToken(accessToken);
            } else {
                setIsLoading(false);
            }
        }
    }, [token]);

    const { data: currentUserData, isLoading: userLoading, error } = useQuery({
        queryKey: ['getUser'],
        queryFn: UserService.getUser,
        enabled: !!token,
        retry: 3,
        onError: (error) => {
            console.error('Error fetching user:', error);
            // If unauthorized, clear token and user
            if (error?.response?.status === 401) {
                localStorage.removeItem('token');
                setToken(null);
                setUser(null);
            }
        },
        onSettled: () => {
            setIsLoading(false);
        },
        refetchOnWindowFocus: false,
    });

    // Update user when data is available
    useEffect(() => {
        if (currentUserData) {
            console.log('CURRENT USER', currentUserData);
            setUser(currentUserData);
        }
    }, [currentUserData]);

    const { mutateAsync: deleteToken } = useMutation(AuthService.logout);

    const logout = async () => {
        await deleteToken().finally(() => {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
        });
    };

    const saveToken = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                saveToken,
                logout,
                token,
                isLoading,
                setIsLoading,
                savePlan,
                setSavePlan,
                isCreatePlan,
                setIsCreatePlan,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
