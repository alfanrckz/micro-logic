import React, { useState } from "react";
import Navbar from "@/components/Nav";
import {
  ChakraProvider,
  CSSReset,
  Container,
  Box,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
  Button,
  Flex,
  Center,
  Square,
} from "@chakra-ui/react";

const TicTacToe: React.FC = () => {
  const initialBoard = Array(9).fill("");
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner === "X") {
      setScoreX(scoreX + 1);
    } else if (winner === "O") {
      setScoreO(scoreO + 1);
    }
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  const renderSquare = (index: number) => (
    <Button
    
      size="lg"
      fontSize="lg"
      fontWeight="bold"
      colorScheme="outline"
      variant="outline"
      minH="70px"
      minW="70px"
      _hover={{bg: "gray.600"}}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  );

  const winner = calculateWinner(board)
  const status = winner ? `Winnner: ${winner}` : board.every((square) => square !== '') ? 'Draw' : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <>
      <Navbar />
      <CSSReset />

      <Box textAlign="center" mt="8">
        <Heading as="h1" size="xl" mb="4">
          Tic Tac Toe
        </Heading>
        <Heading as="h2" size="md" mb="10">
          {status}
        </Heading>

        <Container w="10" mb="10">
          <Grid
            justifyContent="center"
            templateColumns="repeat(3, 1fr)"
            gap={2}
          >
            {Array.from({ length: 9 }, (_, index) => (
              <GridItem key={index}>{renderSquare(index)}</GridItem>
            ))}
          </Grid>
        </Container>
        <Box>
          <Heading as="h3" size="md" mb="2">
            Scores
          </Heading>
          <Box>
            Player X: {scoreX}
            <br />
            Player O: {scoreO}
          </Box>

          <Box mt="4">
            <Flex gap="2" justifyContent="center">
              <Button colorScheme="teal" onClick={resetGame} mr="4">Reset</Button>
              <Button colorScheme="teal" onClick={resetGame} isDisabled={!winner && !board.includes('')}>Play Again</Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TicTacToe;
