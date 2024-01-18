/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Input,
  Container,
  CardHeader,
  Card,
  CardBody,
  Stack,
  Box,
  StackDivider,
  Button,
  Flex,
  Image,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { log } from "console";
import Navbar from "@/components/Nav";

interface Hero {
  hero_id: number;
  hero_name: string;
  hero_avatar: string;
  hero_role: string;
  hero_specially: string;
}

function mobilelegend() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchHeroes, setSearchHeroes] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchHeroes = async () => {
      setIsLoading(true);
      try {
        setTimeout(async() => {

          const response = await axios.get(
            "https://api.dazelpro.com/mobile-legends/hero"
          );
          const data = response.data.hero;
          setHeroes(data);
          setFilteredHeroes(data);
          setIsLoading(false)
        },1500)
      } catch (err) {
        console.log(err);
      }
    };
    fetchHeroes();
  }, []);

  const handleSearch = () => {
    const filtered = heroes.filter(
      (hero) =>
        hero.hero_name.toLowerCase().includes(searchHeroes.toLowerCase()) ||
        hero.hero_role.toLowerCase().includes(searchHeroes.toLowerCase()) ||
        hero.hero_specially.toLowerCase().includes(searchHeroes.toLowerCase())
    );

    setFilteredHeroes(filtered);
  };

  const handleReset = () => {
    setSearchHeroes("");
    setFilteredHeroes(heroes);
  };

  return (
    <>
    <Navbar/>
    <Container mt="40px">
      
      <Heading textAlign="center" mb="10">List of heroes in Mobile Legends game</Heading>
      <Text>Find your hero in the Mobile Legends game</Text>
      <Input
        type="text"
        placeholder="Search Hero or Role..."
        mt="2"
        value={searchHeroes}
        onChange={(e) => setSearchHeroes(e.target.value)}
      />
      <Flex gap="4px" mt="10px">
        <Button onClick={handleSearch}>Search</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Flex>
      <br />
      {isLoading ? <Spinner/> : null}

      {filteredHeroes.length === 0 ? (
        <Text>Data not Found!!</Text>
      ) : (
        filteredHeroes.map((hero) => (
          
          <Card key={hero.hero_id} mt="40px">

            <CardHeader>
              <Heading size="md">{hero.hero_name}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Text fontSize="sm">Role: {hero.hero_role}</Text>
                </Box>
                <Box>
                  <Text fontSize="sm">Specially: {hero.hero_specially}</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))
      )}
    </Container>
  </>
  );

}

export default mobilelegend;
