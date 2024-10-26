import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './App.css';
import './styles.css';

import ProfileCreation from './components/ProfileCreation';
import AddDetailsClient from './components/AddDetailsClient';
import AddDetailsFreelancer from './components/AddDetailsFreelancer';
import FreelancerDetailsForm from './components/FreelancerDetailsForm';
import ConfirmFreelancerDetails from './components/ConfirmFreelancerDetails';
import LandingPage from './components/LandingPage';
import ConfirmClientDetails from './components/ConfirmClientDetails';

function App() {
  const [clientData, setClientData] = useState({
    shortDescription: '',
    longDescription: '',
  });
  const [freelancerData, setFreelancerData] = useState({
    username: '',
    selectedRole: '',
    specialties: '',
    shortDescription: '',
    longDescription: '',
    links: [],
  });

  return (
    <TonConnectUIProvider manifestUrl="https://macintosch20.github.io/raptor/tonconnect-mainfest.json">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile-creation" element={<ProfileCreation freelancerData={freelancerData} setFreelancerData={setFreelancerData} />} />
          <Route path="/add-details-client" element={<AddDetailsClient clientData={clientData} setClientData={setClientData} />} />
          <Route path="/add-details-freelancer" element={<AddDetailsFreelancer freelancerData={freelancerData} setFreelancerData={setFreelancerData} />} />
          <Route path="/freelancer-details-form" element={<FreelancerDetailsForm freelancerData={freelancerData} setFreelancerData={setFreelancerData} />} />
          <Route path="/confirm-freelancer-details" element={<ConfirmFreelancerDetails freelancerData={freelancerData} />} />
          <Route path="/add-details-client" element={<AddDetailsClient freelancerData={freelancerData} setFreelancerData={setFreelancerData} />} />
          <Route path="/confirm-client-details" element={<ConfirmClientDetails clientData={clientData} />} />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  );
}

export default App;
