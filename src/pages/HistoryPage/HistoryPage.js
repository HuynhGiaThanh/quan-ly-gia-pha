import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import { history, ceremonies } from '../../services/mockData';
import './HistoryPage.css';

const HistoryPage = () => {
    return (
        <MainLayout>
            <div className="page-container">
                <h2>Lịch sử & Nghi lễ gia tộc</h2>
                <div className="history-section">
                    <h3>Lịch sử dòng họ</h3>
                    {history.map(item => (
                        <div key={item.id} className="history-item">
                            <h4>{item.tieuDe}</h4>
                            <p>{item.noiDung.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
                        </div>
                    ))}
                </div>
                <div className="ceremony-section">
                    <h3>Các nghi lễ quan trọng</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Tên nghi lễ</th>
                                <th>Thời gian</th>
                                <th>Mô tả</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ceremonies.map(item => (
                                <tr key={item.id}>
                                    <td>{item.tenNghiLe}</td>
                                    <td>{item.ngayDienRa}</td>
                                    <td>{item.moTa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
};

export default HistoryPage;