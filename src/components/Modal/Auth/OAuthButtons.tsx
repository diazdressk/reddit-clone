import React, { useEffect } from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../../firebase/clientApp';
import { User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const OAuthButtons: React.FC = () => {
  const [signWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth);
  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, 'users', user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

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
