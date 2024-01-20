// src/components/Card.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface CardProps {
  emoji: string;
  isFlipped: boolean;
  onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({ emoji, isFlipped, onCardClick }) => {
  return (
    <Box
    
      onClick={onCardClick}
      w="80px"
      h="80px"
      bgColor={isFlipped ? 'gray.200' : 'blue.500'}
      borderRadius="md"
      cursor="pointer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      
      
    >
      {isFlipped && <Text fontSize="lg">{emoji}</Text>}
    </Box>
  );
};

export default Card;
