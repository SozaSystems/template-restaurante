import React, { useState, useEffect } from 'react';
import AdminPanel from './AdminPanel';
import './Admin.css';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('tm_admin_auth') === 'ok') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('tm_admin_auth', 'ok');
            sessionStorage.setItem('tm_admin_pwd', password); // para enviársela a la API al guardar
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Contraseña incorrecta.');
            setPassword('');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('tm_admin_auth');
        setIsLoggedIn(false);
        setPassword('');
    };

    if (isLoggedIn) return <AdminPanel onLogout={handleLogout} />;

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">
                <h1 className="admin-login-title">Tu Marca</h1>
                <p className="admin-login-subtitle">Panel de Administración</p>
                <form onSubmit={handleLogin} className="admin-login-form">
                    <div className="admin-form-group">
                        <label htmlFor="admin-password">Contraseña</label>
                        <input
                            id="admin-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresá tu contraseña"
                            autoFocus
                        />
                    </div>
                    {error && <p className="admin-error">{error}</p>}
                    <button type="submit" className="admin-login-btn">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
