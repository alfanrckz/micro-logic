import React from "react";
import {
  SimpleGrid,
  Box,
  Container,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

const Grid = () => {
  return (
    <Container maxW="container.sm" marginTop="40px" justifyContent="center">
      <SimpleGrid minChildWidth="140px" spacing="20px">
        <Box
          bg="blue.700"
          height="180px"
          bgImage="url('/ml2.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          objectFit="cover"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="blue.900"
          _hover={{
            transform: "scale(1.35)",
            transition: ".6s",
            borderColor: "blue.400",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <Link href="/mobilelegend">
            <Button
              bg="gray.500"
              ml="4px"
              mt="120px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1" fontSize="">
            Mobile Legends
          </Text>
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
          _hover={{
            transform: "scale(1.35)",
            transition: ".6s",
            borderColor: "blue.400",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <Link href="/tictactoe">
            <Button
             bg="gray.500"
              ml="4px"
              mt="120px"
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
          height="180px"
          bgImage="url('/word.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="blue.900"
          _hover={{
            transform: "scale(1.35)",
            transition: ".6s",
            borderColor: "blue.400",
          }}
        >
          <Link href="/word">
            <Button
             bg="gray.500"
              ml="4px"
              mt="120px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Word Scrumb</Text>
        </Box>
        <Box
          bg="blue.700"
          height="180px"
          bgImage="url('/matching.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="blue.900"
          _hover={{
            transform: "scale(1.35)",
            transition: ".6s",
            borderColor: "blue.400",
          }}
        >
          <Link href="/matchingcard">
            <Button
            bg="gray.500"
              ml="4px"
              mt="120px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Matching Card</Text>
        </Box>
        <Box
          bg="blue.700"
          height="180px"
          bgImage="url('/salary.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          _hover={{
            transform: "scale(1.35)",
            transition: ".6s",
            borderColor: "white",
          }}
        >
          <Link href="/salarycalculate">
            <Button
              bg="gray.500"
              ml="4px"
              mt="120px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Salary Calculating</Text>
        </Box>
        <Box
          bg="blue.700"
          height="180px"
          bgImage="url('/count.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="blue.900"
          _hover={{
            transform: "scale(1.35)",
            transition: ".6s",
            borderColor: "blue.400",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <Link href="/count">
            <Button
             bg="gray.500"
              ml="4px"
              mt="120px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Count Duration</Text>
        </Box>
        <Box
          bg="blue.700"
          height="180px"
          bgImage="url('currency.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          px="10px"
          cursor="pointer"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="blue.900"
          _hover={{
            transform: "scale(1.35)",
            transition: ".6s",
            borderColor: "blue.400",
          }}
        >
          <Link href="/currency">
            <Button
             bg="gray.500"
              ml="4px"
              mt="120px"
              h="25px"
              variant="outline"
              fontSize="small"
            >
              Launch
            </Button>
          </Link>
          <Text ml="1">Curency Convert</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Grid;
