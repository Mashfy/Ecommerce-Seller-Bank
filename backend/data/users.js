import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    bankAccNo: '123admin',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Fahim Khan',
    email: 'fahim@example.com',
    bankAccNo: '123fahim',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mashfy Alam',
    email: 'mashfy@example.com',
    bankAccNo: '123mashfy',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
