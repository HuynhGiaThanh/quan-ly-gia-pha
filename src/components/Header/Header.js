import React from 'react';
import { useAuth } from '../../auth/AuthContext';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="app-header">
            <h1>HỆ THỐNG QUẢN LÝ GIA PHẢ</h1>
            {user && (
                <div className="user-info">
                    <span>Chào, {user.name}</span>
                    <button className="logout-button" onClick={logout}>Đăng xuất</button>
                </div>
            )}
        </header>
    );
}

export default Header;