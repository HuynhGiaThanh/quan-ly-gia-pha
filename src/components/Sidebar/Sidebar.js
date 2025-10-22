import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><NavLink to="/" end>Trang chủ</NavLink></li>
                <li><NavLink to="/members">Quản lý thành viên</NavLink></li>
                <li><NavLink to="/search">Tra cứu gia phả</NavLink></li>
                <li><NavLink to="/history">Lịch sử & Nghi lễ</NavLink></li>
            </ul>
        </nav>
    );
}

export default Sidebar;