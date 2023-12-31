// Make methods' refactoring of the phonebook object to make the code work.

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

phonebook.add({
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
});

console.table(phonebook.contacts);

phonebook.add({
  name: 'Poly',
  email: 'poly@hotmail.com',
});

console.table(phonebook.contacts);