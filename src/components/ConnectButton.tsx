// ConnectButton.tsx
import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";

export default function ConnectButton() {
  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box>
      <Text color="white" fontSize="md">
        // etherBalance will be an object, so we stringify it 
        {etherBalance && JSON.stringify(etherBalance)} ETH
      </Text>
    </Box>
  ) : (
    <Box>
      <Text color="white" fontSize="md">
        Welcome to Metacasso
      </Text>
      <Button onClick={handleConnectWallet}>
        Connect to a wallet
      </Button>
    </Box>
  );
}