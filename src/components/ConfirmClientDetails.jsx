import { useNavigate } from 'react-router-dom';

function ConfirmClientDetails({ clientData }) {
  const navigate = useNavigate();

  return (
    <div className="confirm-details">
      <h2>Confirm Client Details</h2>
      <div>
        <p><strong>Short Description:</strong> {clientData.shortDescription} <span className="edit-link" onClick={() => navigate('/add-details-client')}>Edit</span></p>
        <p><strong>Long Description:</strong> {clientData.longDescription} <span className="edit-link" onClick={() => navigate('/add-details-client')}>Edit</span></p>
      </div>
      <br />
      <p>Are you sure the information is correct?</p>
      <button onClick={() => alert('To be continued...')} className="Button GoNext">
        Confirm
      </button>
    </div>
  );
}

export default ConfirmClientDetails;
