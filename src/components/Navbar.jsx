import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
      <Heading as="h1">Dojo Task</Heading>

      <Spacer />

      <HStack spacing="10px">
        <Box bg="purple.400" p="10px" color="white">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
