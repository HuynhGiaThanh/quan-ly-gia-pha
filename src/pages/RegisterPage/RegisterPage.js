import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { registerUser } from '../../services/auth';
import './RegisterPage.css';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const newUser = await registerUser({ username, password });
            auth.login({ token: 'mock-token-' + newUser.username, user: newUser });
            setSuccess(true);
            setTimeout(() => navigate('/'), 1500);
        } catch (err) {
            setError(err.message || 'Lỗi đăng ký');
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" required />
                    </div>
                    {error && <div className="register-error">{error}</div>}
                    {success && <div className="register-success">Đăng ký thành công! Chuyển hướng...</div>}
                    <button type="submit" className="register-button">Đăng ký</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;