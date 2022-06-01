import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Fahim Khan',
    email: 'fahim@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mashfy Alam',
    email: 'mashfy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
