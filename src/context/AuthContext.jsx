import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Use relative path to leverage Vite proxy
    const API_URL = '/api';

    useEffect(() => {
        // Check if token exists and is valid (optional: verify with backend)
        if (token) {
            // For now, just assume logged in if token exists. 
            // Ideally, we should fetch user profile here.
            setUser({ name: 'Admin' });
        }
        setLoading(false);
    }, [token]);

    const login = async (username, password) => {
        try {
            const response = await fetch(`${API_URL}/Auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // The API returns the token directly as a string or in a JSON object?
            // Based on Swagger, it returns 200 OK. Let's assume it returns the token text or json.
            // Let's check the response type.
            const contentType = response.headers.get("content-type");
            let data;
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            // Assuming the response is the token or contains the token.
            // If it's a simple string token:
            const receivedToken = typeof data === 'object' && data.token ? data.token : data;

            setToken(receivedToken);
            localStorage.setItem('authToken', receivedToken);
            setUser({ name: username });
            navigate('/admin/dashboard');
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: error.message };
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        navigate('/admin/login');
    };

    const value = {
        user,
        token,
        login,
        logout,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
