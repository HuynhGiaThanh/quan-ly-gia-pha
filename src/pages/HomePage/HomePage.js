import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import './HomePage.css';

const HomePage = () => {
    return (
        <MainLayout>
            <div className="homepage">
                <h2>Chào mừng đến với Hệ thống Quản lý Gia Phả</h2>
                <p>
                    Đây là nơi lưu giữ, quản lý và tra cứu thông tin về các thành viên,
                    thế hệ trong dòng họ.
                </p>
                <div className="features">
                    <div className="feature-card">
                        <h3>Quản lý Thành viên</h3>
                        <p>Thêm, sửa, xóa và xem thông tin chi tiết của từng thành viên trong gia phả.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Tra cứu Gia phả</h3>
                        <p>Dễ dàng tìm kiếm và xem cây gia phả theo nhiều tiêu chí khác nhau.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Lịch sử & Nghi lễ</h3>
                        <p>Lưu trữ và tra cứu lịch sử hình thành, các quy ước và nghi lễ quan trọng của dòng họ.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;