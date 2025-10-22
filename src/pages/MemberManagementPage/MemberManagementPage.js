import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import Modal from '../../components/Modal/Modal';
import ViewMemberDetail from '../../components/ViewMemberDetail/ViewMemberDetail';
import AddMemberForm from '../../components/AddMemberForm/AddMemberForm';
import EditMemberForm from '../../components/EditMemberForm/EditMemberForm';
import { members as mockMembers } from '../../services/mockData';
import './MemberManagementPage.css';

const MemberManagementPage = () => {
    const [members, setMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [modalState, setModalState] = useState({ view: false, add: false, edit: false });
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setMembers(mockMembers);
    }, []);

    useEffect(() => {
        setFilteredMembers(
            members.filter(m => m.hoTen.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [searchTerm, members]);

    const openModal = (type, member = null) => {
        setSelectedMember(member);
        setModalState(prev => ({ ...prev, [type]: true }));
    };

    const closeModal = () => {
        setModalState({ view: false, add: false, edit: false });
        setSelectedMember(null);
    }

    const handleAdd = (newData) => {
        const newMember = { idThanhVien: Date.now(), ...newData, anhDaiDien: `https://i.pravatar.cc/150?img=${members.length + 1}` };
        setMembers([newMember, ...members]);
        closeModal();
        alert('Thêm thành viên thành công!');
    };

    const handleEdit = (id, updatedData) => {
        setMembers(members.map(m => (m.idThanhVien === id ? updatedData : m)));
        closeModal();
        alert('Cập nhật thành công!');
    };

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xoá thành viên này?')) {
            setMembers(members.filter(m => m.idThanhVien !== id));
            alert(`Đã xoá thành viên.`);
        }
    };

    return (
        <MainLayout>
            <div className="page-container">
                <h2>Quản lý thành viên</h2>
                <div className="toolbar">
                    <input type="text" placeholder="Tìm kiếm theo họ tên..." className="search-input" onChange={e => setSearchTerm(e.target.value)} />
                    <button onClick={() => openModal('add')} className="add-button">Thêm thành viên</button>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th><th>Ảnh</th><th>Họ và Tên</th><th>Ngày Sinh</th><th>Giới Tính</th><th>Đời</th><th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMembers.map(member => (
                                <tr key={member.idThanhVien}>
                                    <td>{member.idThanhVien}</td>
                                    <td><img src={member.anhDaiDien} alt={member.hoTen} className="avatar-sm" /></td>
                                    <td>{member.hoTen}</td><td>{member.ngaySinh}</td><td>{member.gioiTinh}</td><td>{member.doi}</td>
                                    <td className="actions">
                                        <button onClick={() => openModal('view', member)} className="action-btn view">Xem</button>
                                        <button onClick={() => openModal('edit', member)} className="action-btn edit">Sửa</button>
                                        <button onClick={() => handleDelete(member.idThanhVien)} className="action-btn delete">Xoá</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={modalState.view} onClose={closeModal} title="Thông tin chi tiết"><ViewMemberDetail member={selectedMember} /></Modal>
            <Modal isOpen={modalState.add} onClose={closeModal} title="Thêm thành viên mới"><AddMemberForm onAdd={handleAdd} onClose={closeModal} /></Modal>
            {selectedMember && <Modal isOpen={modalState.edit} onClose={closeModal} title="Sửa thông tin thành viên"><EditMemberForm member={selectedMember} onEdit={handleEdit} onClose={closeModal} /></Modal>}
        </MainLayout>
    );
};

export default MemberManagementPage;