import { useTonConnectUI } from '@tonconnect/ui-react';

export function useTonConnect(): { connected: boolean } {
  const [tonConnectUI] = useTonConnectUI();
  console.log(tonConnectUI.connected)
  return {
    connected: tonConnectUI.connected, // Check if the wallet is connected
  };

}