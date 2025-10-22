import React from 'react';
import './ViewMemberDetail.css';

const ViewMemberDetail = ({ member }) => {
    if (!member) {
        return <div>Không có thông tin thành viên.</div>;
    }

    return (
        <div className="member-detail-container">
            <div className="member-avatar">
                <img src={member.anhDaiDien || 'https://via.placeholder.com/150'} alt={member.hoTen} />
            </div>
            <div className="member-info">
                <p><strong>Họ và tên:</strong> {member.hoTen}</p>
                <p><strong>Tên thường gọi:</strong> {member.tenThuongGoi}</p>
                <p><strong>Giới tính:</strong> {member.gioiTinh}</p>
                <p><strong>Ngày sinh:</strong> {member.ngaySinh}</p>
                <p><strong>Ngày mất:</strong> {member.ngayMat || 'Chưa có'}</p>
                <p><strong>Đời thứ:</strong> {member.doi}</p>
                <p><strong>Chức vụ:</strong> {member.chucVu || 'Không'}</p>
                <p><strong>Quê quán:</strong> {member.queQuan}</p>
                <p><strong>Địa chỉ hiện tại:</strong> {member.diaChi}</p>
                <p><strong>Thông tin Cha:</strong> ID {member.idCha || 'Không rõ'}</p>
                <p><strong>Thông tin Mẹ:</strong> ID {member.idMe || 'Không rõ'}</p>
            </div>
        </div>
    );
};

export default ViewMemberDetail;