import React from 'react';
import {
       Heading,
        Stack,
         VStack,
          Text,
           Button,
            Image,
             Box,
             HStack} from '@chakra-ui/react'
import './Home.css'
import {Link} from 'react-router-dom';
import bg from '../../assets/images/bg.png';
import {CgGoogle, CgYoutube} from 'react-icons/cg'
import {SiCoursera, SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di';
import introV from '../../assets/video/intro.mp4'


const Home = () => {
  return (
    <section>
      <div className="container">
        <Stack 
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems= "center"
          spacing={['16', '56']}
          >

        <VStack width={'full'} alignItems={['center', 'flex-end']}>
          <Heading children="Learn from Experts" size={'2xl'}/>
          <Text 
            textAlign={['center', 'left']}
            children="Find Valuable Content at Reasonable price" size={'1xl'}/>
          <Link to='/courses'>
            <Button size={'lg'} colorScheme="yellow">Enroll Now</Button>
          </Link>
        </VStack>     

        <Image className='vector-graphics' src={bg} boxSize={'md'} objectFit='contain'/>

        </Stack>
      </div>

      <Box padding={'8'} bg='blackAlpha.800'>
          <Heading
            textAlign={'center'} 
            color = {'yellow'}
            children ='Our Brands'
            fontFamily={'body'}
            />

          <HStack 
            className='brandsBanner' 
            justifyContent={'space-evenly'} 
            marginTop = '4'>

            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy />
            <DiAws />
          </HStack>
      </Box>

      <div className="contianer2">

        <video 
          controls
          controlsList='nodownload nofullscreen noremoteplayback'
          disablePictureInPicture
          disableRemotePlayback 
          src={introV}>

        </video>

      </div>

    </section>
  )
}

export default Home
