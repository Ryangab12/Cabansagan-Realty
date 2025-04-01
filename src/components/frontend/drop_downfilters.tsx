// uses dropdown options to filter

import React from "react";

interface DropdownFilterProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  value,
  options,
  onChange,
}) => {
  return (
    <select
      className="p-2 border rounded w-full md:w-auto"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownFilter;
