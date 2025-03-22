import { useState } from "react";
import { InquiryFormData } from "@/types/datatypes";
interface InquireFormsProps {
  onSubmit: (data: InquiryFormData) => void;
}

const InquireForms: React.FC<InquireFormsProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    contact: "",
    size: "",
    location: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex flex-col w-full">
          <label className="text-white text-left text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white w-full"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-white text-left text-sm mb-1">
            Contact Information
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white w-full"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full mt-4">
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="text-white text-left text-sm mb-1">
            Property Size
          </label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white w-full"
          />
          <label className="text-white text-left text-sm mb-1 mt-4">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white w-full"
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="text-white text-left text-sm mb-1">
            Property Description
          </label>
          <textarea
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white w-full resize-none"
          />
        </div>
      </div>

      <div className="items-center justify-center mt-4">
        <button
          type="submit"
          className="w-1/4 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default InquireForms;
