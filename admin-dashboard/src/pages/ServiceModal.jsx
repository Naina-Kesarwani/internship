import "./ServiceModal.css";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="service-overlay-box">
      <div className="service-detail-card">

        <h2 className="service-detail-title">
          {service.title}
        </h2>

        <p className="service-detail-desc">
          {service.description}
        </p>

        <div className="service-detail-status">
          Status: <span>{service.status}</span>
        </div>

        <button
          className="service-detail-close"
          onClick={onClose}
        >
          Close
        </button>

      </div>
    </div>
  );
}