"use client";
import React from "react";
import { useState } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Header from "@/components/frontend/Header";
import Image from "next/image";

const properties = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    price: "Php. 5,200,000",
    type: "HOUSE_LOT",
    category: "House and Lot",
    location: "M.V Hechanova Subd.",
    dateListed: "March 6, 2025",
    area: "100.00 sqm",
    bedrooms: 4,
    bathrooms: 4,
    status: "AVAILABLE",
    listingType: "DEVELOPER",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    price: "Php. 3,800,000",
    type: "BUNGALOW",
    category: "House and Lot",
    location: "Quezon City",
    dateListed: "March 10, 2025",
    area: "80.00 sqm",
    bedrooms: 3,
    bathrooms: 2,
    status: "PENDING",
    listingType: "PRIVATE",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    price: "Php. 2,500,000",
    type: "CONDO",
    category: "Condominium",
    location: "Makati",
    dateListed: "March 12, 2025",
    area: "50.00 sqm",
    bedrooms: 2,
    bathrooms: 1,
    status: "SOLD",
    listingType: "PRIVATE",
  },
];

export default function PropertyList() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [listingTypeFilter, setListingTypeFilter] = useState("ALL");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = `${property.category} ${property.location}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "ALL" || property.category === categoryFilter;

    const matchesListingType =
      listingTypeFilter === "ALL" || property.listingType === listingTypeFilter;

    return matchesSearch && matchesCategory && matchesListingType;
  });

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-fixed"
      style={{ backgroundImage: "url('/buy.jpg')" }}
    >
      <Header />
      <div className="relative p-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-gray-200 p-4 rounded mb-6 space-y-3 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search properties..."
            className="flex-1 p-2 border-none outline-none bg-white rounded-md w-full md:w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="p-2 border rounded w-full md:w-auto"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="ALL">All Categories</option>
            <option value="House and Lot">House and Lot</option>
            <option value="Condominium">Condominium</option>
          </select>
          <select
            className="p-2 border rounded w-full md:w-auto"
            value={listingTypeFilter}
            onChange={(e) => setListingTypeFilter(e.target.value)}
          >
            <option value="ALL">All Listings</option>
            <option value="DEVELOPER">Developer</option>
            <option value="PRIVATE">Private</option>
          </select>
          <button className="bg-gray-600 text-white px-4 py-2 rounded w-full md:w-auto">
            Search
          </button>
        </div>

        <div className="max-h-[700px] overflow-y-auto border rounded-md bg-gray-200 p-4 scrollbar-hide">
          <div className="flex flex-col gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="flex border rounded shadow p-4 bg-white"
              >
                <Image
                  src={property.image} //will error
                  alt="Property Picture"
                  width={280}
                  height={160}
                  className="bg-gray-300 object-cover rounded"
                />

                <div className="ml-6 flex-1">
                  <h2 className="text-xl font-semibold">{property.type}</h2>
                  <p className="text-gray-600">
                    {property.category} - Category
                  </p>
                  <p className="text-gray-600">{property.location} - Address</p>
                  <p className="text-gray-600">
                    {property.dateListed} - Date Listed
                  </p>
                  <p className="text-lg font-bold mt-2">{property.price}</p>
                  <div className="flex items-center text-gray-500 mt-2">
                    <IoLocationOutline className="mr-1" /> {property.area}
                    <FaBed className="ml-4 mr-1" /> {property.bedrooms}
                    <FaBath className="ml-4 mr-1" /> {property.bathrooms}
                  </div>
                  <p className="mt-2 text-sm font-semibold">
                    Status:{" "}
                    <span className="text-blue-600">{property.status}</span>
                  </p>
                  <p className="mt-1 text-sm">
                    Listing Type:{" "}
                    <span className="text-green-600">
                      {property.listingType}
                    </span>
                  </p>
                  <button className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
