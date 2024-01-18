/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import fruits from '@/mocks/fruits'
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";


const WordScrambleGame: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<string>('');
  const [scrambledWord, setScrambledWord] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null >(null);
  const [score, setScore] = useState<number>(0);

  const getRandomFruit = () => {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
  };

  const scrambleWord = (word: string) : string => {
    const shuffled = word.split('').sort(() => 0.5 - Math.random()).join('');
    return shuffled === word ? scrambleWord(word) : shuffled;
  };

  const startNewRound = () => {
    const newWord = getRandomFruit();
    setCurrentWord(newWord);
    setScrambledWord(scrambleWord(newWord));
    setInputValue('');
    setIsCorrect(null);
    console.log("input value:", inputValue)
  };

  useEffect(() => {
    if (isCorrect !== null) {
      const timeoutId = setTimeout(() => {
        setIsCorrect(null);
        setInputValue('');
    }, 2000); 
    return () => clearTimeout(timeoutId);
}
startNewRound();
  }, [isCorrect, score]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckAnswer = () => {
    const isAnswerCorrect = inputValue.toLowerCase() === currentWord.toLowerCase();
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <Container mt="20">
      <Heading textAlign="center">Word Scrumble</Heading>
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="bold" mb="4">
          Can you unscramble the fruit?
        </Text>
        <Text fontSize="lg" fontWeight="bold" mb="4">
          {scrambledWord}
        </Text>
        <Input placeholder="Type your answer" mb="4" onChange={handleInputChange} />
        <Button colorScheme="teal" mb="2" onClick={handleCheckAnswer}>
          Check Answer
        </Button>

        {isCorrect !== null && (
          <Text mt="4" color={isCorrect ? 'green.500' : 'red.500'} fontWeight="bold">
            {isCorrect ? 'Correct!' : 'Incorrect! Try Again'}
          </Text>
        )}

        <VStack>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Score: {score}
          </Text>
          <Button colorScheme="teal" onClick={startNewRound}>New Round</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default WordScrambleGame;
