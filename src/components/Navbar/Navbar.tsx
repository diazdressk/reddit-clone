import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
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
      <SearchInput />
      <RightContent />
      {/* <Directory /> */}
    </Flex>
  );
};
export default Navbar;
