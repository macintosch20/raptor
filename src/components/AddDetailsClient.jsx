import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddDetailsClient({ clientData = {}, setClientData }) {
  const [shortDescription, setShortDescription] = useState(clientData.shortDescription || '');
  const [longDescription, setLongDescription] = useState(clientData.longDescription || '');
  const navigate = useNavigate();

  const handleSave = () => {
    setClientData((prevData) => ({
      ...prevData,
      shortDescription,
      longDescription,
    }));
    navigate('/confirm-client-details'); // Redirect to confirmation page
  };

  return (
    <div className="client-details-form">
      <h2>Client Details</h2>
      
      <div>
        <label>Short Description:</label>
        <input
          type="text"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Brief overview of who you are"
          className="input-field short-description"
        />
      </div>
      
      <div>
        <label>Long Description:</label>
        <textarea
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          placeholder="What you are looking for and your requirements"
          rows="4"
          className="input-field long-description"
        />
      </div>
      
      <button onClick={handleSave} className="Button GoNext">
        Go Next
      </button>
    </div>
  );
}

export default AddDetailsClient;
