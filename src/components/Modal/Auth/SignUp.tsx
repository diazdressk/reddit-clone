import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../firebase/errors';
import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signup, setSignup] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, userCred, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) setError('');
    if (signup.password !== signup.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    createUserWithEmailAndPassword(signup.email, signup.password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //when new user Created, inform about him add to "user" collection
  const createUserDocument = async (user: User) => {
    await addDoc(collection(firestore, 'users'), JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if (userCred) createUserDocument(userCred.user);
  }, [userCred]);

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        _focus={{ outline: 'none', bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        _focus={{ outline: 'none', bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        bg="gray.50"
      />
      <Input
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        onChange={onChange}
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        _focus={{ outline: 'none', bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        bg="gray.50"
      />
      <Text textAlign="center" color="red" fontSize="10pt">
        {error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        {/* AS KEYOF TYPEOF means One of ENUMS
              EXample:
              enum ColorsEnum {
                white = '#ffffff',
                black = '#000000',
              }
              type Colors = keyof typeof ColorsEnum; 
                equals
              type Colors = "white" | "black"
            */}
      </Text>
      <Button type="submit" width="100%" height="36px" mt={2} mb={2} isLoading={loading}>
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          cursor="pointer"
          fontWeight={700}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: 'login',
            }))
          }>
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
