import React, { useState } from 'react';
import './LoginPage.css';
import { useAuth } from '../../auth/AuthContext';
import { authenticate } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const res = await authenticate({ username, password });
            auth.login(res);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Lỗi đăng nhập');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>ĐĂNG NHẬP HỆ THỐNG</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" required />
                    </div>
                    {error && <div className="login-error">{error}</div>}
                    <button disabled={loading} type="submit" className="login-button">{loading ? 'Đang xử lý...' : 'Đăng nhập'}</button>
                    <a href="#forgot" className="forgot-password">Quên mật khẩu?</a>
                    <a href="/register" className="register-link">Chưa có tài khoản? Đăng ký ngay</a>
                </form>
                <div style={{marginTop:12,fontSize:12,color:'#666'}}>
                    <div>Demo: admin / password  hoặc bất kỳ <b>tenThuongGoi</b> từ dữ liệu với mật khẩu <b>member</b></div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;