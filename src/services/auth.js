// Very small mock auth service
import { members } from './mockData';

// For demo purposes, accept username 'admin' and password 'password', or match a member's tenThuongGoi
export function authenticate({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username || !password) return reject(new Error('Thiếu thông tin đăng nhập'));

      // simple hardcoded check
      if (username === 'admin' && password === 'password') {
        return resolve({ token: 'mock-token-admin', user: { name: 'Admin', role: 'admin' } });
      }

      // Add hardcoded credentials for 'abc' and '123'
      if (username === 'abc' && password === '123') {
        return resolve({ token: 'mock-token-abc', user: { name: 'User ABC', role: 'user' } });
      }

      // try to match a member by tenThuongGoi as alternate demo login
      const found = members.find(m => m.tenThuongGoi && m.tenThuongGoi.toLowerCase() === username.toLowerCase());
      if (found && password === 'member') {
        return resolve({ token: 'mock-token-member', user: { name: found.hoTen, id: found.idThanhVien, role: 'member' } });
      }

      return reject(new Error('Tên đăng nhập hoặc mật khẩu không đúng'));
    }, 500);
  });
}

const users = [
  { username: 'abc', password: '123', role: 'user' },
  { username: 'admin', password: 'password', role: 'admin' },
];

export function registerUser({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username || !password) {
        return reject(new Error('Tên đăng nhập và mật khẩu là bắt buộc'));
      }

      const existingUser = users.find(user => user.username === username);
      if (existingUser) {
        return reject(new Error('Tên đăng nhập đã tồn tại'));
      }

      const newUser = { username, password, role: 'user' };
      users.push(newUser);
      resolve(newUser);
    }, 500);
  });
}
