import { Button,
         Drawer,
          DrawerBody,
           DrawerContent,
            DrawerHeader,
             DrawerOverlay,
              HStack,
              useDisclosure, 
              VStack} from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'



const LinkButton = ( { onClose, url, title,  } ) =>(
            <Link onClick={onClose} to = {url}>
                <Button variant={'ghost'}>{title}</Button>
            </Link>
)
 
const Header = () => {
  
    const {isOpen, onOpen, onClose} = useDisclosure();
    
    const isAuthenticated = true;
    const user = {
        role: "admin"
    }

    const logoutHandler = () =>{
        console.log('Logout successfully');
        onClose();
    }
    return (

        <>
            <ColorModeSwitcher />
            <Button
                onClick={onOpen}
                colorScheme={'yellow'}
                zIndex={'overlay'}
                height='12'
                width='12'
                rounded={'full'}
                position='fixed'
                top ='6'
                left='6'
                >
                <RiMenu5Fill/>
            </Button>

            <Drawer isOpen={isOpen} placement='left'>
                <DrawerOverlay backdropFilter={'blur(5px)'}/>
                <DrawerContent>
                    <DrawerHeader 
                        textAlign={'center'}
                        borderBottomWidth ={'2px'}
                    >Courses</DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={'4'} alignItems={'fllex-start'}>
                            <LinkButton onClose={onClose} url="/" title="Home"  />
                            <LinkButton url="/browseAllCourses" title="Browse All Course" onClose={onClose} />
                            <LinkButton url="/requestACourse" title="Request A Course" onClose={onClose} />
                            <LinkButton url="/contactUs" title="Contact US" onClose={onClose} />
                            <LinkButton url="/about" title="About" onClose={onClose} />

                            <HStack
                                justifyContent={'space-evenly'}
                                bottom='2rem'
                                position={'absolute'}
                                width='80%'
                                >

                            {isAuthenticated?(<>
                            <VStack>
                                <HStack>
                                    <Link onClick={onClose} to="profile">
                                        <Button colorScheme={'yellow'} variant={'ghost'}>
                                            Profile
                                        </Button>
                                    </Link>
                                    <Button variant={'ghost'} onClick={logoutHandler}>
                                        <RiLogoutBoxLine />
                                        Logout
                                    </Button>
                                </HStack>


                                {
                                    user && user.role === 'admin' &&(
                                        <Link onClick={onClose} to='/admin/dashboard'>
                                            <Button colorScheme={'purple'} varient = {'ghost'}>
                                                <RiDashboardFill style={{margin:'4px'}}/>
                                                 Dashboard
                                            </Button>
                                        </Link>

                                    )}

                            </VStack>
                            
                            </>):
                                (<>
                                    <Link onClick={onClose} to= '/login'>
                                        <Button colorScheme={'yellow'}>Login</Button>
                                    </Link>
                                    <p>OR</p>
                                    <Link onClick={onClose} to= '/register'>
                                        <Button colorScheme={'yellow'}>Sign-Up</Button>
                                    </Link>
                                </>)}

                            </HStack>

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
  )
}

export default Header
