import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.container}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <SearchBox />
    <ContactList />
  </div>
);

export default App;
