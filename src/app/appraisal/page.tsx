"use client";
import { useState } from "react";
import Header from "@/components/frontend/Header";
import InquireForms from "@/components/frontend/InquireForms";
import { InquiryFormData } from "@/types/datatypes";
import Contacts from "@/components/frontend/ContactsButton";

const AppraisalPage = () => {
  const [formData, setFormData] = useState<InquiryFormData | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showContactsModal, setShowContactsModal] = useState(false);

  const handleFormSubmit = (data: InquiryFormData) => {
    setFormData(data);
    setShowConfirmModal(true);
  };

  return (
    <div
      className="flex flex-col w-full min-h-screen bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('/appraise.jpg')" }}
    >
      <Header />
      <div className="flex flex-col justify-center items-center flex-1 px-4">
        <div className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-12 lg:p-16 text-center rounded-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Let&apos;s appraise your property!
          </h1>
          <InquireForms onSubmit={handleFormSubmit} />
        </div>
      </div>

      {showConfirmModal && formData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Confirm Your Information</h2>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Contact:</strong> {formData.contact}
            </p>
            <p>
              <strong>Size:</strong> {formData.size}
            </p>
            <p>
              <strong>Location:</strong> {formData.location}
            </p>
            <p>
              <strong>Description:</strong> {formData.description}
            </p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  setShowContactsModal(true);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {showContactsModal && formData && (
        <Contacts
          formData={formData}
          onClose={() => setShowContactsModal(false)}
          type="appraisal"
        />
      )}
    </div>
  );
};

export default AppraisalPage;
