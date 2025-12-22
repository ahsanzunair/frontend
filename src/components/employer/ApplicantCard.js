import "@/components/components.css"

export default function ApplicantCard({ id, name, email, phone, position, appliedDate, status, onView, onApprove, onReject }) {
  return (
    <div className="applicant-card">
      <div className="applicant-card-header">
        <div className="applicant-card-content">
          <h3>{name}</h3>
          <p>📧 {email}</p>
          <p>📱 {phone}</p>
          <p>💼 <strong>Applied for:</strong> {position}</p>
          <p style={{ fontSize: "12px", color: "#999" }}>📅 {appliedDate}</p>
        </div>
        <span className={`status-badge ${status}`}>
          {status}
        </span>
      </div>
      
      <div className="button-group">
        {onView && <button onClick={onView} className="btn-primary">View Resume</button>}
        {onApprove && <button onClick={onApprove} className="btn-success">Approve</button>}
        {onReject && <button onClick={onReject} className="btn-danger">Reject</button>}
      </div>
    </div>
  );
}
