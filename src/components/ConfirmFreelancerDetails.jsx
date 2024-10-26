import { useNavigate } from 'react-router-dom';

function ConfirmFreelancerDetails({ freelancerData }) {
  const navigate = useNavigate();

  return (
    <div className="confirm-details">
      <h2>Confirm Your Details</h2>
      <div>
        <p><strong>Name:</strong> {freelancerData.username} <span className="edit-link" onClick={() => navigate('/profile-creation')}>Edit</span></p>
        <p><strong>Role:</strong> {freelancerData.specialties} <span className="edit-link" onClick={() => navigate('/add-details-freelancer')}>Edit</span></p>
        <p><strong>Short Description:</strong> {freelancerData.shortDescription} <span className="edit-link" onClick={() => navigate('/freelancer-details-form')}>Edit</span></p>
        <p><strong>Long Description:</strong> {freelancerData.longDescription} <span className="edit-link" onClick={() => navigate('/freelancer-details-form')}>Edit</span></p>
        <p><strong>Links:</strong> {freelancerData.links.length > 0 ? freelancerData.links.join(', ') : 'No links provided'} <span className="edit-link" onClick={() => navigate('/freelancer-details-form')}>Edit</span></p>
      </div>
      <button onClick={() => alert('To be continued...')} className="Button GoNext">
        Confirm
      </button>
    </div>
  );
}

export default ConfirmFreelancerDetails;
