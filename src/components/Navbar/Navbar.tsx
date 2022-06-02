import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';
import Directory from './Directory/Directory'
const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)
  return (
    <Flex bg="white" height="44px" padding="6px 12px" justify={{ md: 'space-between' }}>
      <Flex align="center" width={{ base: "none", md: 'auto' }} mr={{ base: 0, md: 2 }}>
        <Image src="/images/redditFace.svg" height="30px" mr={[2, 0, 0, 0]} /*responsive margin ['sm', 'md', 'lg', 'xl']*/ />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{
            base: 'none' /*base-mobile version*/,
            sm: 'unset' /*when size sm- unset- opposite "display: none"*/,
          }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
