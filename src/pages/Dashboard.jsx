import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple.500",
    color: "white",
    fontWeight: "bold",
    m: "10px",
    textAlign: "center",
    ':hover':{
      color: "purple.500",
      bg: "white"
    }
  };

  return (
    <Container as="Section" maxW="4xl" py="20px">
      <Heading my="30px" p="10px">
        Chakra ui components 
      </Heading>
      <Text ml="30px">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum vitae
        dolorem, officia temporibus explicabo eos officiis culpa aliquid sequi
        quam, id voluptate rerum, labore beatae ab dolorum eveniet? Iusto,
        blanditiis!
      </Text>
      <Text my="50" color="blue.500" fontWeight="bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum vitae
        dolorem, officia temporibus explicabo eos officiis culpa aliquid sequi
        quam, id voluptate rerum, labore beatae ab dolorum eveniet? Iusto,
        blanditiis!
      </Text>

      <Box mb="30" p="20px" bg="orange.400" color="white">
        <Text>This is a Box</Text>
      </Box>

      <Box sx={boxStyles}>Hello, Ninjas</Box>
    </Container>
  );
}
