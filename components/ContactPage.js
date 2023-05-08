import React,{useState} from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Box, Img, VStack ,HStack, Stack, Center, Button} from '@chakra-ui/react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineArrowRight} from "react-icons/ai"
import styles from '../styles/Home.module.css' 
import {BsTwitter, BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import Link from 'next/link'
import Typingtext from './Typingtext'

const ContactPage = () => {

    const [toggle, setToggle] = useState(false)
    const open = ()=>{
        setToggle(true)
    }
    const close = ()=>{
        setToggle(false)
    }
    const openMail = ()=>{
        window.location.href = 'mailto:stinachinma@gmail.com'
    }

  return (
    <>
       <Flex className={toggle ? styles.page1hide : styles.page1} justifyContent="space-between" h="100%">
        <Box p={["40px 10px 10px 10px","40px 20px 10px 20px","50px 30px 10px 30px"]} w="100%" >
           <Box onClick={open} fontSize="20px"><AiOutlineMenu/></Box>
              
              <Box >
                    <Text textAlign="center" fontSize={[20, 25, 30]} fontWeight="500" >Get in Touch</Text>
                    <Text data-aos="zoom-in" data-aos-duration="2000" textAlign="center" m="40px auto" maxW="700px" fontFamily="FreeMono, monospace" fontSize={[14]}>Hi, thank you for stopping by. Do you have any project in mind? Come let's make that a reality.
                       My inbox is always open for a quick chat, feel free to stop by.
                    </Text>
                    <a href="https://wa.me/+2348109549798"><HStack data-aos="flip-right" data-aos-duration="2000" mt="60px" mb="40px" justify="center"><BsWhatsapp fontSize={25} color="#10c6bb"/><Text  fontFamily="FreeMono, monospace">08109549798</Text></HStack></a>
                    <HStack data-aos="flip-left" data-aos-duration="2000"  justify="center">
                        <MdLocationOn fontSize={[20, 25, 30]} color="rgb(234, 5, 234)"/>
                        <Text fontFamily="FreeMono, monospace">Lagos, Nigeria</Text> 
                    </HStack>
                   <Stack m="10px" align="center" justifyContent="center">
                        <Button className={styles.button} onClick={openMail}  borderRadius="40px"  w={["150px","200px","300px"]} h="50px" fontSize={[10, 12, 15]} bg="transparent"  border="1px solid #10c6bb" color="#10c6bb">
                            Get in Touch
                            <span className={styles.icon}><AiOutlineArrowRight/></span>
                        </Button>
                        <Box>
                           <a fontSize={[10, 12, 14,16]}  target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1jmVqg8PHvBeLvEqsg2Ct84dZCSHM1P15/view?usp=sharing">
                            <Button className={styles.button}  borderRadius="40px"  w={["150px","200px","300px"]}  h="50px"  fontSize="15px" bg="transparent"  border="1px solid #10c6bb" color="#10c6bb">Resume
                            <span className={styles.icon}><AiOutlineArrowRight/></span>
                            </Button>
                            </a>
                        </Box>
                    </Stack>
                 <HStack  m={[5, 10]} color="#5a60ea" spacing={10} fontSize={[20,30]} justify="center" >
                    <a href="https://twitter.com/chidinmaCode"><BsTwitter/></a>
                    <a href="https://github.com/Simplystina"><BsGithub/></a>
                     <a href="https://www.linkedin.com/in/chidinma-nwatu-7ba6051a2/"><BsLinkedin/></a>
                 </HStack>
             </Box>
        </Box>
        
    </Flex>
    <Flex >
        <Box className={toggle ?  styles.page2show: styles.page2} p="50px 30px 10px 30px" >
        <Flex>  
            <Box onClick={open} fontSize="20px"><AiOutlineMenu/></Box> 
            <Text color="#5a60ea" ml="10px">Contact</Text>
          </Flex>
           <VStack w="100%" align="end">
                 <Text fontSize={["17px","20px","30px"]}><Link href="/">Home</Link></Text>
                <Text  fontSize={["17px","20px","30px"]}><Link href="/about">About</Link></Text>
               
                <Text fontSize={["17px","20px","30px"]}><Link href="/portfolio">Portfolio Works</Link></Text>
                <Text onClick={close} fontSize={["17px","20px","30px"]}><Link href="/contact">Contact</Link></Text>
           </VStack>
           
        
           <Box pos="fixed" bottom={10} w="100%">
               <Box className={styles.gradientext}>
                  <Typingtext></Typingtext>
               </Box>
              <Box w="100%" h="1px" bg="#827c7c"></Box>
              <HStack  spacing={10} m="10px 0" fontSize={[20,30]} color="#5a60ea">
                <a target="_blank" rel="noreferrer" href="https://twitter.com/chidinmaCode"><BsTwitter/></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Simplystina"><BsGithub/></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chidinma-nwatu-7ba6051a2/"><BsLinkedin/></a>
            </HStack>
           </Box>
           
        </Box>
    </Flex>
    </>
  )
}

export default ContactPage
