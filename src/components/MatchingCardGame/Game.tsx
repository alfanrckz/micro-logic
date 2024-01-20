// src/components/Game.tsx
import React, { useState } from 'react';
import { Button, Center, Text } from '@chakra-ui/react';
import GameBoard from './GameBoard';

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const emojis = ['🐶', '🐱', '🐭', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁'];

const generateEmojis = () => {
  const pairedEmojis = [...emojis, ...emojis];
  return shuffleArray(pairedEmojis);
};

const Game: React.FC = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [shuffledEmojis, setShuffledEmojis] = useState<string[]>(generateEmojis());
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);

  const handleGameComplete = () => {
    setIsGameOver(true);
  };

  const handlePlayAgain = () => {
    setIsGameOver(false);
    setShuffledEmojis(generateEmojis());
    setMatchedPairs([]);
  };

  return (
    <Center h="100vh" flexDirection="column">
      {isGameOver ? (
        <>
          <Text fontSize="2xl" mb={4}>
            Congratulations! Youve matched all the pairs.
          </Text>
          <Button colorScheme="teal" onClick={handlePlayAgain}>
            Play Again
          </Button>
        </>
      ) : (
        <GameBoard emojis={shuffledEmojis} onGameComplete={handleGameComplete} />
      )}
    </Center>
  );
};

export default Game;
