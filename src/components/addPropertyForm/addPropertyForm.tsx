import React from "react";
import styles from "./addListing.module.css";

const addPropertyForm = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <h1 className={styles.label}>Add Property Listing: </h1>

        <input
          type="text"
          placeholder="Property Title: "
          className={styles.propTitle}
        />
        <input
          type="text"
          placeholder="Description: "
          className={styles.description}
        />
        <input type="number" placeholder="Price: " className={styles.price} />

        <label>Choose an option:</label>
        <select id="options" name="options">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default addPropertyForm;
