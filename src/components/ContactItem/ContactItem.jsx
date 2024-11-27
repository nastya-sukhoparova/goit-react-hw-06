import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./ContactItem.module.css";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default ContactItem;
