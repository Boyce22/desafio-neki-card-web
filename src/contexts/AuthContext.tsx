/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { api } from '../services/api';
import { UserDTO } from '@dtos/UserDTO';
import { AppError } from '../utils/AppError'
import { createContext, ReactNode, useState } from 'react';
import { getTokenStoraged, getUserStoraged, removeUserStorage, setUserStorageAndToken } from '../storage/storageUser';

export type AuthContextDataProps = {
    authenticated: boolean;
    user: UserDTO;
    signIn: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
    {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [authenticated, setAuthenticated] = useState(false);

    function setUserBearerToken(token: string) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    const signIn = async (email: string, password: string) => {
        try {
            const { data } = await api.post('/auth/signin', {
                email: email,
                password: password,
            });
            setUserBearerToken(data.accessToken);
            setUser(data);
            setAuthenticated(true);
            setUserStorageAndToken(data, data.accessToken);
        } catch (error) {
            throw new AppError('Failed to sign in. Please check your credentials.');
        }
    };

    function loadUserAndToken() {
        const localUser = getUserStoraged();
        const token = getTokenStoraged();
        if (localUser && token) {
            setUser(localUser);
            setUserBearerToken(token);
            setAuthenticated(true);
        }
    }

    function logout() {
        removeUserStorage();
        setUser({} as UserDTO);
        setAuthenticated(false);
    }

    useEffect(() => {
        loadUserAndToken();
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            authenticated,
            user,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}
