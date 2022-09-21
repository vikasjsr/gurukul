import { Button, Container, Heading, HStack, Input, Stack, Text, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({ views, title, imageSrc, id, addtoPlayListhandler, creater, description, lecture }) =>{

    return(
        <VStack className='course' alignItems={['center', 'flex-start']}>

            <Image  src={imageSrc} boxSize="60" objectFit={'contain'} />

            <Heading 
            textAlign={['center', 'left']}
            maxW="200px"
            size={'sm'}
            fontFamily={'sans-serif'}
            noOfLines={3}
            children={title}/>

                <Text noOfLines={2} children={description} />

                <HStack>
                    <Text
                        fontWeight={'bold'}
                        textTransform="uppercase"
                        children={'Creator'}
                    />

                    <Text
                        fontFamily={'body'}
                        textTransform="uppercase"
                        children={'creator'}
                    />
                </HStack>

                <Heading
                    textAlign={'center'}
                    size="xs"
                    children={`Lectures `}
                    textTransform="uppercase"
                />

                <Heading
                    size="xs"
                    children={`Views`}
                    textTransform="uppercase"
                />

                <Stack direction={['column', 'row']} alignItems="center">
                        <Link to={`/course/${id}`}>
                        <Button colorScheme={'yellow'}>Watch Now</Button>
                        </Link>
                        <Button
                        // isLoading={loading}
                        variant={'ghost'}
                        colorScheme={'yellow'}
                        // onClick={() => addToPlaylistHandler(id)}
                        >
                        Add to playlist
                        </Button>
                </Stack>

        </VStack>


    )
}


const Courses = () => {

    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const categories = [

        'Web Development',
        'App Development', 
        'Data Structure and Algorithm',
        'Data Science',
        'Game Development'

    ]

  return (
        <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading 
                textAlign={'center'} 
                color = {'yellow'}
                children ='Courses'
                 m = {'8'} />

            <Input 
                color={'yellow.500'}
                value={keyword}
                placeholder='Search a Course'
                onChange={e => setKeyword(e.target.value)}
                focusBorderColor={'yellow.500'}
                 />   

            <HStack overflow={'auto'} paddingY='8'
            // to hide the scrollbar 
            css={{'&::-webkit-scrollbar':{
                display:'none'
            }
        }}>
                {
                    categories.map((item, index)=>(
                        <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                            <Text children = {item}/>
                        </Button>
                    ))
                }    
            </HStack>   

            <Stack
                direction={['column', 'row']}
                flexWrap='wrap'
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}
            >
                <Course 
                
                    views = {'acd'}
                    title = {'acd'}
                    imageSrc = {'acd'}
                    id = {'acd'}
                    addtoPlayListhandler = {'acd'}
                    creater = {'acd'}
                    description = {'acd'}
                    lecture = {'acd'}

                />

            </Stack>   
            
        </Container>
  )
}

export default Courses
