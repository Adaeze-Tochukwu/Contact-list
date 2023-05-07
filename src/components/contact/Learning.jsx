import React, { useState, useEffect } from "react";
import data from "./data.json";

export default function Learning() {
  const [contacts, setContacts] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    setContacts(data);
  }, []);

  const handleCheckbox = (e) => {
    const contactId = parseInt(e.target.id);
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === contactId) {
        return { ...contact, checked: !contact.checked };
      } else {
        return contact;
      }
    });
    setContacts(updatedContacts);
  };

  const handleCheckAllChange = (e) => {
    const isChecked = parseInt(e.target.checked);
    setCheckAll(isChecked);
    setContacts(
      contacts.map((contact) => ({ ...contact, checked: isChecked }))
    );
  };

  return (
    <div>
      <h2>Contact List</h2>
      <input
        type="checkbox"
        checked={checkAll}
        onChange={handleCheckAllChange}
      />{" "}
      <label>Check All</label>
      <hr />
      <section>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <input
              type="checkbox"
              id={contact.id}
              checked={contact.checked}
              onChange={handleCheckbox}
            />
            {contact.name} ({contact.email})
          </div>
        ))}
      </section>
      <hr />
      <button>Delete Selected Contacts</button>
    </div>
  );
}
