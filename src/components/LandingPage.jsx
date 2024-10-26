import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';

function LandingPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [tonConnectUI] = useTonConnectUI();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setIsConnected(tonConnectUI.connected), 1000);
    return () => clearInterval(interval);
  }, [tonConnectUI]);

  return (
    <div className="App">
      <h1>Raptor - Frontend Example</h1>
      <p>Idea: A decentralized freelancing platform.</p>
      <center>
        <TonConnectButton />
        <br></br>
        <button
          onClick={() => navigate('/profile-creation')}
          className={`Button ${isConnected ? 'Active' : 'Disabled'}`}
          disabled={!isConnected}
        >
          Go to Profile Creation
        </button>
      </center>
    </div>
  );
}

export default LandingPage;
