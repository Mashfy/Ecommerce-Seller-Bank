import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    account_number: '111423192491172311192292132513',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'Alam',
    email: 'alam@gmail.com',
    account_number: '1122112391172311192292132523',
    password: bcrypt.hashSync('password', 10),
  },
  {
    name: 'Badrul',
    email: 'badrul@gmail.com',
    account_number: '12111428312291172311192292132523',
    password: bcrypt.hashSync('password', 10),
  },
];

export default users;
