import "./InquiryModal.css";

export default function InquiryModal({ inquiry, onClose }) {
  if (!inquiry) return null;

  return (
    <div className="inquiry-modal-overlay">
      <div className="inquiry-modal-card">

        <h2>Inquiry Details</h2>

        <p><strong>Name:</strong> {inquiry.name}</p>
        <p><strong>Email:</strong> {inquiry.email}</p>
        <p><strong>Phone:</strong> {inquiry.phone}</p>
        <p><strong>Company:</strong> {inquiry.company || "-"}</p>
        <p><strong>Budget:</strong> {inquiry.budget}</p>
        <p>
          <strong>Services:</strong>{" "}
          {inquiry.services?.join(", ")}
        </p>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}