import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: Date.now().toString(), name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
