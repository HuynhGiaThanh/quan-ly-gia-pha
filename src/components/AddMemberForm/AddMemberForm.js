import React, { useState } from 'react';
import './AddMemberForm.css';

const AddMemberForm = ({ onAdd, onClose }) => {
    const [formData, setFormData] = useState({
        hoTen: '', tenThuongGoi: '', ngaySinh: '', ngayMat: '', gioiTinh: 'Nam', diaChi: '', queQuan: '', doi: '', idCha: '', idMe: '', chucVu: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.hoTen || !formData.ngaySinh || !formData.doi) {
            alert('Vui lòng nhập các trường bắt buộc (*).');
            return;
        }
        onAdd(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="member-form">
            <div className="form-row">
                <div className="form-group"><label>Họ và Tên (*)</label><input type="text" name="hoTen" onChange={handleChange} required /></div>
                <div className="form-group"><label>Tên thường gọi</label><input type="text" name="tenThuongGoi" onChange={handleChange} /></div>
            </div>
            <div className="form-row">
                <div className="form-group"><label>Ngày Sinh (*)</label><input type="date" name="ngaySinh" onChange={handleChange} required /></div>
                <div className="form-group"><label>Ngày Mất</label><input type="date" name="ngayMat" onChange={handleChange} /></div>
            </div>
            <div className="form-row">
                <div className="form-group"><label>Giới tính</label><select name="gioiTinh" onChange={handleChange}><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
                <div className="form-group"><label>Đời thứ (*)</label><input type="number" name="doi" onChange={handleChange} required /></div>
            </div>
            <div className="form-group"><label>Quê quán</label><input type="text" name="queQuan" onChange={handleChange} /></div>
            <div className="form-group"><label>Địa chỉ</label><input type="text" name="diaChi" onChange={handleChange} /></div>
            <div className="form-row">
                <div className="form-group"><label>ID Cha</label><input type="number" name="idCha" onChange={handleChange} /></div>
                <div className="form-group"><label>ID Mẹ</label><input type="number" name="idMe" onChange={handleChange} /></div>
            </div>
            <div className="form-group"><label>Chức vụ</label><input type="text" name="chucVu" onChange={handleChange} /></div>
            <div className="form-actions">
                <button type="button" onClick={onClose} className="btn-cancel">Hủy</button>
                <button type="submit" className="btn-submit">Lưu</button>
            </div>
        </form>
    );
}

export default AddMemberForm;