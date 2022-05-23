import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import Login from './Login';
import SignUp from './SignUp';

type AuthInputsProps = {

};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState)/*value, no setter need*/

  return <Flex>
    {modalState.view === 'login' && <Login />}
    {modalState.view === 'signup' && <SignUp />}
  </Flex>
}
export default AuthInputs;