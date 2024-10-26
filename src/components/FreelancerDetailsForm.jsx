import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FreelancerDetailsForm({ freelancerData, setFreelancerData }) {
  const [shortDescription, setShortDescription] = useState(freelancerData.shortDescription || '');
  const [longDescription, setLongDescription] = useState(freelancerData.longDescription || '');
  const [links, setLinks] = useState(freelancerData.links.length ? freelancerData.links : ['']);
  const navigate = useNavigate();

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  const addLinkField = () => {
    if (links.length < 3) setLinks([...links, '']);
  };

  const removeLinkField = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    setFreelancerData((prevData) => ({
      ...prevData,
      shortDescription,
      longDescription,
      links: links.filter((link) => link),
    }));
    navigate('/confirm-freelancer-details');
  };

  return (
    <div className="freelancer-details-form">
      <h2>Freelancer Profile Details</h2>
      <div>
        <label>Short Description:</label>
        <input
          type="text"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Brief overview of who you are"
        />
      </div>
      <div>
        <label>Long Description:</label>
        <textarea
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          placeholder="Detailed experience and skills"
          rows="4"
        />
      </div>
      <div>
        <label>Links (3 max):</label>
        {links.map((link, index) => (
          <div key={index} className="link-input">
            <input
              type="text"
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
              placeholder="Enter a link"
            />
            {links.length < 3 && (
              <button onClick={addLinkField} type="button">+</button>
            )}
            {index > 0 && (
              <button onClick={() => removeLinkField(index)} type="button">-</button>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleSave} className="Button GoNext">
        Save and Continue
      </button>
    </div>
  );
}

export default FreelancerDetailsForm;
