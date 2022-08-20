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
    name: 'Test 1',
    email: 'test1@example.com',
    bankAccNo: '123test',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Test 2',
    email: 'test2@example.com',
    bankAccNo: '123test1',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
