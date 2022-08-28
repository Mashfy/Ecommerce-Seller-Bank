import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Seller',
    email: 'seller@gmail.com',
    account_number: '29152222152891172311192292132523',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
  },
];

export default users;