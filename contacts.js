const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: udokumentuj każdą funkcję
function listContacts() {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.log(error);
    }
    const parsedData = JSON.parse(data);
    console.log(parsedData);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.log(error);
    }
    const parsedData = JSON.parse(data);
    const wantedId = parsedData.find((el) => el.id === contactId);
    console.log(wantedId);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.log(error);
    }
    const parsedData = JSON.parse(data);
    const idToDelete = parsedData.findIndex((el) => el.id === contactId);
    parsedData.splice(idToDelete, 1);
    console.log(parsedData);
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.log(error);
    }
    const parsedData = JSON.parse(data);
    const newContact = {
      id: uuidv4(),
      name: name,
      email: email,
      phone: phone,
    };
    parsedData.push(newContact);
    console.log(parsedData);
  });
}

listContacts();

module.exports = {
  listContacts,
  addContact,
  removeContact,
  getContactById,
};
