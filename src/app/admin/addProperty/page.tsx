"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image"; // Import next/image for optimization

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyTitle: "",
    description: "",
    price: "",
    propertyType: "",
    img: [] as File[],
  });

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
      toast.error("All fields, including at least one image, are required.", {
        position: "top-right",
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    toast.success(
      `${formData.propertyTitle} is successfully added to the list!`,
      {
        position: "top-center",
        autoClose: 3000,
      },
    );

    console.log(
      `${formData.propertyTitle}, ${formData.description}, ${formData.price}`,
    );

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
    <div className="flex justify-center items-center h-screen bg-gray-100 p-6">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mt-24">
        <h1 className="text-2xl font-bold text-center mb-4">
          Add Property Listing
        </h1>
        <form onSubmit={handleList} className="space-y-4">
          <input
            type="text"
            placeholder="Property Title"
            className="w-full p-2 border rounded"
            name="propertyTitle"
            value={formData.propertyTitle}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            className="w-full p-2 border rounded"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full p-2 border rounded"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <select
            className="w-full p-2 border rounded"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
          >
            <option value="">Select a Property Type</option>
            <option value="house and lot">House and Lot</option>
            <option value="condo">Condominium</option>
            <option value="lot">Lot</option>
          </select>

          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Listing"}
          </button>
        </form>

        {formData.img.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              Property Image Preview:
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {formData.img.map((file, index) => (
                <div key={index} className="relative">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    width={100}
                    height={100}
                    className="w-full h-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs p-1 rounded"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPropertyForm;
