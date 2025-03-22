import { MessageCircle, PhoneCall } from "lucide-react";
import { InquiryFormData } from "@/types/datatypes";

interface ContactsProps {
  formData: InquiryFormData;
  onClose: () => void;
  type: "sell" | "appraisal";
}

export default function Contacts({ formData, onClose, type }: ContactsProps) {
  const message = encodeURIComponent(
    `Hello! I want to ${type === "sell" ? "sell" : "appraise"} my property.\n\nName: ${formData.name}\nContact: ${formData.contact}\nSize: ${formData.size}\nLocation: ${formData.location}\nDescription: ${formData.description}`,
  );

  const sendMessage = (url: string) => {
    window.open(`${url}?text=${message}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white">
        <h3 className="text-lg font-bold mb-2">Choose a Contact Method</h3>
        <div className="flex gap-4">
          <button
            onClick={() => sendMessage("https://m.me/61574074901545")}
            className="bg-blue-600 p-2 rounded flex items-center gap-2"
          >
            <MessageCircle /> Messenger
          </button>

          <button
            onClick={() => sendMessage("https://wa.me/1234567890")}
            className="bg-green-500 p-2 rounded flex items-center gap-2"
          >
            <PhoneCall /> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
