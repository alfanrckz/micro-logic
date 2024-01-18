import React from "react";
import { SimpleGrid, Box, Container, Button, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

const Grid = () => {
  return (
    <Container maxW="container.sm" marginTop="40px" justifyContent="center">
      <SimpleGrid minChildWidth="140px" spacing="20px" >
        <Box
          bg="blue.700"
          height="180px"
          bgImage="url('/ml.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          objectFit="cover"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="blue.900"
          _hover={{transform: "scale(1.55)", transition:".6s", borderColor:"blue.400", borderWidth: "2px", borderStyle: "solid"}}
        >
          
          <Link href="/mobilelegend">
            <Button
              bg="blue.900"
              ml="4px"
              mt="90px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
            
          </Link>
          <Text ml="1" fontSize="sm">Search for heroes in Mobile Legends</Text>
        </Box>
        <Box
          bg="blue.700"
          height="180px"
          bgImage="url('/1.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="blue.900"
          
          _hover={{transform: "scale(1.55)", transition:".6s", borderColor:"blue.400", borderWidth: "2px", borderStyle: "solid"}}
        >
           
          <Link href="/tictactoe">
            <Button
              bg="blue.900"
            
              ml="4px"
              mt="90px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Tic Tac Toe</Text>
        </Box>
        <Box
          bg="blue.700"
          height="160px"
          bgImage="url('/1.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          _hover={{transform: "scale(1.55)", transition:".6s", borderColor:"white"}}
        >
           
          <Link href="/tictactoe">
            <Button
              bg="blue.900"
            
              ml="4px"
              mt="90px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Tic Tac Toe</Text>
        </Box>
        <Box
          bg="blue.700"
          height="160px"
          bgImage="url('/1.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          _hover={{transform: "scale(1.55)", transition:".6s", borderColor:"white"}}
        >
           
          <Link href="/tictactoe">
            <Button
              bg="blue.900"
            
              ml="4px"
              mt="90px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Tic Tac Toe</Text>
        </Box>
        <Box
          bg="blue.700"
          height="160px"
          bgImage="url('/1.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          _hover={{transform: "scale(1.55)", transition:".6s", borderColor:"white"}}
        >
           
          <Link href="/tictactoe">
            <Button
              bg="blue.900"
            
              ml="4px"
              mt="90px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Tic Tac Toe</Text>
        </Box>
        <Box
          bg="blue.700"
          height="160px"
          bgImage="url('/1.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          _hover={{transform: "scale(1.55)", transition:".6s", borderColor:"white"}}
        >
           
          <Link href="/tictactoe">
            <Button
              bg="blue.900"
            
              ml="4px"
              mt="90px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Tic Tac Toe</Text>
        </Box>
        <Box
          bg="blue.700"
          height="160px"
          bgImage="url('/1.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          _hover={{transform: "scale(1.55)", transition:".6s", borderColor:"white"}}
        >
           
          <Link href="/tictactoe">
            <Button
              bg="blue.900"
            
              ml="4px"
              mt="90px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Tic Tac Toe</Text>
        </Box>

     
      </SimpleGrid>
    </Container>
  );
};

export default Grid;
