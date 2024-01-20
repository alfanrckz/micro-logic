// src/components/GameBoard.tsx
import React, { useState, useEffect } from 'react';
import { Grid, useBreakpointValue, Box, Text, Button, Heading, Container } from '@chakra-ui/react';
import Card from './Card';

interface GameBoardProps {
  emojis: string[];
  onGameComplete: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ emojis, onGameComplete }) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 5 });

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = emojis[firstIndex];
      const secondCard = emojis[secondIndex];

      if (firstCard === secondCard) {
        setMatchedPairs((prev) => [...prev, firstIndex, secondIndex]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, emojis]);

  useEffect(() => {
    if (matchedPairs.length === emojis.length) {
      setIsGameOver(true);
    }
  }, [matchedPairs, emojis.length]);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || isGameOver) {
      return;
    }

    setFlippedCards((prev) => [...prev, index]);
  };

  const handlePlayAgain = () => {
    setIsGameOver(false);
    setFlippedCards([]);
    onGameComplete();
  };

  return (
    <>
    <Box mt="-200px" alignItems="center">
    <Heading textAlign="center" mb="50px">Matching Card</Heading>
   
      <Grid templateColumns={`repeat(${columns}, 1fr)`} autoRows="1fr" gap={2}>
        {emojis.map((emoji, index) => (
          <Card
          key={index}
          emoji={emoji}
          isFlipped={flippedCards.includes(index) || matchedPairs.includes(index)}
          onCardClick={() => handleCardClick(index)}
          />
          ))}
      </Grid>
      {isGameOver && (
        <Box textAlign="center" mt={4}>
          <Text fontSize="2xl" mb={4}>
            Congratulations! Youve matched all the pairs.
          </Text>
          <Button colorScheme="teal" onClick={handlePlayAgain}>
            Play Again
          </Button>
        </Box>
      )}
    </Box>
      </>
  );
};

export default GameBoard;
