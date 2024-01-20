import { Box, Container, Flex, Image, Text, Divider } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Container mt="150px">

    <Box className="h-7 mb-0">
      <footer className="mt-28">
        <Flex color="white" mb={0}>
          
        </Flex>
        <Divider />
        <Text color="white" textAlign="center" mt={3} mb={5}>
          ©Copyright. All rights reserved | Alfansyuri Ziaulhaq 2024
        </Text>
      </footer>
    </Box>
    </Container>
  );
};

export default Footer;
