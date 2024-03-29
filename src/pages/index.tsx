import Head from 'next/head'
import { Container, useColorMode, Button, Heading, Flex, Center,  } from '@chakra-ui/react'
import Grid from '../components/Grid'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'




export default function Home() {
 
  return (
    <>
      <Head>
        <title>Micro Logic</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Container maxW='container.sm'>
          <Flex justifyContent={"center"}>
            <Center >

          <Heading marginTop={"10px"} >Micro Apps</Heading>
          </Center>
          </Flex>
          <Grid/>
          <Footer/>
        </Container>
      </main>
    </>
  )
}

