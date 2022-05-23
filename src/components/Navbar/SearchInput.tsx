import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1}/*????, take all remaining width of parents container */ mr={2} align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none"/*???*/ children={<SearchIcon color="gray.400" mb={1} />} />
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder /*_ styles for placeholder*/={{ color: 'gray.500' }}
          /*_ styles on hover*/ _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
          _focus={{
            outline: 'none',
            border: "1px solid",
            borderColor: "blue.500"
          }}
          height='34px'
          bg='gray.50'
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
