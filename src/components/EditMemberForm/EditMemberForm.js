import React, { useState, useEffect } from 'react';
import '../AddMemberForm/AddMemberForm.css'; // Reuse CSS

const EditMemberForm = ({ member, onEdit, onClose }) => {
    const [formData, setFormData] = useState(member);

    useEffect(() => {
        setFormData(member);
    }, [member]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(formData.idThanhVien, formData);
    };

    return (
        <form onSubmit={handleSubmit} className="member-form">
            {/* Các trường input tương tự AddMemberForm, nhưng có value={formData.fieldName} */}
            <div className="form-row">
                <div className="form-group"><label>Họ và Tên (*)</label><input type="text" name="hoTen" value={formData.hoTen} onChange={handleChange} required /></div>
                <div className="form-group"><label>Tên thường gọi</label><input type="text" name="tenThuongGoi" value={formData.tenThuongGoi} onChange={handleChange} /></div>
            </div>
             <div className="form-row">
                <div className="form-group"><label>Ngày Sinh (*)</label><input type="date" name="ngaySinh" value={formData.ngaySinh} onChange={handleChange} required /></div>
                <div className="form-group"><label>Ngày Mất</label><input type="date" name="ngayMat" value={formData.ngayMat || ''} onChange={handleChange} /></div>
            </div>
            {/* ... Thêm các trường khác tương tự ... */}
            <div className="form-actions">
                <button type="button" onClick={onClose} className="btn-cancel">Hủy</button>
                <button type="submit" className="btn-submit">Cập nhật</button>
            </div>
        </form>
    );
}

export default EditMemberForm;