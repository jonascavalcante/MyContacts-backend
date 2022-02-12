const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Jonas Cavalcante',
    email: 'jonas@mail.com',
    phone: '87998989797',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Júnior Diniz',
    email: 'junior@mail.com',
    phone: '81998989797',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
