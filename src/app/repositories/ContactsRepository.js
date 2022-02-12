const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Jonas Cavalcante',
    email: 'jonas@mail.com',
    phone: '87998989797',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
