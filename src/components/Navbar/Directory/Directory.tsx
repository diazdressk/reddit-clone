import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Icon,
  MenuDivider,
  Text,
} from '@chakra-ui/react';
import { TiHome } from 'react-icons/ti';
import Communities from './Communities';

const UserMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}>
        <Flex align="center" justify="space-between" width={{ base: 'auto', lg: '200px' }}>
          <Flex align="center">
            <Icon as={TiHome} fontSize={24} mr={{ base: 1, md: 2 }} />
            <Flex display={{ base: 'none', lg: 'flex' }}>
              <Text fontSize="10pt" fontWeight="600">
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
