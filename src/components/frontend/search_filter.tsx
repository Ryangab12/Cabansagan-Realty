//filters using Search

import React from "react";
import DropdownFilter from "./drop_downfilters";

interface SearchFilterProps {
  search: string;
  setSearch: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  listingTypeFilter: string;
  setListingTypeFilter: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  listingTypeFilter,
  setListingTypeFilter,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-200 p-4 rounded mb-6 space-y-3 md:space-y-0 md:space-x-4">
      <input
        type="text"
        placeholder="Search properties..."
        className="flex-1 p-2 border-none outline-none bg-white rounded-md w-full md:w-auto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DropdownFilter
        label="Category"
        value={categoryFilter}
        options={[
          { value: "ALL", label: "All Categories" },
          { value: "House and Lot", label: "House and Lot" },
          { value: "Condominium", label: "Condominium" },
        ]}
        onChange={setCategoryFilter}
      />
      <DropdownFilter
        label="Listing Type"
        value={listingTypeFilter}
        options={[
          { value: "ALL", label: "All Listings" },
          { value: "DEVELOPER", label: "Developer" },
          { value: "PRIVATE", label: "Private" },
        ]}
        onChange={setListingTypeFilter}
      />
      <button className="bg-gray-600 text-white px-4 py-2 rounded w-full md:w-auto">
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
