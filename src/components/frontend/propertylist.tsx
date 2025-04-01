//presents the list of properties

"use client";
import React, { useState } from "react";
import Header from "@/components/frontend/Header";
import SearchFilter from "@/components/frontend/search_filter";
import PropertyCard from "@/components/frontend/propertycard";
import properties from "@/components/frontend/propertiesdata";

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
        <SearchFilter
          search={search}
          setSearch={setSearch}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          listingTypeFilter={listingTypeFilter}
          setListingTypeFilter={setListingTypeFilter}
        />
        <div className="max-h-[700px] overflow-y-auto border rounded-md bg-gray-200 p-4 scrollbar-hide">
          <div className="flex flex-col gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
