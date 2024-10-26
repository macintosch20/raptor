import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileCreation({ freelancerData, setFreelancerData }) {
  const [username, setUsername] = useState(freelancerData.username || '');
  const [selectedRole, setSelectedRole] = useState(freelancerData.selectedRole || null);
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleGoNext = () => {
    setFreelancerData((prevData) => ({
      ...prevData,
      username,
      selectedRole,
    }));
    navigate(selectedRole === 'Freelancer' ? '/add-details-freelancer' : '/add-details-client');
  };

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.init();
      const tgUsername = window.Telegram.WebApp.initDataUnsafe?.user?.username;
      if (tgUsername) setUsername(`@${tgUsername}`);
    }
  }, []);

  return (
    <div className="profile-creation">
      <h2>Create Your Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="First and Lastname"
        />
      </div>
      <div>
        <label>Role:</label><br />
        <button
          className={`Button ${selectedRole === 'Freelancer' ? 'Selected' : ''}`}
          onClick={() => handleSelectRole('Freelancer')}
        >
          Freelancer
        </button>
        <button
          className={`Button ${selectedRole === 'Client' ? 'Selected' : ''}`}
          onClick={() => handleSelectRole('Client')}
        >
          Client
        </button>
      </div>
      {selectedRole && (
        <button onClick={handleGoNext} className="Button GoNext">
          Go Next
        </button>
      )}
    </div>
  );
}

export default ProfileCreation;
