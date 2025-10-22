import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import './SearchPage.css';

const SearchPage = () => {
    const [activeTab, setActiveTab] = useState('generation');

    const renderContent = () => {
        switch(activeTab) {
            case 'generation': return <div><label>Chọn thế hệ:</label><input type="number" placeholder="Nhập đời thứ..."/></div>;
            case 'branch': return <div><label>Chọn chi phái:</label><select><option>Chi 1</option><option>Chi 2</option></select></div>;
            case 'time': return <div><label>Chọn khoảng thời gian:</label><input type="date" /> - <input type="date" /></div>;
            case 'relationship': return <div><label>Tìm quan hệ giữa:</label><input type="text" placeholder="Tên người 1"/> và <input type="text" placeholder="Tên người 2"/></div>;
            default: return null;
        }
    }

    return (
        <MainLayout>
            <div className="page-container">
                <h2>Tra cứu gia phả</h2>
                <div className="tab-nav">
                    <button onClick={() => setActiveTab('generation')} className={activeTab === 'generation' ? 'active' : ''}>Theo thế hệ</button>
                    <button onClick={() => setActiveTab('branch')} className={activeTab === 'branch' ? 'active' : ''}>Theo chi phái</button>
                    <button onClick={() => setActiveTab('time')} className={activeTab === 'time' ? 'active' : ''}>Theo thời gian</button>
                    <button onClick={() => setActiveTab('relationship')} className={activeTab === 'relationship' ? 'active' : ''}>Theo mối quan hệ</button>
                </div>
                <div className="tab-content">
                    {renderContent()}
                    <button className="search-button">Tra cứu</button>
                </div>
                 <div className="search-results">
                    {/* Kết quả tìm kiếm sẽ hiển thị ở đây */}
                    <p>Kết quả tra cứu sẽ được hiển thị dưới dạng cây gia phả hoặc danh sách.</p>
                </div>
            </div>
        </MainLayout>
    );
};

export default SearchPage;