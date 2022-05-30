import React from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';

const OAuthButtons: React.FC = () => {
  const [signWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={2}>
      <Button variant="oauth" isLoading={loading} onClick={() => signWithGoogle()}>
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      {/* <Button variant="oauth">Continue with xxx</Button> */}
      {error && (
        <Text textAlign="center" color="red" fontSize="10pt">
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
