import React, { useEffect, useState } from "react";
import { getContacts } from "../api/xeroApi";

interface Contact {
  contactID: string;
  name: string;
}

const ContactsList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     try {
  //       const data = await getContacts();
  //       setContacts(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchContacts();
  // }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.contactID}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
