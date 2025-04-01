//presents the information of property in card

import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";

interface PropertyCardProps {
  property: {
    id: number;
    image: string;
    price: string;
    type: string;
    category: string;
    location: string;
    dateListed: string;
    area: string;
    bedrooms: number;
    bathrooms: number;
    status: string;
    listingType: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="flex border rounded shadow p-4 bg-white">
      <Image
        src={property.image}
        alt="Property Picture"
        width={280}
        height={160}
        className="bg-gray-300 object-cover rounded"
      />
      <div className="ml-6 flex-1">
        <h2 className="text-xl font-semibold">{property.type}</h2>
        <p className="text-gray-600">{property.category} - Category</p>
        <p className="text-gray-600">{property.location} - Address</p>
        <p className="text-gray-600">{property.dateListed} - Date Listed</p>
        <p className="text-lg font-bold mt-2">{property.price}</p>
        <div className="flex items-center text-gray-500 mt-2">
          <IoLocationOutline className="mr-1" /> {property.area}
          <FaBed className="ml-4 mr-1" /> {property.bedrooms}
          <FaBath className="ml-4 mr-1" /> {property.bathrooms}
        </div>
        <p className="mt-2 text-sm font-semibold">
          Status: <span className="text-blue-600">{property.status}</span>
        </p>
        <p className="mt-1 text-sm">
          Listing Type:{" "}
          <span className="text-green-600">{property.listingType}</span>
        </p>
        <button className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
