import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  Container,
  HStack,
  Input,
  CircularProgress,
} from '@chakra-ui/react';

function CountDuration() {
  const [targetDate, setTargetDate] = useState<string>('');
  const [endTime, setEndTime] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const startTimer = () => {
    if (targetDate) {
      setLoading(true);
      const targetTime = new Date(targetDate).getTime();
      const now = Date.now();
      setEndTime(targetTime);
      setDuration(targetTime - now);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setEndTime(null);
    setDuration(null);
    setLoading(false);
  };

  useEffect(() => {
    if (endTime !== null) {
      const timer = setInterval(() => {
        const now = Date.now();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
          setEndTime(null);
          setDuration(0);
          setLoading(false);
          clearInterval(timer);
        } else {
          setDuration(remainingTime);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [endTime]);

  const formatDuration = (milliseconds: number | null) => {
    if (milliseconds === null || milliseconds <= 0) return '00:00:00:00';

    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    const pad = (value: number) => (value < 10 ? `0${value}` : `${value}`);

    return `${pad(days)} hari ${pad(hours)} jam ${pad(minutes)} menit ${pad(seconds)} detik`;
  };

  return (
    
      <Container mt="80px" maxW="xl" centerContent>
        <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
          <Heading mb={4}>Countdown Timer</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Input
                type="datetime-local"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
              />
            </Box>
            <Box>
              <HStack justifyContent="center">
                <Text fontSize="xl">Countdown:</Text>
                <br />
                <Text>

                {loading ? (
                    <CircularProgress isIndeterminate size="24px" color="teal.500" />
                    ) : (
                        <Text fontSize="xl" fontWeight="bold">
                    {formatDuration(duration)}
                  </Text>
                )}
                </Text>
              </HStack>
            </Box>
            <HStack spacing={4}>
              <Button colorScheme="teal" onClick={startTimer} disabled={loading}>
                Start
              </Button>
              <Button colorScheme="red" onClick={stopTimer} disabled={!endTime}>
                Reset
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    
  );
}

export default CountDuration;
