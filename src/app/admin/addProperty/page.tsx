"use client";
import React, { useState } from "react";
import styles from "./addListing.module.css";

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyTitle: "",
    description: "",
    price: "",
    propertyType: "",
    img: [] as File[],
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;

    setFormData((prev) => {
      if (type === "file" && files) {
        return { ...prev, img: [...prev.img, ...Array.from(files)] };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      img: prev.img.filter((_, i) => i !== index),
    }));
  };

  const handleList = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    if (
      Object.values(formData).some((value) => value === "" || value === null) ||
      formData.img.length === 0
    ) {
      setError("All fields, including at least one image, are required.");
      setLoading(false);
      return;
    }

    setError("");
    alert(`${formData.propertyTitle} is successfully added to the list!`);

    setFormData({
      propertyTitle: "",
      description: "",
      price: "",
      propertyType: "",
      img: [],
    });

    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <form onSubmit={handleList}>
          <h1 className={styles.label}>Add Property Listing </h1>

          <input
            type="text"
            placeholder="Property Title"
            className={styles.propTitle}
            name="propertyTitle"
            value={formData.propertyTitle}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            className={styles.description}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Price"
            className={styles.price}
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <select
            id="options"
            className={styles.option}
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
          >
            <option value="">Select a Property type</option>
            <option value="house and lot">House and Lot</option>
            <option value="condo">Condominium</option>
            <option value="lot">Lot</option>
          </select>

          <input
            type="file"
            id="propertyImg"
            multiple
            accept="image/*"
            className={styles.imgUp}
            onChange={handleChange}
          />
          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.addButton} disabled={loading}>
            {loading ? "Adding..." : "Add Listing"}
          </button>
        </form>
      </div>

      <div className={styles.imagePreviewContainer}>
        <h3 className={styles.prevLab}>Property Image Preview: </h3>
        {formData.img.map((file, index) => (
          <div key={index} className={styles.imagePreview}>
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className={styles.previewImg}
            />
            <button
              type="button"
              className={styles.removeBtn}
              onClick={() => handleRemoveImage(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPropertyForm;
