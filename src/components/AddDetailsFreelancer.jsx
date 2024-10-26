import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddDetailsFreelancer({ freelancerData, setFreelancerData }) {
  const roles = ["UI/UX Designer", "Web Programmer", "Graphic Designer", "Mobile Developer", "Project Manager"];
  const [selectedRoles, setSelectedRoles] = useState(freelancerData.specialties ? freelancerData.specialties.split(', ') : []);
  const navigate = useNavigate();

  const toggleRoleSelection = (role) => {
    setSelectedRoles((prevRoles) =>
      prevRoles.includes(role) ? prevRoles.filter((r) => r !== role) : [...prevRoles, role]
    );
  };

  const handleSave = () => {
    setFreelancerData((prevData) => ({
      ...prevData,
      specialties: selectedRoles.join(', '),
    }));
    navigate('/freelancer-details-form');
  };

  return (
    <div className="freelancer-details">
      <div className="profile-creation">
        <h2>Freelancer Details</h2>
        <p>Select your specialties:</p>
        <div className="role-options">
          {roles.map((role) => (
            <button
              key={role}
              className={`Button ${selectedRoles.includes(role) ? 'Selected' : ''}`}
              onClick={() => toggleRoleSelection(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleSave} className="Button GoNext">
        Save and Continue
      </button>
    </div>
  );
}

export default AddDetailsFreelancer;
